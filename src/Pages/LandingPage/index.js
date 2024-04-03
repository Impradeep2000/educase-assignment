import React from 'react'
import "./styles.css"
import Heading from '../../Components/Heading'
import Para from '../../Components/Para'
import Button from '../../Components/Button'

function LandingPage() {

  return (
    <div className='landing'>
      <Heading text={"Welcome to PopX"} />
      <Para text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"} />
      <Button ButtonText={"Create Account"} navigateTo={"/signup"} />
      <Button  ButtonText={"Already Registered? Login"} navigateTo={"/login"} />
    </div>
  )
}

export default LandingPage