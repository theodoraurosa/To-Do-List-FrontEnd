
import React from "react";
import "./Upcoming.css"


import { CgSearch, CgFormatJustify, CgChevronDoubleRight, CgMenuBoxed ,  CgAlbum ,  CgFormatCenter,  CgAdd } from "react-icons/cg";
import {  FaSignOutAlt } from "react-icons/fa";
import { BiCalendarEvent, BiTask } from "react-icons/bi";

const Upcoming = () => {
    return (
      <div className="container">
        <aside className="menu">
        <CgFormatJustify id="align-justify "/>
          <h2>Menu</h2>
          <div className="search-bar">
          <CgSearch id="seacher"/>
          <input  type="text"placeholder="Search..." />
          </div>
  
          <nav className="tasks">
            <h3>Tasks</h3>
            <ul>
              <li><a href="#"> <CgChevronDoubleRight /> Upcoming <span>15+</span></a></li>
              <li><a href="#">  <CgMenuBoxed /> Today <span>8</span></a></li>
              <li><a href="#">  <BiCalendarEvent />Calendar</a></li>
              <li><a href="#"><CgAlbum /> Sticky Wall</a></li>
            </ul>
          </nav>
          <nav className="lists">
            <h3>Lists</h3>
            <ul>
              <li><a href="#"className="work"> <BiTask />Work</a></li>
              <li><a href="#" className="personal">   <BiTask />Personal</a></li>
              <li><a href="#" className="study">    <BiTask />Study</a></li>
              <li><a href="#"> <CgAdd />Add new list</a></li>
            </ul>
          </nav>
  
          <div className="settings">
            <a href="#"> <CgFormatCenter />Settings</a>
            <a href="#"> <FaSignOutAlt />  Sign Out</a>
          </div>
        </aside>
  
        <main className="content">
          <header className="header">
            <h1>Upcoming <span className="badge">18</span></h1>
          </header>
          
          <section className="tasks-section">
            <div className="task-box">
            <h2>Tomorrow</h2>
              <ul>
                <li><CgAdd />Add new task</li>
                <li><input type="checkbox" /> Work team</li>
                <li><input type="checkbox" /> Job interview</li>
              </ul>

            </div>
            <div className="task-box" >
            <h2>This Week</h2>
              <ul>
                <li><CgAdd /> Add new task</li>
                <li><input type="checkbox" /> Research content ideas</li>
                <li><input type="checkbox" /> Consult accountant</li>
                <li><input type="checkbox" /> Print business card</li>
              </ul>
            </div>

            <div className="task-box">
            <h2>Today</h2>
              <ul>
                <li> <CgAdd />Add new task</li>
                <li><input type="checkbox" /> Database create for company</li>
                <li><input type="checkbox" /> Website templates</li>
                <li><input type="checkbox" /> Meet work team</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    );
  };
  
  export default Upcoming;
  