import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Formulaire from '../component/formulaire/Formulaire'
import { useSelector } from 'react-redux'

function Signin() {
  const token = localStorage.getItem('token')
  return (
    <div>
      <Navbar title={'Argent Bank'} lien={token ? 'Sign out' : 'Sign in'} />

      <Formulaire />
      <Footer text={'Copyright 2020 Argent Bank'} />
    </div>
  )
}

export default Signin