import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <>
    <form action="" id="form box" method="get">
        <h3>sign up</h3>
        <input type="text" name="" className="press-log-3" required placeholder=" First Name"/>
        <input type="text" name="" className="press-log-3" required placeholder=" Last Name"/>
        <input type="email" name="" id="" required placeholder=" Email"/>
        <input type="password" name="" id="" required placeholder=" Password"/>
        <input type="text" name="" id="" required placeholder=" Phone Number"/>
        <input type="text" name="" id="" required placeholder=" Practice Field"/>
        <input type="text" name="" id="" required placeholder=" Role"/>
       
       <p> 
        <input type="checkbox" name="" id="" className="press-log" />
         you agree to our terms and privacy policy
     </p>  
           
        <button>
            Send
        </button>
    </form>
   
   </>
  )
}

export default Signup