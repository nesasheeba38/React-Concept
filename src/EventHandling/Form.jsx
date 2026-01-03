import { useState } from "react";
const Form=()=>{
 const[data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    gender:"",
    city:""
 })


  const handleChange = (e) => {
    const key=e.target.name;
    setData({...data,[key]:e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(`firestName:${data.firstName}`)
    console.log(`lastName:${data.lastName}`)
    console.log(`email:${data.email}`)
    console.log(`gender:${data.gender}`) 
    console.log(`city:${data.city}`)
  };
  const handleReset=()=>{
    setData({
      firstName:"",
      lastName:"",
      email:"",
      gender:"",
      city:""
    })} 

  return (
    <div className="form field">
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
    <div>
      <label> First Name:</label>
      <input type="text"value={data.firstName} name="firstName" onChange={handleChange}/>
    </div>  
    <div>
      <label> Last Name:</label>
      <input type="text"value={data.lastName} name="lastName"  onChange={handleChange}/>
    </div>
    <div>
      <label>Email:</label>
      <input type="text" value={data.email} name="email"  onChange={handleChange}/>
   </div>
    <div>
     <label>Gender:</label>
     <label><input type="radio"name="gender" value="Male" checked={data.gender === "Male"} onChange={handleChange}/>Male</label>
     <label><input type="radio" name="gender" value="Female" checked={data.gender === "Female"} onChange={handleChange}/>Female</label>
    </div>
    <div>
    <label>City:</label>
    <input type="text" value={data.city} name="city" onChange={handleChange}/>
    </div>
    <button type="submit">Submit</button>
    <button type="reset" onClick={handleReset}>Reset</button>
   </form>
    </div>
  );
};
  export default Form;



