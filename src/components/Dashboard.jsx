import React, { useState } from "react";
import Addnew from "./Tabs/Addnew";
import SpeechEnhancement from "./Tabs/SpeechEnhancement";
import Transcription from "./Tabs/Transcription";
import Translation from "./Tabs/Translation";
import Folders from "./Tabs/Folders";
import profile from "../assets/icons/user-circle.png";
import addnew from "../assets/icons/PlusCircle.png";
import magicwand from "../assets/icons/MagicWand.png";
import subtitles from "../assets/icons/subtitles.png";
import translation from "../assets/icons/translation.png";
import folder from "../assets/icons/FolderNotchOpen.png";
import logo from "../assets/icons/decrackle.png";


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
          <img src={logo} alt="logo" />
          <h2>Decrackle</h2>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-list-links" onClick={
            () => setView("add_new")
          }>
            {" "}
            <img src={addnew} />
            <span>Add New </span>
          </li>
          <li className="sidebar-list-links" onClick={() => {
            setView("speech_enhancement")
          }}>
            {" "}
            <img src={magicwand}  />
            <span>Speech Enhancement</span>
          </li>
          <li className="sidebar-list-links" onClick={() => {
            setView("transcription")
          }}>
            {" "}
            <img src={subtitles} />
            <span>Transcription</span>
          </li>
          <li className="sidebar-list-links" onClick={() => {
            setView("translation")
          }}>
            {" "}
            <img src={translation} />
            <span>Translation</span>
          </li>
          <li className="sidebar-list-links" onClick={() => {
            setView("folders")
          }}>
            {" "}
            <img src={folder} />
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
              <img src={profile} />
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
