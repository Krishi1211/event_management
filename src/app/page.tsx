// src/app/page.tsx
'use client';

import { useState } from 'react';
import { events } from '@/data/events';
import EventCard from '@/components/EventCard';

export default function HomePage() {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  const uniqueLocations = [...new Set(events.map(event => event.location))];
  const uniqueCategories = [...new Set(events.map(event => event.category))];

  const filteredEvents = events.filter(event => {
    return (
      (location ? event.location === location : true) &&
      (category ? event.category === category : true) &&
      (search ? event.title.toLowerCase().includes(search.toLowerCase()) : true)
    );
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative text-center py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-800 dark:to-purple-900 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-[url('/event-images/hero.jpg')] bg-cover bg-center opacity-10"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md tracking-tight z-10 relative">🌟 India’s Premier Events Hub</h1>
        <p className="mt-6 text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto relative z-10">
          Discover top tech, business, and creative events across India. Unleash your potential.
        </p>
        <div className="mt-8 z-10 relative">
          <button className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold shadow hover:bg-gray-100 transition-all">
            Submit Your Event
          </button>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-12 px-6 text-center bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">Why Explore With Us?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          🎯 Curated experiences • 🌍 Nationwide coverage • 💡 Top industry experts • 🎉 1000+ happy attendees
        </p>
      </section>

      {/* Filters + Cards Section */}
      <section className="p-6 max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-6 text-indigo-700 dark:text-indigo-300">🎟️ Upcoming Events</h3>

        <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center items-center">
          <select
            className="border p-2 rounded shadow bg-white text-gray-800 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-400"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {uniqueLocations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          <select
            className="border p-2 rounded shadow bg-white text-gray-800 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-400"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {uniqueCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <input
            type="text"
            className="border p-2 rounded shadow bg-white text-gray-800 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <p className="text-center text-gray-500 mt-12 text-lg font-medium">😕 No events match your filter.</p>
        )}
      </section>

      {/* Footer CTA */}
      <footer className="bg-indigo-600 dark:bg-indigo-900 text-white py-8 text-center">
        <h4 className="text-2xl font-bold">🚀 Ready to make your mark?</h4>
        <p className="text-md mt-2">Join thousands of attendees or host your own event today.</p>
        <button className="mt-4 px-6 py-2 bg-white text-indigo-700 font-semibold rounded-full hover:bg-gray-100 transition-all">
          Host an Event
        </button>
      </footer>
    </main>
  );
}