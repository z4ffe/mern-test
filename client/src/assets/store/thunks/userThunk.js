import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const addUser = createAsyncThunk('user/addUser', async (data) => {
   try {
	  await axios({
		 method: "POST",
		 url: `http://localhost:5005/api/user`,
		 headers: {
			"Content-Type": "application/json"
		 },
		 data: data
	  })
   } catch (err) {
	  throw err
   }
})

