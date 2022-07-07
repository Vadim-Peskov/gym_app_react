import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNutrition } from "../API/myFitApi";

export const loadNutrition = createAsyncThunk(
  'nutrition/loadNutrition',

  async (_, {rejectWithValue, dispatch}) => {
    try {
      const res = await getNutrition();
      
      if (!res.statusText === 'OK') {
        throw new Error('Server Error!');
      }

      let data = await res.data;
      let keys = Object.keys(data).map(i => [i, data[i]['group']]);
      
      dispatch(setNutritionList(data));
      dispatch(setNutritionKeys(keys));
    }

    catch (error) {
      return rejectWithValue(error.message);
    }
  }
)


const nutritionSlice = createSlice({
  name: 'nutrition',
  initialState: {
    status: null,
    error: null,
    nutritionList: [],
    nutritionKeys: [],
  },
  reducers: {
    setNutritionList(state, action) {
      state.nutritionList = action.payload;
    },
    setNutritionKeys(state, action) {
      state.nutritionKeys = action.payload;
    },
  },
  extraReducers: {
    [loadNutrition.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [loadNutrition.fulfilled]: (state, action) => {
      state.status = 'resolved';
    },
    [loadNutrition.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
})

export const {setNutritionList, setNutritionKeys} = nutritionSlice.actions;
export default nutritionSlice.reducer;