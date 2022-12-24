import React from 'react';
import { motion } from "framer-motion";
import me from "../../assets/favico.png"



const Founder = () => {

const option= {
  initial: {
    x:"-100%",
  opacity: 0,
},
whileInView: {
  x:0,
  opacity:1,
}
}


  return <section className='founder'>
    <motion.div 
    {...option}>
      <img src={me} alt="Founder" className='founder_img'/>
      <h3>Abutalib Khan</h3>
      <p>Hey, Everyone i m the founder of food appp
        <br />
        our aim to provide to you a fresh food
      </p>

    </motion.div>


  </section>
}

export default Founder