import axios from "axios";

const KEY = "AIzaSyDf3tvCbhws3gW-KDxQ6RjFZnqejHWxM6c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY },
});
