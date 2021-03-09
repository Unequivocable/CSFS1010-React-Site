import React from 'react';
import Header from './page-components/Header';
import Nav from './page-components/Nav'
 
const Home = () => {
    return (
          <>
            <Header />
            <Nav home="active" />
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
    </>
    );
}
 
export default Home;