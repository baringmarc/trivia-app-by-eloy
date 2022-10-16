import axios from "axios";
import {BASE_URL} from "./getQuestions"

export const getCategories = () => {
    return axios
      .get(`${BASE_URL}/categories`)
      .then((response) => response.data); 
}