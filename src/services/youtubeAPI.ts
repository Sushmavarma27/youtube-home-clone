import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchVideos = async () => {
  const res = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: "snippet",
      maxResults: 12,
      q: "music",
      type: "video",
      key: API_KEY,
    },
  });
  return res.data.items;
};

export const fetchShorts = async () => {
  const res = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: "snippet",
      maxResults: 8,
      q: "funny shorts",
      type: "video",
      videoDuration: "short",
      key: API_KEY,
    },
  });
  return res.data.items;
};