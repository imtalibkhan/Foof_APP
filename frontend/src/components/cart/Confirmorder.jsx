import React from 'react'

const Confirmorder = () => {
  return <section className='confirmorder'>

<main>
    <h1>Confirm Order</h1>
    <form>
        <div>
            <label htmlFor="">Cash on Delevery</label>
            <input type="radio" placeholder='payments' />
        </div>

        <div>
            <label htmlFor="">Online</label>
            <input type="radio" placeholder='payments' />
        </div>

        <button type='submit'>place order</button>
    </form>
</main>
  </section>
}

export default Confirmorder