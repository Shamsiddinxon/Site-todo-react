import './App.scss';
import React  from 'react';
import Todo from "./components/Todo/Todo"

function App() {
  const [todos, setTodos] = React.useState([]);

  const hendelDelet = (evt) => {
    const todoId = evt.target.id - 0
    const filterTodos = todos.filter(row => row.id != todoId)
    setTodos([...filterTodos])

    window.localStorage.setItem(
      "todos",
       JSON.stringify([...filterTodos])
    )
  }

  return (
    <>

<div className="wrapp">
  <h2 className="formHeading">Kun rejalari</h2>

  <form className="form" action="#">
    <div className="formBox">

      <input className='inputForm' required type="text" onKeyUp={(evt) => {
        if (evt.code === "Enter" && evt.target.value != "") {
          const newTodos = {
            id: todos[todos.length - 1]?.id + 1 || 0,
            title: evt.target.value,
            isCompleted: false,
          }

          setTodos([...todos, newTodos])
          window.localStorage.setItem(
            "todos",
            JSON.stringify([...todos, newTodos])
          )
          evt.target.value = null;
        }

      }}  placeholder="todo..."
      />
    </div>
  </form>


      <ul className="list">
          {todos.map((row) => (
            <Todo key={row.id} title={row.title} id={row.id} hendelDeletf={hendelDelet}/>
          ))}
      </ul>
</div>

    </>
  );
}

export default App
