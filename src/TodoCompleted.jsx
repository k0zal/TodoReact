import React, {useState, useContext} from 'react'
import { Context } from "./ContextProvider"
import "./Todoitems.css"

function TodoCompleted() {

const {deleteCompleted} = useContext(Context)

    return (
      <div className="todoallcontainer">
        <div className="todoitemscontainer">
          <div className="todoitems">
            <ul className="mappedlist"></ul>
          </div>
          <div className="bottomdiv">
            <span>{calculatedData.length} Items left</span>
            <span className="clearcompleted" onClick={() => deleteCompleted()}>
              Clear Completed
            </span>
          </div>
        </div>
      </div>
    );
}

export default TodoCompleted
