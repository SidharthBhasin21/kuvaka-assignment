import React, { useState } from "react";
import Addnew from "./Tabs/Addnew";
import SpeechEnhancement from "./Tabs/SpeechEnhancement";
import Transcription from "./Tabs/Transcription";
import Translation from "./Tabs/Translation";
import Folders from "./Tabs/Folders";




const Dashboard = () => {


  const [view, setView] = useState("add_new");

  const renderUI = {
    "add_new": <Addnew />,
    "speech_enhancement": <SpeechEnhancement />,
    "transcription":   <Transcription />,
    "translation": <Translation />,
    "folders": <Folders />
  }


  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="dashboard-logo">
          <img src="src/assets/icons/decrackle.png" alt="logo" />
          <h2>Decrackle</h2>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-list-links" onClick={
            () => setView("add_new")
          }>
            {" "}
            <img src="src/assets/icons/PlusCircle.png" />
            <span>Add New </span>
          </li>
          <li className="sidebar-list-links" onClick={() => {
            setView("speech_enhancement")
          }}>
            {" "}
            <img src="src/assets/icons/MagicWand.png"  />
            <span>Speech Enhancement</span>
          </li>
          <li className="sidebar-list-links" onClick={() => {
            setView("transcription")
          }}>
            {" "}
            <img src="src/assets/icons/subtitles.png" />
            <span>Transcription</span>
          </li>
          <li className="sidebar-list-links" onClick={() => {
            setView("translation")
          }}>
            {" "}
            <img src="src/assets/icons/translation.png" />
            <span>Translation</span>
          </li>
          <li className="sidebar-list-links" onClick={() => {
            setView("folders")
          }}>
            {" "}
            <img src="src/assets/icons/FolderNotchOpen.png" />
            <span>Folders</span>
          </li>
        </ul>
      </div>
      <div className="dashboard-main-container">
        <div className="dashboard-nav">
          <ul>
            <li>FAQs</li>
            <li>How to Use</li>
            <li>Support</li>
            <li>Plans</li>
            <li>
              <img src="src/assets/icons/user-circle.png" />
            </li>
          </ul>
        </div>
        <div className="tabs"> 
        {
            renderUI[view] 
            
        }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
