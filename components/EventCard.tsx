import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string; // Unique identifier
  title: string; // Event name
  date: string; // Event date in ISO format (YYYY-MM-DD)
  location: string; // City and country
  description: string; // Short event description
  image: string; // Path to image (from public/images)
  link: string;
  time?: string; // Event time (optional)
}

export default function EventCard(event: Props) {
  return (
    <Link href={`/event`} id="event-card">
      <Image
        src={event.image}
        alt={event.title}
        width={410}
        height={300}
        className="poster"
      />
      <div className="flex flex-row gap-2">
        <Image src="/icons/pin.svg" alt="pin" width={14} height={14} />
        <p className="location">{event.location}</p>
      </div>
      <p className="title">{event.title}</p>
      <div className="">
        <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
        <p className="date">{event.date}</p>
      </div>
      <div className="">
        <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
        <p className="date">{event.time}</p>
      </div>
    </Link>
  );
}
