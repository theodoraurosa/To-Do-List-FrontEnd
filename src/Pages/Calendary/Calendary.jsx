
import React from "react";
import "./Calendary.css";

import { CgSearch, CgFormatJustify, CgChevronDoubleRight, CgMenuBoxed ,  CgAlbum ,  CgFormatCenter,  CgAdd } from "react-icons/cg";
import {  FaSignOutAlt } from "react-icons/fa";
import { BiCalendarEvent, BiTask } from "react-icons/bi";

const Calendary = () => {
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
          <h1>17 October 2023</h1>
        <div class="date-navigation">
          <button>Day</button>
          <button>Week</button>
          <button>Month</button>
        </div>
        <button class="add-new">Add New</button>
          </header>

    <section className="tasks-section">
          <div class="timeline">
        <div class="time-slot">
          <span>08:00 AM</span>
        </div>
        <div class="event" style="top: 40px; background-color: #d4edda;">
          Database create for company
        </div>
        <div class="time-slot">
          <span>10:00 AM</span>
        </div>
        <div class="event" style="top: 120px; background-color: #d1ecf1;">
          Meet work team
        </div>
        <div class="time-slot">
          <span>02:00 PM</span>
        </div>
        <div class="event" style="top: 220px; background-color: #f8d7da;">
          Database create for company
        </div>
      </div>
</section>
    </main>
      </div>
    );
  };
  
  export default Calendary;
  