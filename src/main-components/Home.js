import React from 'react';
import { NavLink } from 'react-router-dom';
 
const home = () => {
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
          <li className="active winter spring autumn summer"><NavLink to="/">Home</NavLink></li> 
          <li><NavLink to="/resume">Resume</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
      </nav>
      <main>
        <section className="winter spring autumn summer">
          <article>
             This is the home page of my web development site which I am building as part of the Full Stack Web Development Certificate program at York University.  It currently contains my resume, a contact form, and a demostration of what I am learning to build in the Portfolio section.
            </article>
          <article>
            My original idea was for this site to change color palette based on the season as calcuated by today's date.  However, as that would take months to see the different changes, I adapted the logic to change the season every 15 minutes.  So over the course of an hour you will see all four seasons.  If you want to manually switch to the other seasons, select the appropriate logo in the upper left.  
        </article>
       </section>
      </main>
  </body>
</div>
    );
}
 
export default home;