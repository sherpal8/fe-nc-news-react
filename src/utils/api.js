import axios from "axios";
// const BASE_URL = "https://be-nc-news-sherpal.herokuapp.com/api";
const BASE_URL = "https://bencnews.herokuapp.com/api";

// get topics
export const getTopics = async () => {
  const {
    data: { topics }
  } = await axios.get(`${BASE_URL}/topics`);
  return topics;
};

// get all articles - then filter if required
export const getArticles = async (topic, sort_by) => {
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: { topic, sort_by }
  });
  return data.articles;
};

// get single article based on article_id
export const getArticleById = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
};

// get comment by article ID
export const getCommentsByArticleId = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comments;
};
