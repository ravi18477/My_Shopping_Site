import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import Registration from './Components/Registration/Registration';
import { useState,useContext } from 'react';


function App() {

  const [cartitem,additemtocart]=useState([
    {id:"sh002",
    imgurl:"sh002",
     price:100,
     prodname:"Fastract shoes"},
    ]);

    const [login,setlogin]=useState(false);

    
    function addtocart(item){
console.log(item);
      
        additemtocart((cartitem)=>{
          const updatedlist=[...cartitem,item];
          return updatedlist;
        })
    }
   

       
    const [registeredUsers, addusers]= useState([
      {username:"ravib18477@gmail.com",
       password:"1234",
       age:20,
       fname:"Ravi Kr",
       lastName:"Bhagat",
       }
    ])


    
    
    function handleAddUser(newuser){

      const existingUser= registeredUsers.filter((user)=>{return newuser.username===user.username});

      if(existingUser.length===0){
          if(newuser.password!==newuser.repassword){
            addusers((registeredUsers)=>{
              const newuserlist=[...registeredUsers,{
                username:newuser.username,
                password:newuser.password,
                age:newuser.age,
                fname:newuser.fname,
                lastName:newuser.lname
              }];
      
              return newuserlist;
            })
      
        
      }
      else{
        alert("Password did not match");
        return;
      }
      
      }
      else{
        alert("Username Already Exist");
        return;
      }

      
     

    }

    // if(login===false)
    // return(
    //   <div className='App'>
      
    //    <Routes>
    //    <Route path="/" element={<Login />} />
    //    <Route path='/registration' element={<Registration  addusers={handleAddUser}/>}/>
        
    //    </Routes>

    //   </div>
    // );


  return (
    <div className="App">
      <Navbar></Navbar>
  
      <Routes>
        <Route path="/" element={<Home  additemto={addtocart} />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cart'  element={<Cart cartitem={cartitem} />}  /> 
        <Route path='/registration' element={<Registration  addusers={handleAddUser}/>}/>
        
      </Routes>

    </div>
  );
}

export default App;
