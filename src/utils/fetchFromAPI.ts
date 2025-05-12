import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchFromAPI = async (url: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, {
      params: {
        maxResults: 50,
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
      },
    });
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Something went wrong while fetching data.");
  }
};
