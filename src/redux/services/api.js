import axios from "axios";

//const API_ROOT = "https://api.github.com/";
const API_ROOT = "https://jsonplaceholder.typicode.com/";

// Fetches an API response
function callApi(endpoint) {
  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;

  console.log("callApi", fullUrl);

  return axios
    .get(fullUrl)
    .then(res => {
      const result = res;
      return { result }; //返して代入する変数名と合わせる
    })
    .catch(err => {
      return { err };
    });
}

export const fetchPosts = id => callApi(`posts/${id}`);
export const fetchComments = id => callApi(`comments/${id}`);
