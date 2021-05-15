import React, { useState } from "react"

const Tabs = (props) => {

    const [activeTab,setActiveTab]= useState(0);

    
    const tabData  =props.children.map(c  => ({
        header: c.props.header,
        data: c.props.children
    })) 

    const buttons = tabData.map((h,i) => (<li className="tab"><button  key={i} className={(activeTab === i) ? "active": ""} onClick={(e) => setActiveTab(i)}>{h.header}</button></li>))
    
 return (<div className="tabs"> 
            <ul className="navigation">{buttons}</ul>
            <div className="content" data-activeTab={activeTab}> {tabData[activeTab].data} </div>
         </div>)
}

const Tab = (props) => {}
export {Tabs, Tab}