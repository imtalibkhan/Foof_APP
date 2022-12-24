import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
  const option = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
   <>
    <section className="home">
      <div>
        <motion.h1 {...option}> Food App</motion.h1>

        <motion.p {...option} transition={{delay:0.2}}>Treat yourself today</motion.p>
      </div>
      <a href="#menu">Explore menue</a>
    </section>
    <Founder />

    <Menu />
   
   </>
  );
};

export default Home;
