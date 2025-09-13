"use client";
import { services } from "@/data/services";
import React, { useState } from "react";
import { Merriweather } from "next/font/google";
import { motion } from "motion/react";
import { fadeInDown, fadeInUp } from "../components/animations";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export interface Treatment {
  name: string;
  description: string;
  price: string;
}

export interface ServicesData {
  [key: string]: Treatment[];
}

export interface CategoryButton {
  key: string;
  title: string;
}

const categories: CategoryButton[] = [
  { key: "bodywraps", title: "Bodywraps" },
  { key: "massages", title: "Massage & Mechanical Therapies" },
  { key: "fatreduction", title: "Fat Reduction & Skin Tightening" },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(services)[0]
  );
  const activeTreatments: Treatment[] =
    services[activeCategory as keyof typeof services];

  return (
    <div>
      <motion.h1
        className={`text-7xl text-center p-12 pb-5 bg-white-smoke ${merriweather.className}`}
        variants={fadeInDown}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        Services
      </motion.h1>

      <motion.div
        className="flex flex-col items-center text-center m-2"
        variants={fadeInDown}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="card-outer flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`category-btn${
                activeCategory === category.key ? " active" : ""
              }`}
              type="button"
              whileHover={{ scale: 1.03 }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        key={activeCategory}
        className="treatments-list"
        variants={fadeInUp}
        initial="hidden"
        animate="show"
      >
        {activeTreatments.map((treatment, index) => (
          <motion.div
            className="treatment-card"
            key={treatment.name || index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06 }}
          >
            <h4 className="text-lg font-semibold text-dark-green">
              {treatment.name}
            </h4>
            <p className="text-sm text-eerie-black/80 my-2">
              {treatment.description}
            </p>
            <p className="text-rose-gold font-semibold">
              <strong>Price:</strong> {treatment.price}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
