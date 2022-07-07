import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWorkouts} from "../API/myFitApi";

export const loadWorkouts = createAsyncThunk(
  'workouts/loadWorkouts',

  async (_, {rejectWithValue, dispatch}) => {
    try {
      const res = await getWorkouts();
      
      if (!res.statusText === 'OK') {
        throw new Error('Server Error!');
      }

      let data = await res.data;
      let keys = Object.keys(data).map(i => [i, data[i]['group']]);

      dispatch(setWokoutsList(data));
      dispatch(setWokoutsKeys(keys));
    }

    catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState: {
    status: null,
    error: null,
    wokoutsList: [],
    wokoutsKeys: [],
  },
  reducers: {
    setWokoutsList(state, action) {
      state.wokoutsList = action.payload;
    },
    setWokoutsKeys(state, action) {
      state.wokoutsKeys = action.payload;
    },
  },
  extraReducers: {
    [loadWorkouts.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [loadWorkouts.fulfilled]: (state, action) => {
      state.status = 'resolved';
    },
    [loadWorkouts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
})

export const {setWokoutsList, setWokoutsKeys} = workoutsSlice.actions;
export default workoutsSlice.reducer;