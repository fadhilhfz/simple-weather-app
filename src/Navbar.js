import "./Navbar.css";

export default function Navbar({ children }) {
  return (
    <div className="Navbar">
      <div className="Navbar-title">{children}</div>
    </div>
  );
}
