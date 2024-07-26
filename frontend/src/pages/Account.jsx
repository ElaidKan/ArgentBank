import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Transaction from '../component/transaction/Transaction'
import Header from '../component/header/Header'
import transaction from '../data/transaction.json'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Account() {
  const connect = useSelector(state => state.connect.connected)
const token = localStorage.getItem('token')
  const user = useSelector(state => state.user)
  if (!connect) {
    return <Navigate to='/signin' />
  }

  return (
    <div>
      <Navbar title={'Argent Bank'} lien={token ? 'Sign out' : 'Sign in'} user={token ? user?.userName : ''}/>
      <section className='main bg-dark'>
        <Header />
        {transaction.map((transaction) => (
          <Transaction key={transaction.id} title={transaction.title} amount={transaction.amount} description={transaction.description} />
        ))}
      </section>
      <Footer text={'Copyright 2020 Argent Bank'}/>
    </div>
  )
}

export default Account