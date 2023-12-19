// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
      <div className="text-xl font-bold">
        <Link href="/">$ANKY</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tokenomics">Tokenomics</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
