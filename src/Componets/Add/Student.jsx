import React, { useEffect, useState } from 'react'

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import uuid from 'react-uuid'
import { useDispatch } from 'react-redux'
// import { addcart } from '../../Services/Action/action'
import { useNavigate } from 'react-router'
import { addStudentasync } from '../../Services/Action/action'
// import { parsedata } from './product.js'
// import '../Product/productData.css'
import './Student.css'



function Student() {



	const [inputValue, setinputvalue] = useState({
		fname: '',
		lname: '',
		email: '',
		country: '',
		address: '',
		city: '',
		std: '',
		zip: ''

	}
	);

	console.log(inputValue);
	const dispatch = useDispatch()
	const navigate = useNavigate()



	const hadlesubmit = (e) => {
		e.preventDefault();
		dispatch(addStudentasync(inputValue));
		setinputvalue({
			fname: '',
			lname: '',
			email: '',
			country: '',
			address: '',
			city: '',
			std: '',
			zip: ''

		})
		navigate('/view')
	}

	const handlechange = (e) => {

		let name = e.target.name;
		let value = e.target.value;

		setinputvalue({ ...inputValue, [name]: value })

	}
	return (
		<>

			<Container>
				<div class="wrapper">
					<div class="form-left">
						<h2 class="text-uppercase">information</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
							molestie ac feugiat sed. Diam volutpat commodo.
						</p>
						<p class="text">
							<span>Sub Head:</span>
							Vitae auctor eu augudsf ut. Malesuada nunc vel risus commodo
							viverra. Praesent elementum facilisis leo vel.
						</p>
						<div class="form-field">
							<input type="submit" class="account" value="Have an Account?" />
						</div>
					</div>
					<form class="form-right" onSubmit={hadlesubmit}>
						<h2 class="text-uppercase">Registration form</h2>
						<div class="row">
							<div class="col-sm-6 mb-3">
								<label>First Name</label>
								<input
									type="text"
									name="fname"
									id="first_name"
									class="input-field"
									onChange={handlechange}
									value={inputValue.fname}
								/>
							</div>
							<div class="col-sm-6 mb-3">
								<label>Last Name</label>
								<input
									type="text"
									name="lname"
									id="last_name"
									class="input-field"
									onChange={handlechange}
									value={inputValue.lname}
								/>
							</div>
						</div>
						<div class="mb-3">
							<label>Your Email</label>
							<input
								type="email"
								class="input-field"
								onChange={handlechange}
								value={inputValue.email}
								name="email"

							/>
						</div>
						<div class="row">

							<div class="col-sm-6 mb-3">
								<label>city </label>
								<input
									type="text"
									name="city"
									// id="cpwd"
									class="input-field"
									onChange={handlechange}
									value={inputValue.city}
								/>
							</div>
							<div class="col-sm-6 mb-3">
								<label>Zip Code </label>
								<input
									type="text"
									name="zip"
									// id="cpwd"
									class="input-field"
									onChange={handlechange}
									value={inputValue.zip}
								/>
							</div>
						</div>
						<div class="row">
							<div class=" col-sm-6 mb-3">
								<label>Address</label>
								<input
									type="text"
									name="address"
									onChange={handlechange}
									value={inputValue.address}
									// id="pwd"
									class="input-field"
								/>
							</div>
							<div class=" col-sm-6 mb-3">
								<label>Std</label>
								<input
									type="text"
									name="std"
									onChange={handlechange}
									value={inputValue.std}
									// id="pwd"
									class="input-field"
								/>
							</div>
						</div>
						{/* <Form.Group className="mb-3 me-2">
            <Form.Label>Gender</Form.Label>
            <div className="d-flex">
              {["Male", "Female"].map((label) => {
                return (
                  <div className="col-2 me-4">
                    <Form.Check
                      type="radio"
                      label={label}
                      name="gender"
                      value={label}
                      onChange={handlechange}
                    />
                  </div>
                );
              })}
            </div>
          </Form.Group> */}
						<div class="form-field">
							<input
								type="submit"
								value="Register"
								class="register"
								name="register"
							/>
						</div>
					</form>
				</div>
			</Container>
		</>

	)
}

export default Student;