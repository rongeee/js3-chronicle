import React from "react";
import { Link } from "react-router-dom";

export default function Header({ children }) {
  return (
    <div>
      <nav className="nav">
        <Link className="nav__link" to="/">
          Chronicles Archives
        </Link>
      </nav>
      {children}
    </div>
  );
}
