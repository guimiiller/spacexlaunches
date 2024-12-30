import { getLaunchById } from "@/lib/spacexAPI";

interface LaunchDetailsProps {
  params: { id: string };
}

export default async function LaunchDetails({ params }: LaunchDetailsProps) {
  
  const launch = await getLaunchById(params.id);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0D1117] text-[#EDEDED]">
      <div className="max-w-2xl w-full bg-[#21262D] p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{launch.name}</h1>
        <p className="text-lg">Data: {new Date(launch.date_utc).toLocaleDateString()}</p>
        <p className="text-lg">Foguete: {launch.rocket}</p>
        {launch.details && <p className="mt-4 text-[#A6A6A6]">{launch.details}</p>}
        <a
          href="https://www.spacex.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-blue-500 hover:underline"
        >
          Saiba mais no site oficial
        </a>
      </div>
    </div>
  );
}
