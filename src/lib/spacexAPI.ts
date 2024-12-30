import axios from "axios";

const BASE_URL = "https://api.spacexdata.com/v4";

// Definindo tipos para os lançamentos
export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  rocket: string;
  details?: string;
}

export async function getLaunches(): Promise<Launch[]> {
  try {
    const { data } = await axios.get<Launch[]>(`${BASE_URL}/launches`);
    return data;
  } catch (error) {
    console.error("Failed to fetch launches:", error);
    throw new Error("Could not fetch launches.");
  }
}

export async function getLaunchById(id: string): Promise<Launch> {
  try {
    const { data } = await axios.get<Launch>(`${BASE_URL}/launches/${id}`);
    return data;
  } catch (error) {
    console.error(`Failed to fetch launch with ID ${id}:`, error);
    throw new Error("Launch not found or invalid ID.");
  }
}
