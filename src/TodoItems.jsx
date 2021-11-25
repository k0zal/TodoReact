import React, { useContext,} from "react";
import { Context } from "./ContextProvider";
import "./Todoitems.css";
import CrossSymbol from "./images/icon-cross.svg";
import Cookies from "js-cookie";
import "./index.css"

function TodoItems() {
  const { data, setData, deleteCompleted, filterData, mode} =
    useContext(Context);
    

  function deleteTask(inputid) {
    const removeThis = data.filter((item) => {
      return item.id !== inputid;
    });

    setData(removeThis);
    Cookies.set("todos", JSON.stringify(removeThis));
  }

  function changeCompleted(inputvalue) {
    let currentData = data.map((allt, i) => {
      if (i === inputvalue) {
        return {
          ...allt,
          completed: !allt.completed,
        };
      } else {
        return allt;
      }
    });
    setData(currentData);
    Cookies.set("todos", JSON.stringify(currentData))
    if(currentData){
      
    }
  }

  const filteredData = data.filter((allt) => allt.completed === false);
  const calculatedData = filteredData.map((total, i) => {});




  const allItems = filterData(data).map((item, index) => {
      return (
      <li key={item.id} style={{borderBottom: mode ? "0.5px solid rgb(57,58,76)" : "0.5px solid #dfdfeb"}}>
        <span className="checkboxx" onClick={() => changeCompleted(index)}>
          <input type="checkbox" value={item.id} checked={item.completed} />
          <span></span>
        </span>
        <span className="contentspan" style={{textDecoration: item.completed ? "line-through" : null}}>{item.content}</span>
        <div className="cross">
          <img src={CrossSymbol} onClick={() => deleteTask(item.id)} alt="" />
        </div>
      </li>
    );
  });

  return (
    <div className="todoallcontainer">
      <div className="todoitemscontainer" style={{backgroundColor: mode ? "rgb(36,39,59)" : "white", boxShadow: !mode ? "-1px 5px 20px 10px rgb(157 162 235 / 30%)" : "none"}}>
        <div className="todoitems">
          <ul className="mappedlist">{allItems}</ul>
        </div>
        <div className="bottomdiv">
          <span>
            {calculatedData.length}{" "}
            {calculatedData.length != 1 ? "Tasks" : "Task"} Left
          </span>
          <span className="clearcompleted" onClick={() => deleteCompleted()}>
            Clear Completed
          </span>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
