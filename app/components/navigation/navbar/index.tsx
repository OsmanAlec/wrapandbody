import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="text-rose-gold fixed top-0 left-0 w-full flex justify-center z-50 bg-dark-green shadow">
            
            <Link href="./">
                <h1 className="text-3xl font-bold px-10 py-4">Wrap & Shape</h1>
            </Link>
            <ul className="list-none gap-10 flex justify-between items-center py-4">
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
        </nav>
    );
}