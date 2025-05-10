import axios from "axios";

const API_KEY = "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (url: string) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, {
      params: {
        maxResults: 50,
      },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    });
    return data;
};