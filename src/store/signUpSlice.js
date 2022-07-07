import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, postUser } from "../API/myFitApi";

export const signUpUser = createAsyncThunk(
  'signUp/signUpUser',

  async ({values}, {rejectWithValue, dispatch}) => {
    try {
      const res = await getUser(values.email);
      
      if (!res.statusText === 'OK') {
        throw new Error('Server Error!');
      }

      let data = await res.data;
      let loginInDatabase = false;

      if (data.length > 0) {
        data.forEach(i => {
         if (i.login === values.email) loginInDatabase = true;
        })
      }

      if (loginInDatabase) dispatch(setAlert('Пользователь уже есть в системе'));

      else {
        const res = await postUser(values);
      
        if (!res.statusText === 'OK') {
          dispatch(setAlert('Ошибка сервера'));
        }
        else dispatch(setAlert('Вы зарегистрированы!'));
      }
    }

    catch (error) {
      dispatch(setAlert('Ошибка при загрузке'));
      return rejectWithValue(error.message);
    }
  }
)

const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    status: null,
    alert: null,
    error: null,
  },
  reducers: {
    setAlert(state, action) {
      state.alert = action.payload;
    }
  },
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.status = 'resolved';
    },
    [signUpUser.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
})

export const {setAlert} = signUpSlice.actions;
export default signUpSlice.reducer;