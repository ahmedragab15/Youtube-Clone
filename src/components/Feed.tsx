import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Loader, SideBar, Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import type { IVideos } from "../interfaces";
import ErrorMessage from "./ErrorMessage";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState<IVideos[] | []>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
        setVideos(data.items);
      } catch (err : unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong.");
        }
      } finally {
        setIsLoading(false);
      }
    })()
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          © 2025 Ahmed Ragab
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2,marginInline:"auto",justifyContent:{sx:"center",md:"start"} }}>
        {isLoading? <Loader/> : error ? (
          <ErrorMessage message={error} />
        ) : (
          <>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
              {selectedCategory}
              <span style={{ color: "#fc1503" }}> Videos</span>
            </Typography>
            <Videos videos={videos} />
          </>
        )}
      </Box>
    </Stack>
  );
};

export default Feed;
