import type { IVideos } from "../interfaces";
import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoChannelUrl, demoProfilePicture } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channelDetail, marginTop }: { channelDetail: IVideos , marginTop: string }) => {
  if (!channelDetail?.id?.channelId || !channelDetail?.snippet) return null;

  const {
    id: { channelId },
    snippet,
  } = channelDetail;

  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", width: { xs: "356px", md: "320px" }, height: "326px", margin: "auto", marginTop }}>
      <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
        <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#fff" }}>
          <CardMedia component="img" image={snippet?.thumbnails?.high?.url || demoProfilePicture} alt={snippet?.title} sx={{ borderRadius: "50%", height: "180px", width: "180px", mb: 2, border: "1px solid #e3e3e3" }} />
          <Typography variant="h6">
            {snippet?.title || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && <Typography>{parseInt(channelDetail.statistics.subscriberCount).toLocaleString()} Subscribers</Typography>}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
