import React from 'react'
import "./styles.css"
import Heading from "../../Components/Heading"
import Para from "../../Components/Para"
import Input from '../../Components/Input'
import Button from "../../Components/Button"

function LoginPage() {
  return (
    <div className='login'>
      <Heading text={"Signin to your PopX account"} />
      <Para text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"} />
      <Input type={"email"} label={"Email Address*"} placeholder={"Enter email address"} required={true} />
      <Input type={"password"} label={"Password*"} placeholder={"Enter password"} required={true} />
      <Button ButtonText={"Login"} />
    </div>
  )
}

export default LoginPage