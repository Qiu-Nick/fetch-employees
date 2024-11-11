import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3310/api/employees')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setEmployee(data.results[0]))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {employee ? (
        <div>
          <h1>{employee.name.first} {employee.name.last}</h1>
          <p>{employee.email}</p>
          <img src={employee.picture.medium} alt="Employee" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
