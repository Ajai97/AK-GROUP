import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";

export default function Register(props) {
  const [credentials, setcredentials] = useState({
    userName: "",
    email: "",
    mobileno: null,
    password: "",
    question:"",
    answer:"",
    area:"",
	  street:"",
	  city:"",
    state:"",
    postcode:""
  });
  
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8085/user-api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: credentials.userName,
        mobileno: credentials.mobileno,
        email: credentials.email,
        password: credentials.password,
        question:credentials.question,
        answer:credentials.answer,
        area:credentials.area,
	      street:credentials.street,
	      city:credentials.city,
        state:credentials.state,
        postcode:credentials.postcode

      }),
    });
    const json = await response.json();
    // console.log(json);
    // console.log("UserName++++++++++++++" + credentials.userName);
    // console.log("Email++++++++++++++" + credentials.email);
    // console.log("Password++++++++++++++" + credentials.password);



    if (response.ok) {
      props.showAlert("Registered Successfully!! Please Login", "success");
      history.push("/login");
    } else {
      props.showAlert(json.erMessage, "danger");
    }
  };
  const handleChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div class="container mb-5">
      
      <br />
      <br />
      <div class="col-lg-8 m-auto d-block">
        <form onSubmit={handleSubmit} class="bg-light register-form">
      
          <div class="formgroup">
          <h4 className="text-center font-weight-bold">Register Yourself</h4>
          <div></div>
            <label>
              <b>Username</b>
            </label>
            <input
              type="text"
              name="userName"
              class="form-control"
              id="username"
              placeholder="Enter Username"
              autoComplete="off"
              required
              onChange={handleChange}
            />
            <span id="username" class="text-danger font-weight-bold"></span>
            <br />
          </div>
          <div class="formgroup">
            <label>
              <b> Email:</b>
            </label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="email"
              placeholder=" e.g.name@example.coms"
              required
              autoComplete="off"
              onChange={handleChange}
            />
            <br />
            <span id="vemail" class="text-danger font-weight-bold"></span>
          </div>
          <div class="formgroup">
            <label>
              <b> Mobile No:</b>
            </label>
            <input
              type="number"
              name="mobileno"
              class="form-control"
              id="mobileno"
              placeholder="Enter 10-digit mobile no."
              required
              autoComplete="off"
              onChange={handleChange}
            />
            <br />
            <span id="vmb" class="text-danger font-weight-bold"></span>
          </div>
          <div class="formgroup">
            <label>
              <b>Password:</b>
            </label>
            <input
              type="password"
              name="password"
              class="form-control"
              id="password"
              placeholder="Create Password"
              required
              autoComplete="off"
              onChange={handleChange}
            />
            <br />
            <span id="vpass" class="text-danger font-weight-bold"></span>
          </div>
          <div class="formgroup">
                    
                    <label htmlFor='question'><b>Question </b></label>
                        <select 
                        id='question' 
                        name="question"                      
                        type='text' 
                        onChange={handleChange}
                        className='form-control'
                       >
                            <option selected value='1'>What is your Nickname ?</option>
                            <option value='2'>What is your favourite Sport ?</option>
                            <option value='3'>What is your favourite City ?</option>
                            <option value='4'>Who is your Best Friend ?</option>
                        </select>
                        
                    </div>
                    <br />
                    <div className='form-group'>
                    
                    <label htmlFor='questionans'><b>Answer</b></label>
                    <input 
                    className='form-control ' 
                    type='text' 
                    name="answer"
                    placeholder='Enter your Answer'                   
                    onChange={handleChange}></input>
                
            </div>
            <br />
            <span id="vpass" class="text-danger font-weight-bold"></span>
            <div className='form-group' >
                    
                    <label htmlFor='questionans'><b>Address Details</b></label>
                    <br></br>
                    <label>(Note:Product will be deliverd at your registerd address only.)</label>
                    <hr></hr>
              <div className='form-group'>
               <div>             
               <label>
              <b>House Name And Area</b>
            </label>
            <input
              type="text"
              name="area"
              class="form-control"
              id="area"
              placeholder="Enter House Name And Area"
              autoComplete="off"
              required
              width={200}
              onChange={handleChange}
            />
            <span id="area" class="text-danger font-weight-bold"></span>
            <br />
            </div>   
            <div>   
                 <label>
              <b>street</b>
            </label>
            <input
              type="text"
              name="street"
              class="form-control"
              id="street"
              placeholder="Enter Street Name"
              autoComplete="off"         
              onChange={handleChange}
            />
            <span id="street" class="text-danger font-weight-bold"></span>
            <br />                   
            </div>   
           <div>
            <label>
              <b>city</b>
            </label>
            <input
              type="text"
              name="city"
              class="form-control"
              id="city"
              placeholder="Enter City Name"
              autoComplete="off"    
              required     
              onChange={handleChange}
            />
            <span id="city" class="text-danger font-weight-bold"></span>
            <br />                   
            </div>   
            <div>   
          <td colSpan={2}> 
          <label>
              <b>State</b>
            </label>
            <input
              type="text"
              name="state"
              class="form-control"
              id="state"
              placeholder="Enter State Name"
              autoComplete="off"    
              required     
              onChange={handleChange}
            />
            <span id="state" class="text-danger font-weight-bold"></span>
            <br /> 

            </td> 
            <td >
          <label>
              <b>Post Code</b>
            </label>
            <input
              type="Number"
              name="postcode"
              class="form-control"
              id="postcode"
              placeholder="Enter Post Code"
              autoComplete="off"    
              required     
              onChange={handleChange}
            />
            <span id="postcode" class="text-danger font-weight-bold"></span>
            <br /> 
            </td>                   
            </div>   
            </div>
            </div>

          <br />
          <div class="form-group">
            <input type="submit" class="btn btn-primary mx-3 " value="SUBMIT" />
            <input type="reset" class="btn btn-primary mx-3" value="RESET" />
          </div>
        </form>
      </div>
    </div>
  );
}
