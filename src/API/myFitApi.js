import axios from "axios";
import { v4 as uuid } from 'uuid';

export const instance = axios.create({
  baseURL: "http://localhost:3001"
});

export const getWorkouts = () => instance('/workouts');
export const getNutrition = () => instance('/nutrition');
export const getUser = (email) => {
  return instance(`/users`, {
    params: {
      login_like: email
    }
  });
};
export const postUser = (data) => {
  return instance(`/users`, {
    method: "POST",
    data: {
      "id": uuid(),
      "login": data["email"],
      "password": data["password"]
    }
  });
};