"use client";
import Image from "next/image";
import ReviewSlider from "./components/reviewslider";
import { motion } from "motion/react";
import Link from "next/link";
import {
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "./components/animations";

const hours = [
  { day: "Monday", time: "10:00 - 20:00" },
  { day: "Tuesday", time: "10:00 - 20:00" },
  { day: "Wednesday", time: "10:00 - 20:00" },
  { day: "Thursday", time: "10:00 - 20:00" },
  { day: "Friday", time: "10:00 - 20:00" },
  { day: "Saturday", time: "10:00 - 18:00" },
  { day: "Sunday", time: "10:00 - 18:00" },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        variants={fadeInDown}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative flex flex-col items-center justify-center text-center min-h-[80vh] overflow-hidden"
      >
        <Image
          src="/homepage.jpg"
          alt="Spa interior"
          fill
          className="object-cover z-0"
          priority
        />
        {/* backdrop for the hero text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray/20 backdrop-blur-lg border border-white-smoke/20 rounded-lg px-6 py-6 md:px-12 md:py-8 max-w-3xl text-center"
          >
            <h1 className="text-4xl md:text-6xl text-rose-gold font-bold mb-4">
              Welcome to Wrap and Shape
            </h1>
            <p className="text-lg md:text-2xl bg-dark-green text-rose-gold drop-shadow-md mb-6">
              Sculpt, detox, reduce.
            </p>
            <a
              href="/services"
              className="inline-block px-8 py-3 rounded-full bg-rose-gold text-dark-green font-bold shadow-lg hover:bg-dark-green hover:text-rose-gold transition-colors"
            >
              View Treatments
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        variants={fadeInLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-[10vw] flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-10 py-12 bg-white-smoke"
      >
        <motion.div
          variants={fadeInLeft}
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left "
        >
          <h2 className="text-3xl font-semibold mb-4 text-rose-gold">
            Why Choose Us?
          </h2>
          <p className="mb-6 max-w-xl text-dark-green">
            At Wrap and Shape, we combine advanced body sculpting techniques
            with a holistic approach to wellness. Our experienced therapists use
            the latest technology and natural products to help you achieve your
            dream silhouette, boost confidence, and feel your best.
          </p>
          <ul className="list-disc list-inside text-dark-green space-y-2 mb-6">
            <li>Personalized treatment plans</li>
            <li>Certified, friendly staff</li>
            <li>Modern, relaxing environment</li>
            <li>Visible results and client satisfaction</li>
          </ul>
          <a
            href="https://www.fresha.com/a/wrap-shape-ashbourne-rath-cross-business-park-sdtuch0n"
            className="inline-block px-8 py-3 rounded-full bg-dark-green text-rose-gold font-bold shadow hover:bg-rose-gold hover:text-dark-green transition-colors"
          >
            Book a Consultation
          </a>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          className="flex-1 flex flex-col gap-6 items-center"
        >
          <div className="w-72 aspect-square relative">
            <Image
              src="/japaneseheadmassage.jpg"
              alt="Japanese Head Massage in progress"
              fill
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className="w-72 aspect-square relative">
            <Image
              src="/whychooseus.jpg"
              alt="Spa interior"
              fill
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Treatments Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="min-h-[80vh] flex flex-col justify-center items-center bg-off-white"
      >
        <h2 className="text-3xl font-semibold mb-4 text-rose-gold ">
          Treatments
        </h2>
        <p className="p-5 max-w-[500px] text-dark-green ">
          Our treatments deliver comprehensive results: redefined body contours,
          reduced bloating from excess fluid, and targeted fat loss.
        </p>
        <div className="flex flex-col mb-5 md:flex-row gap-8 items-center">
          {[
            { img: "/wrap.jpg", title: "Body Wraps" },
            { img: "/lpg.jpg", title: "Massage & Mechanical Therapies" },
            {
              img: "/rf lifting.jpg",
              title: "Fat Reduction & Skin Tightening",
            },
          ].map((t, i) => (
            <motion.div
              key={t.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12 }}
              className="card-outer"
            >
              <a href="/services">
                <div className="min-h-[200px] relative">
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold card">{t.title}</h3>
              </a>
            </motion.div>
          ))}
        </div>

        <Link
          href="https://www.fresha.com/a/wrap-shape-ashbourne-rath-cross-business-park-sdtuch0n"
          className="inline-block px-8 py-3 rounded-full bg-rose-gold text-dark-green font-bold shadow-lg hover:bg-dark-green hover:text-rose-gold transition-colors"
        >
          <p>Book Now</p>
        </Link>
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        variants={fadeInLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="min-h-[80vh] py-12 flex flex-col justify-center items-center bg-white-smoke"
      >
        <h2 className="text-3xl font-semibold mb-4 text-rose-gold ">
          Client Reviews
        </h2>
        <div className="w-full max-w-3xl">
          <ReviewSlider />
        </div>
      </motion.section>

      {/* Opening Hours Section */}
      <motion.section
        variants={fadeInRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="min-h-[80vh] flex flex-col justify-center items-center bg-off-white"
      >
        <div className="pt-6 text-center w-full">
          <h2 className="text-3xl font-semibold mb-4">Opening Hours</h2>
          <div className="opening-hours-table">
            {hours.map(({ day, time }, idx) => (
              <motion.div
                key={day}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="opening-hours-row"
              >
                <span className="opening-hours-day">{day}</span>
                <span className="opening-hours-time">{time}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-dark-green p-5 pb-15">
          <p className="font-semibold">Location:</p>
          <p>House, Unit 24B, Killegland, Ashbourne, Co. Meath, A84 XK44</p>
          <p className="font-semibold mt-2">Contact:</p>
          <p>
            <a
              href="mailto:wrapshape30@gmail.com"
              className="underline hover:text-rose-gold transition-colors"
            >
              wrapshape30@gmail.com
            </a>
            {" | "}
            <a
              href="tel:+353871255502"
              className="underline hover:text-rose-gold transition-colors"
            >
              +353871255502
            </a>
          </p>
        </div>

        <Link
          href="https://www.fresha.com/a/wrap-shape-ashbourne-rath-cross-business-park-sdtuch0n"
          className="inline-block px-8 py-3 mb-5 rounded-full bg-rose-gold text-dark-green font-bold shadow-lg hover:bg-dark-green hover:text-rose-gold transition-colors"
        >
          <p>Book Now</p>
        </Link>
      </motion.section>
    </div>
  );
}
