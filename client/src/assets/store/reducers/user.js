import {createSlice} from "@reduxjs/toolkit";
import {addUser} from "../thunks/userThunk.js";

export const userSlice = createSlice({
   name: 'user',
   initialState: {
	  registered: false,
   },
   reducers: {
	  registerStatus: (state, action) => {
		 if (action.payload === 'registered') state.registered = true
	  }
   },
   extraReducers: builder => {
	  builder
		 .addCase(addUser.pending, (state, action) => {
			console.log(action.payload)
			console.log('pending')
		 })
		 .addCase(addUser.fulfilled, (state, action) => {
			console.log('fulfilled')
		 })
		 .addCase(addUser.rejected, (state, action) => {
			console.log((action.payload));
			console.log('rejected')
		 })
   }
})

export const {registerStatus} = userSlice.actions
export default userSlice.reducer
