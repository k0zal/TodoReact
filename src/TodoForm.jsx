import React, {useContext, useState} from 'react'
import "./Todoformcontainer.css"
import {Context} from "./ContextProvider"
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';




function TodoForm() {
const {data, setData, mode} = useContext(Context)
const [todo, setTodo] = useState("")


function addNewTodo(e){
    e.preventDefault()
    
    const cookieadd = [...data, {id: uuidv4(), content: todo, completed: false,}]
    setData(cookieadd)
    Cookies.set("todos", JSON.stringify(cookieadd))
    setTodo("")
}

return (
    <div className="todoformcontainer">
        <div className="inputcontainer">
            <div className="searchcontainer" style={{backgroundColor: mode ? "rgb(36,39,59)" : "white"}}>
                <input type="checkbox"/>
                <input
                type="text"
                name="todoinput"
                className="todoinput"
                placeholder="Create a new todo..."
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
                onKeyPress={event => { if(event.key === "Enter"){addNewTodo(event)}}}
            /> 
            </div>
        </div>
    </div>
    )
}

export default TodoForm
