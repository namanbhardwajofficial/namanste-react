const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://static.thearcweb.com/images/PROD/PROD-30ba90b6-0925-423a-9842-bc34b4469195.png"
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
