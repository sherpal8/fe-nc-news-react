import axios from "axios";

const BASE_URL = "https://be-nc-news-sherpal.herokuapp.com/api";

// const BASE_URL = "https://bencnews.herokuapp.com/";

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

// check username
export const checkUsername = async username => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data;
};

// post comment
export const postComment = async (article_id, username, body) => {
  // first check username exists
  const { user } = await checkUsername(username);
  // only then delete
  if (user) {
    const { data } = await axios.post(
      `${BASE_URL}/articles/${article_id}/comments`,
      {
        username,
        body
      }
    );
    return data.comment;
  }
};

// vote changer
export const voteChanger = async (id, inc_votes, section) => {
  const { data } = await axios.patch(`${BASE_URL}/${section}/${id}`, {
    inc_votes
  });
  return data.article;
};

// delete comment
export const deleteComment = async comment_id => {
  axios.delete(`${BASE_URL}/comments/${comment_id}`);
};
