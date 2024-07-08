import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Transaction from '../component/transaction/Transaction'
import Header from '../component/header/Header'

function Account() {
  return (
    <div>
      <Navbar />
      <section className='main bg-dark'>
        <Header />
        <Transaction />
      </section>
      <Footer />
    </div>
  )
}

export default Account