import Explorebtn from "@/components/Explorebtn";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/constants";

export default function page() {
 
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every dev <br />
        Event you cant miss
      </h1>
      <p className="text-center mt-5">
        Hackathons , Meetups and Conferneces ,All in one Place
      </p>
      <Explorebtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
