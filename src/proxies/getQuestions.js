import axios from "axios"

export const BASE_URL = process.env.BASE_URL ?? "https://the-trivia-api.com/api";

export const getQuestions = ({categoryText, numberOfQuestions, difficulty}) => {
    return axios
      .get(
        `${BASE_URL}/questions?categories=${categoryText}&limit=${numberOfQuestions}&region=PH&difficulty=${difficulty}`
      )
      .then((response) => response.data);
}