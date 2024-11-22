import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center">
      {/* Logo */}
      <div>
        <h2 className="text-3xl font-semibold"> My Website </h2>
      </div>

      {/* Links */}
      <nav>
        <ul className="flex gap-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
