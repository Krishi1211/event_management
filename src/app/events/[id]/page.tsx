// src/app/events/[id]/page.tsx
import { events } from '@/data/events';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export async function generateStaticParams() {
  return events.map(event => ({
    id: event.id
  }));
}

// ✅ Correct typing of props for App Router dynamic route
export default function EventDetail({ params }: { params: { id: string } }) {
  const event = events.find(e => e.id === params.id);

  if (!event) return notFound();

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
      <p className="text-gray-600">{event.date} | {event.location}</p>

      {/* You can switch to <Image /> if you're using local images and want optimization */}
      <img
        src={event.image}
        alt={event.title}
        className="my-4 w-full h-64 object-cover rounded"
      />

      <p className="text-lg">{event.description}</p>
    </main>
  );
}
