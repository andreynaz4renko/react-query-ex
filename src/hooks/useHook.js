import { useQuery } from "@tanstack/react-query";
import { fetchRoverPhotos } from "../api/request";

export const useHook = () =>
  useQuery({
    queryKey: ["photos"],
    queryFn: fetchRoverPhotos,
  });
