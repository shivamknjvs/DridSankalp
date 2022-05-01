import React, { Component,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Loginform.css'
 
const Loginform = () => { 

  const navigate = useNavigate();
  const [loginUser, setloginUser] = useState({
     email:"",
     password:""
  })
  let name,val;
  const handleChange=(e)=>{
    name=e.target.name;
    val= e.target.value;
       setloginUser({
         ...loginUser,[name]:val
       })
       console.log(loginUser);
  }  
  const submitLogin= async (event) => {
    event.preventDefault();
    const { 
    email, 
    password 
    } = loginUser ;
   const res =  await fetch(
      "/login",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({ 
            
            email,
            
            password 
        }),
      }
      );
      const data = await res.json()
      console.log(res.status)
      if(res.status === 422 || !data) {
        window.alert('SOmething missing'  )
        

      }else  if(res.status === 400 || !data) {
        
        window.alert( "Invalid Credential"  )
      }else {
        window.alert("Login Successsfully" )
        navigate('/')
      }

  }
    return (
        <>
        <div className="login-form-main">
            <div class="container">
      <div class="wrapper">
        <div class="title"><span>Login</span></div>
        <form >
          <div class="row">
            <i class="fas fa-user"></i>
            <input type="text" name='email' placeholder="Email" onChange={handleChange}  required/>
          </div>
          <div class="row">
            <i class="fas fa-lock"></i>
            <input type="password" name='password' placeholder="Password" onChange={handleChange} required/>
          </div>
          <div class="pass"><a href="#">Forgot password?</a></div>
          <div class="row button">
            <button onClick={submitLogin} type="submit" >Login</button>  
          </div>
        </form>
          <div class="signup-link">Not a member? <Link to='/signup'>Signup now</Link></div>
      </div>
    </div>
    </div>
        </>
    ) 
}
 

export default Loginform
 