import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import Loading from './components/Loading';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loader, setLoader] = useState(true);


  const apiURL = "https://reqres.in/api/users?page=2";

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);  // Show the loading state while fetching data
      try {
        const res = await fetch(apiURL);
        const output = await res.json();
        setUsers(output.data)
      }
      catch (error) {
        console.log("error")
      }
      setLoader(false); // Hide the loading state after data is fetched
    }
    fetchData();
  }, [])

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );   // Filter the users based on the search term

  return (
    <div className='container'>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onInput={handleSearch} />
      {
        loader ? <Loading /> : <UserList users={filteredUsers} />
      }
    </div>
  );
}

export default App;
