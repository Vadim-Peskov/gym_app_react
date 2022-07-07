import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../API/myFitApi";

export const signInUser = createAsyncThunk(
  'signIn/signInUser',

  async ({values}, {rejectWithValue, dispatch}) => {
    try {
      const res = await getUser(values.email);
      
      if (!res.statusText === 'OK') {
        dispatch(setAlert('Ошибка сервера'));
      }

      let data = await res.data;
      let loginInDatabase = false;

      if (data.length > 0) {
        data.forEach(i => {
          data.forEach(i => {
            if (i.login === values.email) loginInDatabase = true;
          })
        })
      }

      if (loginInDatabase) dispatch(setAuth(true));
      else dispatch(setAlert('Пользователь не найден'));
    }

    catch (error) {
      dispatch(setAlert('Ошибка при загрузке'));
      return rejectWithValue(error.message);
    }
  }
)

const signInSlice = createSlice({
  name: 'signIn',
  initialState: {
    auth: false,
    alert: null,
    status: null,
    error: null,
  },
  reducers: {
    setAuth(state, action) {
      state.auth = action.payload;
    },
    setAlert(state, action) {
      state.alert = action.payload;
    },
  },
  extraReducers: {
    [signInUser.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [signInUser.fulfilled]: (state, action) => {
      state.status = 'resolved';
    },
    [signInUser.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
})

export const {setAuth, setAlert} = signInSlice.actions;
export default signInSlice.reducer;