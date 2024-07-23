import useSWR from "swr";
import axios from "axios";
import { PortfolioSections } from "../types/data";

const fetcher = async (url: string) => {
  const res = await axios.get(url).then(function (response) {
    return response.data;
  });

  return res;
};

export default function useDataSWR() {
  const {
    data,
    error,
    isValidating: isLoading,
  } = useSWR<PortfolioSections[]>(
    "https://justine-135.github.io/me-api/data.json",
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}
