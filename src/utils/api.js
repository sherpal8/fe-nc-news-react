import axios from "axios";
const BASE_URL = "https://be-nc-news-sherpal.herokuapp.com/api";

// get topics
export const getTopics = async () => {
  const {
    data: { topics }
  } = await axios.get(`${BASE_URL}/topics`);
  return topics;
};

// get all articles - then filter if required
export const getArticles = async (topicSearch, sorted_by) => {
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: { sorted_by }
  });
  if (topicSearch) {
    return data.articles.filter(article => {
      return article.topic === topicSearch;
    });
  } else {
    return data.articles;
  }

  // todo: refactor backend to use this below
  // {
  //   params: {
  //     topic;
  //   }
  // }
  // return data.articles;
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
