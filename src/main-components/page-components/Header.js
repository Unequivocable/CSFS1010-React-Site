import React, { useContext } from 'react';
import UserContext from '../sub-components/User'
import SignInButton from '../sub-components/SignInButton'

const Header = () => {
    const { login } = useContext(UserContext);

    return (
        <header>
            <div className="logoGrid winter spring autumn summer">
                <div className="wlogo">Winter</div>
                <div className="slogo">Spring</div>
                <div className="alogo">Autumn</div>
                <div className="sumlogo">Summer</div>
            </div>
            <div className="banner winter spring autumn summer" >
                <h1 className="title" >Dustin Siggelkow's Web Development Site</h1>
                <SignInButton loggedIn={login}/>
            </div>
        </header>
    )
}

export default Header;