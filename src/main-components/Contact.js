import React from 'react';
import ContactForm from './sub-components/ContactForm'
import Nav from './page-components/Nav'
import Header from './page-components/Header'


const Contact = () => {
    return (
          <>
            <Header />
            <Nav contact="active" />
            <main>
      <section>
        <article>
            If you wish to contact me directly, please fill in the following
            form to send me a message. I will reply to you via the provided
            email address.
        </article>
        <article className="content">
          <ContactForm />
          </article>
    </section>
 </main>
 </>
    );
}
 
export default Contact;