import React from 'react';
import Header from './page-components/Header';
import Nav from './page-components/Nav'
import EntrybyIDForm from './sub-components/EntrybyIDForm'
import EntryForm from './sub-components/EntryForm'

const Entries = () => {
    return (
          <>
            <Header />
            <Nav entries="active" />
      <main>
        <section className="winter spring autumn summer">
          <article>
            <EntryForm />
            <EntrybyIDForm />
            </article>
          <article>

        </article>
       </section>
      </main>
    </>
    );
}
 
export default Entries;