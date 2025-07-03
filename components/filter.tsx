type Props = {
  location: string;
  setLocation: (loc: string) => void;
};

export default function Filter({ location, setLocation }: Props) {
  return (
    <input
      type="text"
      placeholder="🔍 Filter by location (e.g. San Francisco)"
      className="w-full sm:w-96 px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
    />
  );
}
