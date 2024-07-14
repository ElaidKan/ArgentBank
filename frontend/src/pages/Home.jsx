import Navbar from '../component/navbar/Navbar'
import Hero from '../component/hero/Hero'
import Logo from '../component/logo/Logo'
import Footer from '../component/footer/Footer'

function Home() {
  return (
    <>
      <Navbar title={'Argent Bank'} lien={'Sign in'} />
      <Hero />
      <Logo />
      <Footer text={'Copyright 2020 Argent Bank'} />
    </>
  )
}

export default Home