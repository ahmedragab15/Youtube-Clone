import type { IVideos } from "../interfaces";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
import { formatDistanceToNow, parseISO } from "date-fns";

function getTimeAgo(publishTime: string) {
  return formatDistanceToNow(parseISO(publishTime), { addSuffix: true });
}

const VideoCard = ({ video }: { video: IVideos }) => {
  const {
    id: { videoId },
    snippet,
  } = video;

  return (
    <Card sx={{ width: { xs: "358px", md: "320px" }, maxWidth:"100%", boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia component="img" image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }} />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF" sx={{ lineClamp: 1 }} title={snippet?.title}>
            {snippet?.title.length > 60 ? `${snippet?.title.slice(0, 60)}...` : snippet?.title || demoVideoTitle}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {getTimeAgo(snippet?.publishedAt)}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
