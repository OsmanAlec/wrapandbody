import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex bg-red">
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