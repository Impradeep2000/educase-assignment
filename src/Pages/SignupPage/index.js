import React, { useState } from "react";
import "./styles.css";
import Heading from "../../Components/Heading";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

function SignupPage() {
  const [fullName,setFullName] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [companyName,setCompanyName] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSignup =(e) =>{
    e.preventDefault();
    
    if(!fullName || !phoneNumber || !email || !password )
    {
      alert("Please fill all feilds");
      return;
    }
    if(phoneNumber.length !== 10)
    {
      alert("Enter correct phone number");
      return;
    }
    if(password.length !==8){
      alert("Password must be at least 8 characters");
      return;
    }
  }

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="signup">
      <Heading text={"Create your PopX account"} />
      <form onSubmit={handleSignup}>
        <Input
          type={"text"}
          label={"Full Name*"}
          placeholder={"Enter Full Name"}
          required={true}
        />
        <Input
          type={"number"}
          label={"Phone number*"}
          placeholder={"Enter Phone Number"}
          required={true}
        />
        <Input
          type={"email"}
          label={"Email address*"}
          placeholder={"Enter Email Address"}
          required={true}
        />
        <Input
          type={"password"}
          label={"Password*"}
          placeholder={"Enter Password"}
          required={true}
        />
        <Input
          type={"text"}
          label={"Company name"}
          placeholder={"Enter Company Name"}
          required={false}
        />
        <label>Are you an Agency?*</label>
        <br /><br />
        <div>
          <label>
            <input
              type="radio"
              value="yes"
              checked={selectedOption === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              checked={selectedOption === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        <Button ButtonText={"Create Account"} navigateTo={"/profile"} type={"submit"} />
      </form>
    </div>
  );
}

export default SignupPage;
