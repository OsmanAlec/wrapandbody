import Link from "next/link";
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });


const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="fixed w-full h-full overflow-hidden justify-center bg-off-white grid pt-[120px] left-0 z-51 transition-all duration-300"
        style={{
          opacity: isOpen ? "1" : "0",
          top: isOpen ? "0" : "-100%",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <button
          className="absolute right-0 top-0 p-5 text-rose-gold cursor-pointer"
          onClick={toggle}
          aria-label="Close sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className={merriweather.className + "sidebar-nav text-center leading-relaxed text-xl flex flex-col gap-8"}>
          <li>
            <Link href="https://www.fresha.com/a/wrap-shape-ashbourne-rath-cross-business-park-sdtuch0n"
            className="block px-8 py-3 border rounded border-rose-gold bg-dark-green text-rose-gold font-bold">
                <p>Book Now</p>
            </Link>
          </li>
        
          <li>
            <Link
              href="/services"
              onClick={toggle}
              className="block px-8 py-3 rounded border border-rose-gold text-dark-green bg-white-smoke hover:bg-rose-gold hover:text-off-white transition-colors font-medium"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={toggle}
              className="block px-8 py-3 rounded border border-rose-gold text-dark-green bg-white-smoke hover:bg-rose-gold hover:text-off-white transition-colors font-medium"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/guidelines"
              onClick={toggle}
              className="block px-8 py-3 rounded border border-rose-gold text-dark-green bg-white-smoke hover:bg-rose-gold hover:text-off-white transition-colors font-medium"
            >
              Guidelines
            </Link>
          </li>
      
        </ul>
      </div>
    </>
  );
};

export default Sidebar;