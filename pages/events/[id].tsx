import { GetStaticPaths, GetStaticProps } from "next";
import events from "../../data/events.json";
import Head from "next/head";

export default function EventDetail({ event }: { event: any }) {
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={`Details about ${event.title}`} />
      </Head>
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        <p className="text-sm text-gray-600 mb-2">{new Date(event.date).toDateString()}</p>
        <p className="text-sm text-gray-500 mb-4">{event.location}</p>
        <p className="text-lg text-gray-800">{event.description}</p>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = events.map((event) => ({
    params: { id: event.id }
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const event = events.find((e) => e.id === params?.id);
  return { props: { event } };
};
