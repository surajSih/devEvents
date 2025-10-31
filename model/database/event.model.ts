import { Schema, model, models, Document } from "mongoose";
import slugify from "slugify";

// ✅ Event interface for TypeScript type safety
export interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: string;
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true },
    description: { type: String, required: true, trim: true },
    overview: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    venue: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    mode: { type: String, required: true, enum: ["online", "offline", "hybrid"] },
    audience: { type: String, required: true },
    agenda: { type: [String], required: true },
    organizer: { type: String, required: true },
    tags: { type: [String], required: true },
  },
  { timestamps: true } // auto-generates createdAt and updatedAt
);

// ✅ Pre-save hook for slug, date, and time normalization
EventSchema.pre<IEvent>("save", function (next) {
  // Generate slug only if title changes or slug not set
  if (this.isModified("title") || !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }

  // Normalize date to ISO format
  const parsedDate = new Date(this.date);
  if (isNaN(parsedDate.getTime())) {
    return next(new Error("Invalid date format. Must be a valid date string."));
  }
  this.date = parsedDate.toISOString();

  // Normalize time (HH:MM format)
  const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!timePattern.test(this.time)) {
    return next(new Error("Invalid time format. Use HH:MM (24-hour)."));
  }

  // Basic validation for required fields
  const requiredFields = [
    "title",
    "description",
    "overview",
    "image",
    "venue",
    "location",
    "mode",
    "audience",
    "agenda",
    "organizer",
    "tags",
  ];
  for (const field of requiredFields) {
    if (!this[field as keyof IEvent]) {
      return next(new Error(`${field} is required.`));
    }
  }

  next();
});

// Unique index on slug for fast lookups
EventSchema.index({ slug: 1 }, { unique: true });

export const Event = models.Event || model<IEvent>("Event", EventSchema);
