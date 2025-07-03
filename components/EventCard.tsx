import Link from "next/link";

type Props = {
  event: {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
  };
};

export default function EventCard({ event }: Props) {
  return (
    <Link href={`/events/${event.id}`}>
      <article className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl border hover:border-blue-500 transition cursor-pointer group">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-500 group-hover:text-blue-600 transition">
            {new Date(event.date).toLocaleDateString()}
          </span>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {event.location}
          </span>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition">
          {event.title}
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {event.description}
        </p>
      </article>
    </Link>
  );
}
