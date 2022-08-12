import {useRef} from 'react'
import { useParallaxController, ParallaxProvider, Parallax, useParallax, ParallaxBanner } from 'react-scroll-parallax';
import sig from "./../../public/img/sig_fondo_a.png";
import styles from '../styles/styles.css'

const ParallaxHorizontal = () => {

    const url1="https://react-scroll-parallax-horizontal-scroll.surge.sh/parallax-demon-woods-bg.18d721d0.png"
    const url2="https://react-scroll-parallax-horizontal-scroll.surge.sh/parallax-demon-woods-close-trees.47fb3a8c.png"
    const url3="https://react-scroll-parallax-horizontal-scroll.surge.sh/parallax-demon-woods-far-trees.38f797b9.png"
    const url4 = "https://react-scroll-parallax-horizontal-scroll.surge.sh/parallax-demon-woods-mid-trees.03fed130.png"


    const target = useRef(null);

    const mid = useParallax({
      speed: 50,
      targetElement: target.current,
    });
    const close = useParallax({
      speed: 100,
      targetElement: target.current,
    });
  
    const midExtend = 50 * 5 * -1;
    const closeExtend = 100 * 5 * -1;

  return (
    <div className={styles.root} ref={target}>
    <div
      style={{ backgroundImage: `url(${url1})`, left: 0, right: 0 }}
      className={styles.layer}
    />
    <div
      style={{
        backgroundImage: `url(${url2})`,
        left: 0,
        right: 0,
      }}
      className={styles.layer}
    />
    <div
      style={{
        backgroundImage: `url(${url3})`,
        left: midExtend,
        right: midExtend,
      }}
      className={styles.layer}
      ref={mid.ref}
    />
    <div
      style={{
        backgroundImage: `url(${url4})`,
        left: closeExtend,
        right: closeExtend,
      }}
      className={styles.layer}
      ref={close.ref}
    />
  </div>
  )
}

export default ParallaxHorizontal