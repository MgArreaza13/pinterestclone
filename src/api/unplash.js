import axios from "axios";

export default axios.create({
  baseURL: "https://api.unplash.com/",
  headers: {
    Authorization:
      "CLIENT-ID 91cc619d289079a165274011ff3314e5aa938b93c395739fc4651cc21e92e705",
    "Accept-Version": "v1",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
