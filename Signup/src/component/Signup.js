import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
 function Signup(){
      
    function handleSubmit(){  
      const username=document.getElementById("username");
      const user_mail=document.getElementById("user_mail");
      const password=document.getElementById("password");
      const phone_no=document.getElementById("phone_no");
      const confirmpassword=document.getElementById("confirmpassword");
         onEmpty(username);
         onEmpty(user_mail);
         onEmpty(password);
         onEmpty(phone_no);
         onEmpty(confirmpassword);
         if(username.value && user_mail.value && phone_no.value && password.value===confirmpassword.value){
          console.log("function executed");
          //document.getElementById("confirmpasswordspan").innerHTML=""

           axios.post("http://localhost:5000/add",
          {
             username:document.getElementById("username").value,
             user_mail:document.getElementById("user_mail").value,
             password:document.getElementById("password").value,
             phone_no:document.getElementById("phone_no").value
          }
          
        )
        .then(resp=>{console.log("data Stored",resp.data)
          document.getElementById("username").value="";
          document.getElementById("user_mail").value="";
          document.getElementById("password").value="";
          document.getElementById("confirmpassword").value="";
          document.getElementById("phone_no").value="";
        })
        
        .catch(function(err){
            console.log(err);
            console.log("show error");
        })}
        if(username.value && user_mail.value && phone_no.value && password.value!==confirmpassword.value){

          confirmpassword.nextElementSibling.innerHTML="Password mismatch"
          
        }
      }

   function onchange(p){
    document.getElementById(p.target.id).nextElementSibling.innerHTML=""
   }

   function onEmpty(p){
    if(p.value===""){
      p.nextElementSibling.innerHTML="This field is required";
    }
   }
    return(
   <div className="signup">
       <div>
          <h2>Sign up</h2>
       </div>
       <div className="main">
       <div className="formElements">
          User Name 
          <input type="text" name="username" id="username" onChange={onchange} ></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div className="formElements"> 
          User Email 
          <input type="text" name="user_mail" id="user_mail" onChange={onchange}></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
        <div className="formElements">  
          Password 
          <input type="password" name="password" id="password" onChange={onchange}></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div className="formElements">
          Confirm password 
          <input type="password" name="confirmpassword" id="confirmpassword" onChange={onchange}></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div className="formElements">
          Phone No 
          <input type="text" name="phone_no" id="phone_no" onChange={onchange}></input>
          <span style={{color:"#f00"}} ></span>
       </div><br />
       <div>
          <button onClick={handleSubmit} type="submit">submit</button>
       </div>
      <Link id="link" to="/login">Already have an account?</Link>
       </div>
   </div>
    )};
 
 export default Signup;