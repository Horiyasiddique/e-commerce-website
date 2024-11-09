import Image from "next/image";
import logo from "../logo.png";
function Header() {
  return (
    <div id="Header">
      <div>
        <Image id="logo" src={logo} alt="logo" />
      </div>
      <div id="searchbar">
        <input type="text" placeholder="Search Here...." />
        <button>Search</button>
      </div>
      <div id="header-ele">
        <ul id="header-ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Be a new seller</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
