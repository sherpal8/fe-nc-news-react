import axios from "axios";
const BASE_URL = "https://be-nc-news-sherpal.herokuapp.com/api";

// get topics
export const getTopics = async () => {
  const topicsData = await axios.get(`${BASE_URL}/topics`);
  return topicsData.data.topics;
};

// get all articles
export const getAllArticles = async () => {
  const articlesData = await axios.get(`${BASE_URL}/articles`);
  return articlesData.data.articles;
};
