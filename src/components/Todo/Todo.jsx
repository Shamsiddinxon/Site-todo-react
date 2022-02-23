import React from "react"
import "./Todo.scss"

function Todo({id, title, hendelDeletf}) {
       return <li className="item" data-todo-id={id} >
                     <p className="itemDesc">{title}</p>
                     <input type="checkbox"  className="checkboxBtn" />
                     <button id={id} className="deleteBtn" onClick={hendelDeletf} ></button>
              </li>
}

export default Todo