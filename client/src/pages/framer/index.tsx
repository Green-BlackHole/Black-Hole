// Photos from https://citizenofnowhe.re/lines-of-the-city
// import "./styles.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import Layout from "@/components/Layout";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <>
    <section className="text-[rgb(255,255,0)] font-bold text-4xl">
      <div ref={ref}>
        <img src={`https://www.fonewalls.com/wp-content/uploads/1536x2048-Background-HD-Wallpaper-006-300x400.jpg`} alt="A London skyscraper" className="m-2"/>
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
    </>

  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
    <Layout>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))}
      <div className="h-screen"></div>
      <motion.div className="progress" style={{ scaleX }} />
      </Layout>
    </>
  );
}
