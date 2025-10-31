import { Schema, model, models, Document, Types } from "mongoose";
import { Event } from "./event.model";

// ✅ Booking interface for type safety
export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    eventId: { type: Schema.Types.ObjectId, ref: "Event", required: true },
    email: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

// ✅ Pre-save validation hook
BookingSchema.pre<IBooking>("save", async function (next) {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(this.email)) {
    return next(new Error("Invalid email address."));
  }

  // Verify that eventId references an existing Event
  const eventExists = await Event.exists({ _id: this.eventId });
  if (!eventExists) {
    return next(new Error("Referenced event does not exist."));
  }

  next();
});

// Index for faster event-based queries
BookingSchema.index({ eventId: 1 });

export const Booking = models.Booking || model<IBooking>("Booking", BookingSchema);
