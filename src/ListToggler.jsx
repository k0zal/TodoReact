import React, { useContext } from "react";
import "./Todoitems.css";
import "./Listtoggler.css";
import { Context } from "./ContextProvider";

function ListToggler() {
  const { activeTab, setActiveTab, mode } = useContext(Context);



  return (
    <div className="todostatetoggler">
      <div className="filterstates" style={{backgroundColor: mode ? "rgb(36,39,59)" : "white", boxShadow: mode ? "" : "rgb(157 162 235 / 30%) -1px 5px 20px 10px"}}>
        <div className="statedivs">
          <div className="tabs" style={{color: activeTab === 1 && "rgb(86,221,255", fontWeight: activeTab === 1 && "700"}} onClick={() => setActiveTab(1)}>
            All
          </div>
          <div className="tabs" style={{color: activeTab === 2 && "rgb(86,221,255", fontWeight: activeTab === 2 && "700"}} onClick={() => setActiveTab(2)}>
            Active
          </div>
          <div className="tabs" style={{color: activeTab === 3 && "rgb(86,221,255", fontWeight: activeTab === 3 && "700"}} onClick={() => setActiveTab(3)}>
            Completed
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListToggler;
