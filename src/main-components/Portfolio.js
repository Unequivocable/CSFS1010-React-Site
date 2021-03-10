import React from 'react';
import Nav from './page-components/Nav'
import Header from './page-components/Header'
import { formPreview, adminPreview } from '../Images/index'
 
const Portfolio = () => {
    return (
          <>
            <Header />
           <Nav portfolio="active" />
      <main>
      <section className="winter spring autumn summer">
        <article className="portfolio">
          <div className="content">
             <h2>HTML Table Exercise</h2>
                This exercise was to create a table of soccer players in HTML. It was expanded to add in CSS elements for color and mouseover effects.  <br />Click to open the page in a new tab.
          </div>
          <div className="image">
            <a href="portfolio/Exercise1.html" target="_blank"><img src="portfolio/Images/soccerPreview.jpg" width="150px" alt="Exercise 1 Preview"/><br />HTML Table Exercise</a>
          </div>
        </article>
        <article className="portfolio">
          <div className="image">
            <a href="portfolio/Exercise2.html" target="_blank"><img src={formPreview} width="150px" alt="Exercise 2 Preview"/><br />Contact Form Exercise</a>
          </div>          
          <div className="content">
            <h2>Contact Form Exercise</h2>
            This exercise was to create a basic contact form in HTML with simple field validation and sample form text.   <br />Click to open the page in a new tab.
          </div>
        </article>
        <article className="portfolio">
          <div className="content">
             <h2>Admin Login Exercise</h2>
                This exercise required a branching series of if statements to validate that the proper username of "Admin" is entered along with a password of "TheMaster".   <br />Click to open the page in a new tab.
          </div>
          <div className="image">
            <a href="portfolio/adminLogin.html" target="_blank"><img src={adminPreview} width="150px" alt="Admin Login Preview"/><br />Admin Login Exercise</a>
          </div>
        </article>
        <article className="portfolio">
          <div className="image">
            <a href="portfolio/loops.html" target="_blank"><img src="portfolio/Images/loopsPreview.jpg" width="150px" alt="Loops Exercise Preview"/><br />Loops Exercise</a>
          </div>          
          <div className="content">
            <h2>Loops Exercise</h2>
            This exercise was to use a while loop to go through 1 to 100 and print “the number is odd” when the number is odd and ”number is even” for even numbers. <br />Click to open the page in a new tab.
          </div>
        </article>
        <article className="portfolio">
          <div className="content">
             <h2>Puppy Age Exercise</h2>
                This exercise was to create a function that would accept a numeric input and perform a basic calculation on it in order to convert human years to dog years.  <br />Click to open the page in a new tab.
          </div>
          <div className="image">
            <a href="portfolio/puppyAge.html" target="_blank"><img src="portfolio/Images/puppyAgePreview.jpg" width="150px" alt="Puppy Age Preview"/><br />Puppy Age Exercise</a>
          </div>
        </article>
        <article className="portfolio">
          <div className="image">
            <a href="portfolio/calculator.html" target="_blank"><img src="portfolio/Images/trianglePreview.jpg" width="150px" alt="Triangle Exercise Preview" /><br />Triangle Calculation Exercise</a>
          </div>          
          <div className="content">
            <h2>Triangle Calculation Exercise</h2>
            This exercise was to create a calculator that will accept length and width of a triangle and calculate the area based on these inputs.  Blank inputs are not allowed.  <br />Click to open the page in a new tab.
          </div>
        </article>
    </section>
    </main>
      </>
    );
}
 
export default Portfolio;