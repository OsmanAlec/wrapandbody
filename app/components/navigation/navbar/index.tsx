import Link from "next/link";
import React from "react";

import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

const Navbar = ({ toggle }: { toggle: () => void }) => {
    return (
        <nav className="text-rose-gold fixed top-0 left-0 w-full flex justify-center z-50 bg-dark-green shadow">
            
            <Link href="./">
                <h1 className={`text-3xl font-bold px-10 py-4 ${merriweather.className}`}>Wrap & Shape</h1>
            </Link>
            <ul className="list-none gap-10 hidden md:flex justify-between items-center py-4">
                <li>
                    <Link href="/services">
                        <p>Services</p>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <p>Contact</p>
                    </Link>
                </li>
                <li>
                    <Link href="/guidelines">
                        <p>Guidelines</p>
                    </Link>
                </li>
            </ul>

            <button type="button" className="inline-flex items-center md:hidden cursor-pointer"
            onClick={toggle}>
            {/* Menu icon */}
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24">
                    <path fill="var(--color-rose-gold)"
                        d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                </svg>
            </button>
        </nav>
    );
}

export default Navbar;