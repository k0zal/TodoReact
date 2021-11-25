import React, {useContext, useEffect, useState} from 'react'
import { Context } from "./ContextProvider"
import "./Header.css"
import LightModeIcon from "./images/icon-sun.svg"
import "./Todoformcontainer.css"
import TodoForm from './TodoForm'
import DesktopHeaderDarkBg from "./images/bg-desktop-dark.jpg"
import DesktopHeaderLightBg from "./images/bg-desktop-light.jpg"
import DarkModeIcon from "./images/icon-moon.svg"
import "./index.css"
import Cookies from 'js-cookie'



function Header() {
    const {mode, setMode} = useContext(Context)
    const [modeswitch, setModeSwitch] = useState();

    function toggleAnim(){

    }

    if(mode){
        document.body.style.backgroundColor = "rgb(23,25,36)"
    }
    else{
        document.body.style.backgroundColor = "hsl(0, 0%, 98%)"
    }

    function setCookieMode(e){
        
       setMode(prevMode => !prevMode)
       setModeSwitch(prevMode => !prevMode)
       
       
    }

  useEffect(() => {
    Cookies.set("theme", mode)
  }, [mode])


    return (
        <div className="headercontainer">
           <img className="headerbg" src={mode ? DesktopHeaderDarkBg : DesktopHeaderLightBg} alt="" />
            <div className="headerinfo">
                <div className="headertextlogo">
                <h1>TODO</h1>
                <img className={modeswitch ? "modeswitch" : "modeswitch2"} onClick={() => setCookieMode()} src={mode ? LightModeIcon : DarkModeIcon} alt="" />
                </div>
            </div>
            <TodoForm />
        </div>
    )
}



export default Header
