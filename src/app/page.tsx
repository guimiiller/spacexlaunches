import { getLaunches } from "@/lib/spacexAPI";
import Link from "next/link";

export default async function LaunchesPage() {
  const launches = await getLaunches();

  return (
    <div className="min-h-screen bg-transparent text-white p-6">
      <h1 className="text-4xl font-bold mb-6">SpaceX Launches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {launches.map((launch) => (
          <div
            key={launch.id}
            className="border border-gray-700 bg-gray-800 p-4 rounded shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{launch.name}</h2>
            <p>Data: {new Date(launch.date_utc).toLocaleDateString()}</p>
            <p>Foguete: {launch.rocket}</p>
            <Link
              href={`/launches/${launch.id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
