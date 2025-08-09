

//For production,use this "/api" else localhost:7777

const BASE_URL = import.meta.env.PROD
  ? "/api"
  : "http://localhost:7777";

export default BASE_URL;
