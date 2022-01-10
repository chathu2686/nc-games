import axios from "axios";

const gameDataApi = axios.create({
  baseURL: "https://thar-first-game.herokuapp.com/api",
});
