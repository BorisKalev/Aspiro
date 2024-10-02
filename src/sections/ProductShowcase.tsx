"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to -[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center mt-5 text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={252}
            width={252}
            className="hidden md:block absolute -right-32 -top-32 "
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            className="hidden md:block absolute bottom-24 -left-36"
            height={248}
            width={248}
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
