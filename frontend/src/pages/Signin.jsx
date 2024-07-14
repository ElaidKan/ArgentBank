import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Formulaire from '../component/formulaire/Formulaire'

function Signin() {
  return (
    <div>
      <Navbar title={'Argent Bank'} lien={'Sign in'} />
      <Formulaire />
      <Footer text={'Copyright 2020 Argent Bank'} />
    </div>
  )
}

export default Signin