import { getLaunchById } from "@/lib/spacexAPI";
import Link from "next/link";

export default async function LaunchDetails({ params }: { params: { id: string } }) {
  const launch = await getLaunchById(params.id);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0D1117] text-[#EDEDED]">
      <div className="max-w-2xl w-full bg-[#21262D] p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{launch.name}</h1>
        <p className="text-lg">Data: {new Date(launch.date_utc).toLocaleDateString()}</p>
        <p className="text-lg">Foguete: {launch.rocket}</p>
        {launch.details && <p className="mt-4">{launch.details}</p>}
        <Link
          href="https://www.spacex.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-blue-500 hover:underline"
        >
          Saiba mais no site oficial
        </Link>
      </div>
    </div>
  );
}
