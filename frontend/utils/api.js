const { API_URL, STRAPI_API_TOKEN } = require("./urls.js");
import axios from "axios";

export const fetchDataFromApi = async (endpoint) => {
  // const options = {
  //     method: "GET",
  //     headers: {
  //         "Content-Type" : "application/json",
  //         "Authorization": `Bearer ${STRAPI_API_TOKEN}`,
  //         "Access-Control-Allow-Origin": "https://orange-psychiatrist-sijty.ineuron.app:3000",
  //         "Access-Control-Allow-Headers": "Content-Type, Authorization, Origin, Accept",
  //         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
  //     }
  // }

  // const res = await fetch(`${API_URL}${endpoint}`, options);
  // console.log(`${API_URL}${endpoint}`);
  // const data = await res.json();

  let { data } = await axios.get(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  });

  return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
  const data = await axios.post(`${API_URL}${endpoint}`, payload, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    }
  });
  
  return data;
};
