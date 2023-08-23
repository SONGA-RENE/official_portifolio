import logo from "./mylogo.png";
const Menu = () => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <img src={logo} alt="mylogo" />
      </div>

      <div className="menu">
        <ul>
          <li>More about me</li>
          <li>my portifolio</li>
          <li>contact me</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
