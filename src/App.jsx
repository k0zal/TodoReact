
import React,{useContext} from "react"
import './App.css'
import Header from './Header'
import TodoItems from './TodoItems'
import ListToggler from './ListToggler'
import { Context } from "./ContextProvider"




function App() {
  const {mode} = useContext(Context)

  return (
    <div className="App">
      <Header />
      <TodoItems />
      <ListToggler />
      <div className="bodycolour">
        
      </div>
    </div>
  );
}

export default App
