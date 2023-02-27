import {useState, useEffect} from 'react';
import './App.css';


const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You've changed counter to: " + counter);
  }, [counter]);


  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

/*
Basic Text Example
const name = "Terry";
const isNameShowing = true;
<h1>Hello {name}!</h1>
      
{name ? (
        <>
          Welcome to React!
        </>
      ) : (
        <>
        <h1>test</h1>
        <h2>There is no name</h2>
        </>
      )}
*/

/* 
Object/Props Example:

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Surname: {props.surname}</h2>
    <h3>Age: {props.age}</h3>
    </>
  )
}

<Person name={"Billy"} surname={"Bob"} age={41}/>
      <Person name="Bruce" surname="Lee" age={28}/>
      <Person name='Alica' surname={"Wu"} age={20 + 2}/>
      <Person 
        name={"Brian"} 
        surname={"Griffin"} 
        age={17}
      />
      <Person name={"George"} surname={"Lucas"} age={6}/>
      
*/

/*
Hooks(useStates), events, alert Example:
alert('clicked')
Never modify a state manually, never mutate a state
Ex.
useEffect(() => {
  counter = 100
})
Effect runs repeatedly once the page is launched
Ex.
  useEffect(() => {
    setCounter(100);
  }, []);
Here Effect runs once at start because the empty [], 
if a variable like counter is added to the [] then the
setCounter(100) will run everytime the counter variable
is altered. (But an infinite loop will start because setCounter changes counter)
*/

export default App;
