import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import type { IVideos } from "../interfaces";
import { useParams } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const SearchFeed = () => {
  const [videos, setVideos] = useState<IVideos[] | []>([]);
  const [error, setError] = useState<string | null>(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try{
        setError(null);
        const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
        setVideos(data.items);
      } catch (err : unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong.");
        }
      }
    };
    fetchData();
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:
        <span style={{ color: "#fc1503" }}> {searchTerm}</span> videos
      </Typography>
      {error ? <ErrorMessage message={error} /> : <Videos videos={videos} />}
    </Box>
  );
};

export default SearchFeed;
