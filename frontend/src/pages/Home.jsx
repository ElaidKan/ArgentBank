import Navbar from '../component/navbar/Navbar'
import Hero from '../component/hero/Hero'
import Logo from '../component/logo/Logo'
import Footer from '../component/footer/Footer'
import { useSelector } from 'react-redux'

function Home() {
  const user = useSelector(state => state.user)
  const token = localStorage.getItem('token')
  return (
    <>
      <Navbar title={'Argent Bank'} lien={token ? 'Sign out' : 'Sign in'} user={token ? user?.userName : ''} />
      <Hero />
      <Logo />
      <Footer text={'Copyright 2020 Argent Bank'} />
    </>
  )
}

export default Home