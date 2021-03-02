import fetch from "node-fetch";

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const responseJSON = await response.json();

    return responseJSON;
  } catch (err) {
    return { error: err.message };
  }
};

export default fetchData;
