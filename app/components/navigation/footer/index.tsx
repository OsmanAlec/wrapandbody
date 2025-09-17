import React from "react";
import Link from "next/link";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Footer() {
  return (
    <footer className="bg-dark-green text-off-white w-full">
      <div className="max-w-6xl px-6 py-8 md:py-10 flex flex-col md:flex-row items-center md:justify-center gap-6 ">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h3
              className={`text-xl ${merriweather.className} font-semibold text-rose-gold`}
            >
              Wrap & Shape
            </h3>
          </div>
          <p className="text-sm text-white-smoke/90 max-w-xs">
            Professional body sculpting, detox and recovery treatments -
            personalised plans and expert care.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-col gap-2 text-center md:text-left"
        >
          <h4 className="text-sm font-semibold text-rose-gold">Explore</h4>
          <ul className="flex flex-col gap-2 mt-2">
            <li>
              <Link href="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="footer-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="footer-link">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/guidelines" className="footer-link">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-2 text-right md:text-left">
          <h4 className="text-sm font-semibold text-rose-gold">Contact</h4>
          <a
            href="mailto:wrapshape30@gmail.com"
            className="text-sm footer-link"
          >
            wrapshape30@gmail.com
          </a>
          <a href="tel:+353871255502" className="text-sm footer-link">
            +353871255502
          </a>
          <address className="not-italic text-sm text-white-smoke/90 mt-2">
            House, Unit 24B, Killegland,
            <br />
            Ashbourne, Co. Meath, A84 XK44
          </address>
        </div>
      </div>

      <div className="border-t border-white-smoke/10">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-white-smoke/70">
          © {new Date().getFullYear()} Wrap & Shape - Created by{" "}
          <a href="https://github.com/OsmanAlec">@OsmanAlec</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
