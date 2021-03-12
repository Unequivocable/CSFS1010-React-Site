import React from 'react';
import Nav from './page-components/Nav'
import EntrybyIDForm from './sub-components/EntrybyIDForm'
import EntryForm from './sub-components/EntryForm'

const Entries = () => {
  return (
    <>
      <Nav entries="active" />
      <main>
        <section>
          <article>
            <ul>
              <EntrybyIDForm /> 
              <EntryForm />
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}
 
export default Entries;