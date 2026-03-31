import './NavBar.css';

function NavBar({ onNavigate }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h1>ContentChef 👨‍🍳</h1>
      </div>
      <ul className="nav-links">
        {/* Navigation to 'The Kitchen' (Required /todos view) */}
        <li>
          <button onClick={() => onNavigate('kitchen')}>The Kitchen</button>
        </li>
        {/* Navigation to 'Contact' (Required /contact view) */}
        <li>
          <button onClick={() => onNavigate('contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;