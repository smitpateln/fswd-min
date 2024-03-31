import React ,{useState,useRef,useEffect} from 'react'
import './App.css';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
export default function Signin(S) {
  let resref = useRef(); 
  const [setdata,getdata]=useState({
    email: '',
    password:'',
  });
  useEffect(()=>{
    const token = Cookies.get("jwt=");
    console.log(token);
    if(token){
      navigate('/');
    }
  },[])
const navigate = useNavigate();
  const handlesubmit = async (e)=>{
      e.preventDefault();
       console.log(setdata)
      const res = await fetch("https://fswd-min-smit-patels-projects-5541c5e3.vercel.app/appfind", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(setdata),
        
      })
      const data = await res.json();
      resref.current.innerHTML = data.message; 
      
    
  }

  const handlechange = (e)=>{
    const {name,value} = e.target;
    getdata({
      ...setdata,
      [name]: value,
    });

  }

  return (
    <div className="body1">
      <form onSubmit={handlesubmit} method="post" >
        <h1>Gurukul</h1>
        <h2 className='hed'>Welcome, Log In!</h2>
        <div>
          <label htmlFor="e-mail" >email:</label>
          <input 
            type="email" 
            name = "email"
            value={setdata.email} 
            onChange={handlechange} 
            required
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input 
            type="password" 
            name="password"
            value={setdata.password} 
            onChange={handlechange} 
            required
          />
        </div>
        <button type='submit' className='transparent-button'>Log In</button><br />
        
       <span>if you don't have an account ,</span> <Link to="/signup" style={{color:'white'}} >click here</Link>
       <br /> 
         <br />
          <span ref={resref} style={{fontSize :"2rem"}}></span>
      </form>
    </div>
  );
}