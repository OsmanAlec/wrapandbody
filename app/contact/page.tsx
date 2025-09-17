"use client";
import { Merriweather } from "next/font/google";
import Image from "next/image";
import { fadeInDown, fadeInUp } from "../components/animations";
import { motion } from "motion/react";
import Link from "next/link";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]">
      <h1
        className={`w-full text-7xl pt-10 p-5 text-center bg-white-smoke ${merriweather.className}`}
      >
        Contacts
      </h1>

      <div className="inline-flex animate-fade-in-down md:flex-row flex-col justify-items-center gap-10 p-10">
        <motion.div
          variants={fadeInDown}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-lg w-full"
        >
          <div className="aspect-square relative w-full">
            <Image
              src="/salonoutside.jpg"
              alt="The outside of the salon"
              fill
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white-smoke border border-rose-gold rounded-xl shadow-md p-8 max-w-7xl w-full text-center"
        >
          <p className="mb-4 text-2xl font-bold text-dark-green">
            Have a question or want to book an appointment? Reach out!
          </p>
          <div className="mb-4">
            <p className="font-semibold text-rose-gold">Email</p>
            <a
              href="mailto:wrapshape30@gmail.com"
              className="text-dark-green underline hover:text-rose-gold transition-colors"
            >
              wrapshape30@gmail.com
            </a>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-rose-gold">Phone</p>
            <a
              href="tel:+353871255502"
              className="text-dark-green underline hover:text-rose-gold transition-colors"
            >
              +353871255502
            </a>
          </div>
          <div>
            <p className="font-semibold text-rose-gold">Address</p>
            <p className="text-dark-green">
              House, Unit 24B, Killegland,
              <br />
              Ashbourne, Co. Meath, A84 XK44
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href="https://www.instagram.com/wrap.shape/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
            </div>
          </div>
          <Link
            href="https://www.fresha.com/a/wrap-shape-ashbourne-rath-cross-business-park-sdtuch0n"
            className="inline-block px-8 py-3 mt-5 rounded-full bg-rose-gold text-dark-green font-bold shadow-lg hover:bg-dark-green hover:text-rose-gold transition-colors"
          >
            <p>Book Now</p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
