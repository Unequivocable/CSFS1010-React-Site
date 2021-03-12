import React, { useContext } from "react";
import UserContext from "../sub-components/User";
import SignInButton from "../sub-components/SignInButton";

const Header = () => {
  const { login } = useContext(UserContext);

  return (
    <header>
      <div className="banner">
        <h1 className="title">Dustin Siggelkow's Web Development Site</h1>
        <SignInButton loggedIn={login} />
      </div>
    </header>
  );
};

export default Header;
