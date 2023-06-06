import React, { useState } from 'react';
import "./style.css";

function Registration({addusers}) {
  const [fname,setfname]=useState("");
  const [lname,setlname]=useState("");
  const [mail,setmail]=useState("");
  const [age,setage]=useState(0);
  const [password,setpassword]=useState("");
  const [repassword,setrepassword]=useState("");

  
 const handlefname=(e)=>{
  setfname(e.target.value);

 }

 const handlelname=(e)=>{
  setlname(e.target.value);

 }
 const handlemail=(e)=>{
  setmail(e.target.value);

 }

 const handlage=(e)=>{
  setage(e.target.value);

 }

 const handlepassword=(e)=>{
  setpassword(e.target.value);

 }
 
 const handlrepassword=(e)=>{
  setrepassword(e.target.value);

 }
 
 const handlesubmit=()=>{
  const newuser={
    username:mail,
    fname:fname,
    lname:lname,
    age:age,
    password:password,
    repassword:repassword,
  };

  addusers(newuser);

 }

  
  return (
    <div className='main'>

<div className="register"><h2>Register Here</h2>
       <form id="register" onSubmit={handlesubmit}>

      <label htmlFor="fname"> First name:</label>
      <br/>
      <input type="text" name="fname" calssName="name" id='fname' placeholder="Enter your First name" value={fname} onChange={handlefname}/>
      <br/><br/>
      <label htmlFor="lname"> Last name:</label>
      <br/>
      <input type="text" name="lname" calssName="name" id="lname"placeholder="Enter your last name" value={lname} onChange={handlelname}/>
      <br/><br/>
      <label htmlFor="email">Email id:</label>
      <br/>
      <input type="email" name="emailid" calssName="name" id="email" placeholder="Enter valid email id" value={mail} onChange={handlemail} />
      <br/><br/>
      <label htmlFor="age">Your Age:</label>
      <br/>
      <input type="number" name="age" calssName="name" id="age"placeholder="How old are you" value={age} onChange={handlage}/>
      <br/><br/>

      <label htmlFor="">Gender:</label>
      <br/>
      <input type="radio" name="Gender" id="male" />
      <span id="male">Male</span>
      <br/>

      <input type="radio" name="Gender" id="Female"/>
      <span id="female">Female</span>
      <br/><br/>

      <label htmlFor='password' value={password} onChange={handlepassword}>Password:</label>
      <br/>
      <input type="password" name="password"  calssName="name" id='password' value={repassword} onChange={handlrepassword} />
      <br /><br />
      <label htmlFor='repassword'>Re Enter Password:</label>
      <br/>
      <input type="password" name="lang"  calssName="name" id='repassword' />

      
        <br/><br/>
        
      <input type="submit"  name="submit" id="submit"/>

    


    </form>
    
    
    </div>

</div>





  )
}

export default Registration
