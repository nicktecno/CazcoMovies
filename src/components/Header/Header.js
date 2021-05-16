import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      Ca
      <span className="zFlag">z</span>
      co Movies
    </span>
  );
};

export default Header;
