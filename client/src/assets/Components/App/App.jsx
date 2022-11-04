import React from 'react';
import styles from './App.module.scss'
import {useFormik} from "formik";
import * as Yup from 'yup'
import {Alert} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../../store/thunks/userThunk.js";


const App = () => {
   const dispatch = useDispatch()
   const storeUser = useSelector(state => state.user)

   const registrationForm = useFormik({
	  initialValues: {
		 email: '',
		 nickname: '',
		 password: '',
		 country: '',
		 year: '',
		 club: ''
	  },
	  validationSchema: Yup.object({
		 email: Yup.string()
			.required('Email is required')
			.email('Entered email is invalid'),
		 nickname: Yup.string()
			.required('Nickname is required')
			.min(4, 'Nickname shorter than 4 chars'),
		 password: Yup.string()
			.required('Password is required')
			.min(6, 'Password must be at least 6 chars'),
		 country: Yup.string(),
		 year: Yup.string()
			.min(4)
			.max(4),
		 club: Yup.string()
	  }),
	  onSubmit: (values, {resetForm}) => {
		 dispatch(addUser(values))
		 resetForm()
	  }
   })


   return (
	  <div className={styles.container}>
		 <div className="mx-auto pt-5">
			{storeUser.registered ? <h3>Registered</h3> : <h3>Not Registered</h3>}
		 </div>
		 <form onSubmit={registrationForm.handleSubmit} className="d-flex flex-column m-auto w-100">
			<div className="d-flex flex-column">
			   <label htmlFor="email" className="mx-auto">Email: </label>
			   <input type="email" name="email"
					  className="form-control w-50 mx-auto" {...registrationForm.getFieldProps('email')}/>
			   {(registrationForm.errors.email && registrationForm.touched.email) &&
				  <Alert className="w-50 mx-auto">asd</Alert>}
			</div>
			<div className="d-flex flex-column">
			   <label htmlFor="nickname" className="mx-auto">Nickname: </label>
			   <input type="text" name="nickname"
					  className="form-control w-50 mx-auto" {...registrationForm.getFieldProps('nickname')}/>
			   {(registrationForm.errors.nickname && registrationForm.touched.nickname) &&
				  <Alert className="w-50 mx-auto">asd</Alert>}
			</div>
			<div className="d-flex flex-column">
			   <label htmlFor="password" className="mx-auto">Password: </label>
			   <input type="password" name="password"
					  className="form-control w-50 mx-auto" {...registrationForm.getFieldProps('password')}/>
			   {(registrationForm.errors.password && registrationForm.touched.password) &&
				  <Alert className="w-50 mx-auto">asd</Alert>}
			</div>
			<div className="d-flex flex-column">
			   <label htmlFor="country" className="mx-auto">Country: </label>
			   <input type="text" name="country"
					  className="form-control w-50 mx-auto" {...registrationForm.getFieldProps('country')}/>
			   {(registrationForm.errors.country && registrationForm.touched.country) &&
				  <Alert className="w-50 mx-auto">asd</Alert>}
			</div>
			<div className="d-flex flex-column">
			   <label htmlFor="year" className="mx-auto">Year: </label>
			   <input type="number" name="year"
					  className="form-control w-50 mx-auto" {...registrationForm.getFieldProps('year')}/>
			   {(registrationForm.errors.year && registrationForm.touched.year) &&
				  <Alert className="w-50 mx-auto">asd</Alert>}
			</div>
			<div className="d-flex flex-column">
			   <label htmlFor="club" className="mx-auto">Club card: </label>
			   <select className="form-select w-50 mx-auto" name="club" {...registrationForm.getFieldProps('club')}>
				  <option>Choose your status:</option>
				  <option value="true">Yes, I have card</option>
				  <option value="false">No, I didn't have a card</option>
			   </select>
			</div>
			<button className="mx-auto mt-2 btn btn-light" type="submit">Add user</button>
		 </form>
	  </div>
   );
};

export default App;
