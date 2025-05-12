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
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429 || error.message?.includes("quota")) {
        throw new Error("API quota has been exceeded. Please try again later.");
      }
      throw new Error(error.response?.data?.message || "Failed to fetch data.");
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};