import React from 'react';
import { NavLink } from 'react-router-dom';
 
const contact = () => {
    return (
       <div>
          <body className="winter spring autumn summer">
            <header>
        <div className="logoGrid winter spring autumn summer">
          <div className="wlogo">Winter</div>
          <div className="slogo">Spring</div>
          <div className="alogo">Autumn</div>
          <div className="sumlogo">Summer</div>
        </div>
        <div className="banner winter spring autumn summer" >
          <h1>Dustin Siggelkow's Web Development Site</h1>
        </div>
      </header>
      <nav className="winter spring autumn summer">
        <ul>
          <li><NavLink to="/">Home</NavLink></li> 
          <li><NavLink to="/resume">Resume</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li className="active winter spring autumn summer"><NavLink to="/contact">Contact</NavLink></li>
          </ul>
      </nav>
      <main>
      <section class="winter spring autumn summer">
        <article>
            If you wish to contact me directly, please fill in the following
            form to send me a message. I will reply to you via the provided
            email address.
        </article>
          
          <form id="form" className="portfolio">

            <div class="content">
              <label>First Name: 
                <input type="text" id="first" />
              </label>
            </div>
            <div id="errFN" className="content">
            </div>
            <div className="content">
              <label>Last Name: 
                <input type="text" id="last" />
              </label>
            </div>
            <div id="errLN" className="content">
            </div>
            <div className="content">
              <label>Phone Number:
                <input type="tel" placeholder="xxx-xxx-xxxx" id="phone" onkeyup="validatePhone()" />
              </label>
            </div>
            <div id="errPhone" className="content">              
            </div>
            <div class="content">
              <label>Email:
                <input type="email" id="email" placeholder="Enter a valid email address" onkeyup="validateEmail()" />
              </label>
            </div>
            <div id="errEmail" class="content">
            </div>
            <div class="content">
            <label for="comments">Comments:</label>
              <textarea rows="3" cols="40" name="comments" id="comments" placeholder="Provide message content here"></textarea>
            </div>
            <div id="errCom" class="content">              
            </div>
            <div class="content">
              <input type="button" onclick="validateOther(), validatePhone(), validateEmail(), validate()" value="Submit" /> &nbsp;
              <input type="reset" value="Reset" />
            </div>
            <div id="errForm" className="content"></div>
          </form>
    </section>
 </main>
 </body>
</div>
    );
}
 
export default contact;