import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h1>ContentChef 👨‍🍳</h1>
      </div>
      <ul className="nav-links">
        <li><button className="nav-btn">The Kitchen</button></li>
        <li><button className="nav-btn">Contact</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;