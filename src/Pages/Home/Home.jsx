import React from "react";

import "./Home.css";
import { CgSearch, CgFormatJustify, CgChevronDoubleRight, CgMenuBoxed ,  CgAlbum ,  CgFormatCenter,  CgAdd } from "react-icons/cg";
import {  FaSignOutAlt } from "react-icons/fa";
import { BiCalendarEvent, BiTask } from "react-icons/bi";

const Home = () => {
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
            
  <main class="content">
          <h1>Welcome to ToDoPy</h1>
        <p>
      A to-do app is a simple, user-friendly digital tool designed to help 
      individuals and teams organize tasks and manage their daily activities efficiently.
      Users can create, edit, and prioritize tasks, set deadlines or reminders, 
      categorize items, and track their progress, all within an intuitive and accessible interface.
        </p>
        
    <button>Go to tasks</button>
  </main>

     
      </div>
      
    );
};

export default Home;