import { HEADER_URL } from "./utils/constant";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={HEADER_URL}
          alt="Swiggy Clone Image"
          className="header-logo"
        ></img>
      </div>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
