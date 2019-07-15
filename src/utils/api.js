import axios from "axios";
const BASE_URL = "https://be-nc-news-sherpal.herokuapp.com/api";

// get topics
export const getTopics = async () => {
  const topicsData = await axios.get(`${BASE_URL}/topics`);
  return topicsData.data.topics;
};
