import React from 'react'

// define interfaces to declare the types of data on your page
// in this case, we know that each user has at least a (unique) id and a name, so we define that here
interface User {
  id: number;
  name: string;
  email: string
}

const UsersPage = async () => {
  // dummy data from a placeholder site
  // use the fetch function as it comes with useful tools such as the caching behavior
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users/',
    // {cache:'no-store'} can be used if the accessed data changes very frequently
    {next: {revalidate: 10}} // check the backend every X seconds for new data
  );
  // reference your interface here, as an Array since it has multiple characteristics
  const users: User[] = await res.json()
  return (
    <>
    <h1>Users</h1>
    {/* <p>{new Date().toLocaleTimeString()}</p> */}
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>)}
      </tbody>
    </table>
    </>
  )
}

export default UsersPage