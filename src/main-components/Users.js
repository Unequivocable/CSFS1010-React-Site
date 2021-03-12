import React from "react";
import Nav from "./page-components/Nav";
import AddUserForm from "./sub-components/AddUserForm";

const Users = () => {
  return (
    <>
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
};

export default Users;
