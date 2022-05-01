import React, { Component ,useState} from 'react'
import './Signupform.css'
import { Link,useNavigate } from 'react-router-dom';

const Signupform=()=> {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name:"",
    email:"",
     
   password:"",
   cpassword:""
  })
  let nm, val;
  const handleChange=(e)=>{
        nm =e.target.name;
        val= e.target.value;
      
      setuser({
          ...user ,[nm]:val
       })
      
     
  }
  
  const signinData = async(event) => {
      event.preventDefault();
      const {
      name,
      email,
      
      password,
      cpassword
      } = user ;
     const res =  await fetch(
        "/register",{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
              name,
              email, 
              password,
              cpassword
          }),
        }
        );
        const data = await res.json()
        console.log(res.status)
        if(res.status === 422 || !data) {
          window.alert(JSON.parse(JSON.stringify(data)).error  )
        }else  {
          window.alert(JSON.parse(JSON.stringify(data)).message  )
          navigate('/login')
        }
    };
    return (
      <>
        <div className="signup-form-main">
          <div class="container container-signup">
            <div class="wrapper">
              <div class="title"><span>Signup</span></div>
              <form onSubmit={signinData}>
                <div class="row">
                  <i class="fas fa-user"></i>
                  <input type="text" name='name' placeholder="Username" onChange={handleChange} required />
                </div>
                <div class="row">
                  <i class="fa-solid fa-at"></i>
                  <input type="text" name='email' placeholder="Email" onChange={handleChange} required />
                </div>
                <div class="row">
                  <i class="fas fa-lock"></i>
                  <input type="password" name='password' placeholder="Password" onChange={handleChange} required />
                </div>
                <div class="row">
                  <i class="fa-solid fa-check-double"></i>
                  <input type="password" name='cpassword' placeholder="Confirm password" onChange={handleChange} required />
                </div>
                <div class="row button">
                  <input type="submit" value="Signup" />
                </div>
                <div class="signup-link">Already have an account! <Link to="/login">Login</Link></div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
   
}

export default Signupform