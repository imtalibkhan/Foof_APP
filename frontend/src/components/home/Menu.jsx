import React from 'react'
import MenuCard from './MenuCard'
import burger1 from "../../assets/burger1.jpg"
import burger2 from "../../assets/burger2.jpg"
import burger3 from "../../assets/burger3.jpg"



const Menu = () => {

//handler

const addToCartHandleer = (itemNum) => {

}




  return (
  <section id='menu'>
    <h1>Menu</h1>

    <div>
    <MenuCard 
    itemNum={1}
    burgerSrc={burger1}
    price={200}
    title="Chese burger"
    handler={addToCartHandleer}
    delay={0.1}
    />
     <MenuCard 
    itemNum={2}
    burgerSrc={burger2}
    price={500}
    title=" veg Chese burger"
    handler={addToCartHandleer}
    delay={0.5}

    />
     <MenuCard 
    itemNum={3}
    burgerSrc={burger3}
    price={2000}
    title="Chese burger with french fry"
    handler={addToCartHandleer}
    delay={0.8}

    />
    </div>

  </section>
  )
}

//menu card 

export default Menu