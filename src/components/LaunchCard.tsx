import Link from "next/link";

type Launch = {
    id: string
    name: string
    date_utc: string
    rocket: string
}

export default function LaunchCard({ launch }: {launch: Launch}) {
  return (
    <div className="border p-6 rounded-lg shadow-md bg-[#21262D] hover:bg-[#30363D] transition transform hover:scale-105">
      <h2 className="text-2xl font-semibold text-[#EDEDED]">{launch.name}</h2>
      <p className="text-[#8B949E]">Data: {new Date(launch.date_utc).toLocaleDateString()}</p>
      <p className="text-[#8B949E]">Foguete: {launch.rocket}</p>

      <Link href={`/launches/${launch.id}`}>
        <span className="block mt-4 text-[#58A6FF] hover:underline">Ver detalhes</span>
      </Link>
    </div>
  );
}
