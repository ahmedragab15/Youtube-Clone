import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import type { IVideos } from "../interfaces";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState<IVideos | null>(null);
  const [videos, setVideos] = useState<IVideos[] | []>([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <>
          <div style={{ background: "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)", zIndex: 10, height: "300px" }} />
          <ChannelCard channelDetail={channelDetail} marginTop="-93px" />

          <div>{/* <Videos videos={videos} /> */}</div>
        </>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
