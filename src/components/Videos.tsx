import { Stack, Box, Typography } from "@mui/material";
import type { IVideos } from "../interfaces";
import { VideoCard, ChannelCard } from "./index";

type Direction = "row" | "column";

const Videos = ({ videos, direction }: { videos: IVideos[]; direction?: Direction }) => {
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
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Typography variant="h6" color="error">
            API quota has been exceeded. Please try again later.
          </Typography>
          <Typography variant="body2" color="gray">
            Please try again later or contact the site owner if this issue persists.
          </Typography>
        </Box>
      )}
    </Stack>
  );
};

export default Videos;
