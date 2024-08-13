import useSWR from "swr";
import axios from "axios";
import { PortfolioSections } from "../types/data";

const fetcher = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("Fetching error:", error);
    throw error; // Re-throw the error for SWR to handle
  }
};

export default function useDataSWR() {
  const {
    data,
    error,
    isValidating: isLoading,
  } = useSWR<PortfolioSections[]>(
    "https://justine-135.github.io/me-api/data.json",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0,
    }
  );

  return {
    data,
    error,
    isLoading,
  };
}
