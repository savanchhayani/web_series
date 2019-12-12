import axios from "axios";

const fetchWebSeriesCall = () => {
  return axios.get("https://api.myjson.com/bins/j23xw");
};

export { fetchWebSeriesCall };
