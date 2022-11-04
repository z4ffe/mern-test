import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './assets/Components/App/App.jsx'
import {Provider} from "react-redux";
import {store} from "./assets/store/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
	  <App/>
   </Provider>
)
