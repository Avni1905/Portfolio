import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const words = ["student", "programmer", "full stack developer"];

export const Hero = () => {
  const [dynamicIndex, setDynamicIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I am Avni Gupta</h1>
        <p className={styles.description}>
          I am a{" "}
          <AnimatePresence initial={false} mode='wait'>
            {words.map((word, index) => (
              index === dynamicIndex && (
                <motion.span
                  key={index}
                  className={styles.dynamicText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                >
                  {word}
                </motion.span>
              )
            ))}
          </AnimatePresence>
        </p>
        <p className={styles.description}>
          I am someone who loves turning ideas into reality with code. What started as a curious hobby has become my dedicated pursuit of knowledge and expertise in technology. I enjoy tackling complex problems and constantly learning new things to stay ahead. Excited about the future, I am looking forward to making a meaningful impact in the world of tech.
        </p>
        <a
          href="https://drive.google.com/file/d/1HwFr1NTnN2xX_iKD9gXXEuF44r0f_oQp/view?usp=drive_link"
          className={styles.resumeBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.svg")} alt="Hero Image of me" className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
