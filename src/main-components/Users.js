import React from 'react';
import Header from './page-components/Header';
import Nav from './page-components/Nav'
import AddUserForm from './sub-components/AddUserForm'
 
const Users = () => {
    return (
          <>
            <Header />
            <Nav users="active" />
      <main>
        <section>
          <article>
            <AddUserForm />
            </article>
          </section>
      </main>
    </>
    );
}
 
export default Users;