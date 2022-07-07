import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signInSlice";
import signUpReducer from "./signUpSlice";
import workoutsReducer from "./workoutsSlice";
import nutritionReducer from "./nutritionSlice";

export default configureStore({
  reducer: {
    signInReducer,
    signUpReducer,
    workoutsReducer,
    nutritionReducer
  }
});
