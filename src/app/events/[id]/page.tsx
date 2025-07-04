import { events } from '@/data/events';
import { notFound } from 'next/navigation';
import Image from 'next/image';

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return events.map(event => ({
    id: event.id
  }));
}

export default function EventDetail({ params }: Props) {
  const event = events.find(e => e.id === params.id);

  if (!event) return notFound();

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
      <p className="text-gray-600">{event.date} | {event.location}</p>
      <img src={event.image} alt={event.title} className="my-4 w-full h-64 object-cover rounded" />
      <p className="text-lg">{event.description}</p>
    </main>
  );
}
