import React from 'react';
import Form from './sub-components/ContactForm'
import Nav from './page-components/Nav'
import Header from './page-components/Header'

const Contact = () => {
    return (
          <>
            <Header />
            <Nav contact="active" />
            <main>
      <section className="winter spring autumn summer">
        <article>
            If you wish to contact me directly, please fill in the following
            form to send me a message. I will reply to you via the provided
            email address.
        </article>
        <div className="content">
          <Form />
          </div>
    </section>
 </main>
 </>
    );
}
 
export default Contact;