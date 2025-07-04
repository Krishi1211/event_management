import { useState } from "react";
import events from "../data/events.json";
import EventCard from "../components/EventCard";
import Filter from "../components/filter";
import Head from "next/head";

export default function HomePage() {
  const [location, setLocation] = useState("");

  const filteredEvents = location
    ? events.filter((e) =>
        e.location.toLowerCase().includes(location.toLowerCase())
      )
    : events;

  return (
    <>
      <Head>
        <title>Events Explorer</title>
        <meta
          name="description"
          content="Discover and explore upcoming tech events around the world"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-50 px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-4">
            🌐 Explore Upcoming Events
          </h1>
          <p className="text-lg text-center text-gray-600 mb-10">
            Discover curated tech meetups, conferences, and experiences near you
          </p>

          <div className="flex justify-center mb-10">
            <Filter location={location} setLocation={setLocation} />
          </div>

          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No events found for this location.
              </p>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
