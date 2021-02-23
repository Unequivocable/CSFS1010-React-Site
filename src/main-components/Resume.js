import React from 'react';
import { NavLink } from 'react-router-dom';
 
const resume = () => {
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
          <li className="active winter spring autumn summer"><NavLink to="/resume">Resume</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
      </nav>
      <main>
      <section class="winter spring autumn summer">
        <article>
          I am an experienced business analsyt who has worked in the Financial IT sector for over fifteen years.  I am currently expanding my capabilities and upgrading my technical abilities to include full-stack web development and UI/UX Design. 
          <h2>Work Experience</h2>
          <ul>
          <li className="resume">
            <b>Senior Business Systems Analyst</b>
            <br />TD Bank, Regina
            2010 to 2020</li>
          <li  className="resume"><b>Business Analyst II</b>
            <br />Celero Solutions, Regina
            2008 to 2010</li>    
          </ul>
          <h3>Education and Certifications</h3>
          <ul>
           <li  className="resume"><b>Certificate in Full Stack Web Development (pending)</b>
            York University</li>
            <li className="resume"><b>Certificate in UX/UI Design (pending)</b>
          York University</li>
          <li className="resume"><b>ITIL 5 Foundation Certificate in IT Service Managemnet</b>
            AXELOS</li>
          <li className="resume"><b>Project Management Professional</b> (2013-2019: not currently active)
              Project Management Institute</li>
          <li className="resume"><b>Bachelor of Arts, with a major in Theology</b> 
          Briercrest College</li>
          </ul>
        </article>
      </section>
      </main>
        </body>
       </div>
    );
}
 
export default resume;