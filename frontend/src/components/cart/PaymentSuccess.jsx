import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return <section className='paymentsucsess'>

    <main>
        <h1>Order Confirm</h1>
        <p>order olaced sucessfully</p>

    <Link to="/myorders">check status</Link>
    </main>
  </section>
}

export default PaymentSuccess