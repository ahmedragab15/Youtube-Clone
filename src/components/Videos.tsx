import { Stack, Box } from "@mui/material";
import type { IVideos } from "../interfaces";
import { VideoCard, ChannelCard } from "./index";

const Videos = ({ videos }: { videos: IVideos[] }) => {

  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} marginTop="0" />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
