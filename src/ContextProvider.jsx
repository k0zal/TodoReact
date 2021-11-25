import React, { useState, useEffect } from "react";
const Context = React.createContext();
import Cookies from "js-cookie";

function ContextProvider({ children }) {
  const [activeTab, setActiveTab] = useState(1);
  const [mode, setMode] = useState(() => {
    const getdacookie = Cookies.get("theme")
    if(!getdacookie){
      return true
    }
    else{
      return getdacookie
    }
  })
  const [data, setData] = useState([
    
  ]);
  
function setTheme(){
  let thetheme = Cookies.get("theme")
  if(!thetheme){
    Cookies.set("theme", mode, {expires: 100})
  }
  else{
    const theme = JSON.parse(Cookies.get("theme"))
    setMode(theme)
  }
}

function setInitialCookie(){
    let dacookie = Cookies.get("todos")
    if(!dacookie){
        Cookies.set("todos", data, {expires: 7})
    }
    else{
        const cookie = JSON.parse(Cookies.get("todos"));
    setData(cookie);
    }
    
}

  function filterData(inputData) {
      const filteredData = inputData.filter((todo) => {
          if (activeTab == 2) {
              return todo.completed == false;
          }
          if (activeTab == 3) {
              return todo.completed == true;
          }
          else {
              return todo
          }
      })
      return filteredData
  }
  
  function deleteCompleted() {
    const removedItems = data.filter((todos) => {
      return todos.completed !== true;
    });
    setData(removedItems);
    Cookies.set("todos", JSON.stringify(removedItems));
    //setData(setCookie(removedItems))
  }

  useEffect(() => {
   setInitialCookie()

    setTheme()
  }, [])
  
  useEffect(() => {
    
  }, []);

  return (
    <Context.Provider
      value={{ data, setData, deleteCompleted, activeTab, setActiveTab, filterData, mode, setMode}}
    >
      {children}
    </Context.Provider>
  );
}

function setCookie(data) {
    Cookies.set("todos", JSON.stringify(data));
    return data
}

export { ContextProvider, Context };
