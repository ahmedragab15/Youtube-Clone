import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Typography, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos , Loader } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import type { IVideos } from "../interfaces";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState<IVideos | null>(null);
  const [videos, setVideos] = useState<IVideos[] | []>([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const videoData = await fetchFromAPI(`videos?part=snippet,statistics&id=${id}`);
      if (videoData?.items) setVideoDetail(videoData.items[0]);

      const relatedData = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`);
      if (relatedData?.items) setVideos(relatedData.items);
    })()
  }, [id]);
  
  if (!videoDetail?.snippet || !videoDetail?.statistics) return <Loader />;

  const { snippet: { title,channelId ,channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
  
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }} >
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography sx={{ fontSize: { sm: "13px", md: "17px", color: "#fff", opacity: 0.8 } }}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      {videos.length > 0 && (
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignSelf="center">
          <Videos videos={videos} direction="column" />
        </Box>
      )}
      </Stack>
    </Box>
  );
};

export default VideoDetail;
