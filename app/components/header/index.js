import Link from "next/link";
import "./layout.js";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="left-side">Logo</div>
        <div className="right-side">
          <Link href={`/`}>Home</Link>
          <Link href={`/about`}>About</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
