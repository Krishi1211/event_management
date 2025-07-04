// src/components/EventCard.tsx
'use client';
import Link from 'next/link';

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
};

const EventCard = ({ event }: { event: Event }) => (
  <Link href={`/events/${event.id}`}>
    <div className="border p-4 rounded-lg shadow hover:bg-gray-100 transition cursor-pointer">
      <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{event.title}</h2>
      <p className="text-gray-600">{event.date} — {event.location}</p>
      <p className="text-sm mt-1">{event.description}</p>
    </div>
  </Link>
);

export default EventCard;
