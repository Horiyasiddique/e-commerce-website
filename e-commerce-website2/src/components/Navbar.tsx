import Link from "next/link";

function Navbar() {
  return (
    <div id="navbar">
      <ul id="navbar-ul">
        <li>
          <Link href="/All">All</Link>
        </li>
        <li>
          <Link href="/ForWomen">For Women</Link>
        </li>
        <li>
          <Link href="/Men">For Men</Link>
        </li>
        <li>
          <Link href="/Perfumes">Perfumes</Link>
        </li>
        <li>
          <Link href="/Cosmetics">Cosmetics</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
