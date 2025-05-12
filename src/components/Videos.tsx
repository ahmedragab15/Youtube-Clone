import { Stack, Box, Typography } from "@mui/material";
import type { IVideos } from "../interfaces";
import { VideoCard, ChannelCard } from "./index";

type Direction = "row" | "column"

const Videos = ({ videos, direction }: { videos: IVideos[] , direction?: Direction }) => {
  return (
    <Stack direction={direction || "row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
      {videos?.length > 0 ? (
        videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} marginTop="0" />}
          </Box>
        ))
      ) : (
        <Typography variant="h6" color="#fff">
          No videos found.
        </Typography>
      )}
    </Stack>
  );
};

export default Videos;
