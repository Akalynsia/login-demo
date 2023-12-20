import { useState } from "react";

export default function Navbar() {
  const [isAuthUser, setIsAuthUser] = useState(false);

  const handleSignToggle = () => {
    setIsAuthUser((prevState) => !prevState);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Logo />
        <div className="navbar-links">
          {isAuthUser ? (
            <button onClick={handleSignToggle} className="navbar-link">
              Sign out
            </button>
          ) : (
            <button onClick={handleSignToggle} className="navbar-link">
              Login
            </button>
          )}
          {isAuthUser && (
            <a href="#" className="navbar-link">
              Dashboard
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt=""
        />
      </a>
    </div>
  );
}
