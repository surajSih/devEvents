// lib/constants.ts

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  link: string;
  time?: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Next.js Conf 2025",
    date: "2025-11-12",
    location: "San Francisco, USA",
    description:
      "A conference by Vercel for developers building the modern web with Next.js, React, and AI-driven tools.",
    image: "/images/event1.png",
    link: "https://nextjs.org/conf",
    time: "10:00 AM - 5:00 PM",
  },
  {
    id: "2",
    title: "Google I/O 2025",
    date: "2025-05-14",
    location: "Mountain View, USA",
    description:
      "Google’s annual developer event featuring the latest in Android, AI, and web technologies.",
    image: "/images/event2.png",
    link: "https://io.google",
    time: "9:00 AM - 6:00 PM",
  },
  {
    id: "3",
    title: "GitHub Universe 2025",
    date: "2025-10-22",
    location: "Los Angeles, USA",
    description:
      "GitHub’s global event for developers to learn about AI in coding, open source, and the future of DevOps.",
    image: "/images/event3.png",
    link: "https://githubuniverse.com",
    time: "11:00 AM - 4:00 PM",
  },
  {
    id: "4",
    title: "AWS re:Invent 2025",
    date: "2025-12-01",
    location: "Las Vegas, USA",
    description:
      "Amazon Web Services’ biggest event focusing on cloud computing, AI, and infrastructure at scale.",
    image: "/images/event4.png",
    link: "https://reinvent.awsevents.com",
    time: "8:00 AM - 7:00 PM",
  },
  {
    id: "5",
    title: "Hack the Future 2025",
    date: "2025-08-17",
    location: "Bengaluru, India",
    description:
      "A 48-hour hackathon bringing together the best developers and innovators to solve real-world challenges.",
    image: "/images/event5.png",
    link: "https://hackthefuture.dev",
    time: "All Day",
  },
  {
    id: "6",
    title: "React Summit 2025",
    date: "2025-06-10",
    location: "Amsterdam, Netherlands",
    description:
      "The world’s largest React conference with talks, workshops, and networking for front-end developers.",
    image: "/images/event6.png",
    link: "https://reactsummit.com",
    time: "9:30 AM - 5:30 PM",
  },
];
