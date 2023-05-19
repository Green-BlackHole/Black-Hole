// Photos from https://citizenofnowhe.re/lines-of-the-city
// import "./styles.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Layout from "@/components/Layout";
import Image from "next/image";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1.5], [-distance, distance]);
}

function Zurag({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 400);

  return (
    <>
      <div className="flex items-center justify-center">
        <section className="text-[rgb(0,255,255)] font-bold text-4xl">
          <div ref={ref}>
            <Image
              width={1000}
              height={100}
              src={`https://www.fonewalls.com/wp-content/uploads/1536x2048-Background-HD-Wallpaper-006-300x400.jpg`}
              alt="A London skyscraper"
              className="m-2"
            />
          </div>
          <motion.h2 style={{ y }} className="ml-48">{`#00${id}`}</motion.h2>
        </section>
        <div className="h-[30rem]"></div>
      </div>
    </>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Layout>
        {[1, 2].map((image) => (
          <>
            <Zurag id={image} key={image} alt={image} />
          </>
        ))}
        <div className="h-screen"></div>
        <motion.div className="progress" style={{ scaleX }} />
      </Layout>
    </>
  );
}
