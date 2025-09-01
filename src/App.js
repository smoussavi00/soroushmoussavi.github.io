import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/expedition" element={<Expedition />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {

  const navigate = useNavigate();

  return (
    <div className="container">
      
      <HEADING/>

      <div className="middle-row">
        <div className="project-card" onClick={ () => window.open('https://f1yaqnpm.notion.site/FGF-Fast-Game-Format-1b7b9b7edc458023824acc38e9568305', '_blank', 'noopener,noreferrer')}>
          <img src="/images/FGF-A.png" className="project-image" alt="FGF" draggable={false}/>
          <p className="project-desc"> PGN is too slow and too large — FGF offers lossless compression and faster access times. </p>
        </div>
        <div className="project-card">
          <img src="/images/socrates.jpeg" className="project-image" alt="Socrates" draggable={false} />
        </div>
        <div className="middle-navigation">
          <MN className="MN MN-right" title="All Projects" id="projects" onClick={() => {navigate('/projects');}} />
          <MN className="MN MN-right" title="Github" id="github" onClick={() => window.open('https://github.com/smoussavi00')} />
          <MN className="MN MN-down" title="Fall 2025" />
        </div>
      </div>


      <div className="bottom-row">
        <div className="bottom-left">
          <div className="info" id="profile">
            <img id="sepiated" src="/images/sepiated.png" alt="Profile" />
            <p id="desc">Hey! My name is Soroush and I am a new graduate from Carleton U.</p>
          </div>
          <div className="info info-rings" id="rings-profile">
            <RING size="large" desc="Infrastructure — Fullstack" />
            <RING size="large" desc="Math — Design — Algorithms" />
            <RING size="large" desc="Running — Hiking — Walking " />
          </div>
        </div>

        <MN className="MN MN-right" title="Education, Experience, and Skills" id="expedition" onClick={() => navigate('/expedition')} />
      </div>
      
    </div>
  );
}

function Projects() {

  const navigate = useNavigate();

  return (
    <div className="container">

        <HEADING/>

        <div className="middle-row-alt">  
          <MN className="MN MN-nil" title="All Projects"  />
          <MN className="MN MN-left" title="Return" id="return" onClick={() => {navigate('/')}} />
        </div>

        <div className="list">
          <div className="project-card project-card-long" onClick={ () => window.open('https://f1yaqnpm.notion.site/FGF-Fast-Game-Format-1b7b9b7edc458023824acc38e9568305', '_blank', 'noopener,noreferrer')}>
            <img src="/images/FGF-B.png" className="project-image project-image-long" alt="FGF" draggable={false} />
            <div className="project-desc-long">
              <p>PGN is too slow and too large — FGF offers lossless compression and faster access times.</p>
            </div>
            </div>
        </div>

    </div>

  );
}
function Expedition() {

  const navigate = useNavigate();

  return (
    <div className="container">

        <HEADING/>

        <div className="middle-row-alt">  
          <MN className="MN MN-nil" title="Education, Experience, and Skills"  />
          <MN className="MN MN-left" title="Return" id="return" onClick={() => {navigate('/')}} />
        </div>

        <div className="bottom-row">
        <div className="bottom-left"> 
          <SUBHEADING className="subheading" title="Bachelor of Computer Science" />
          <div className="info-alt" id="bcs">
            <POINT type="up" desc="Carleton University, Ottawa, ON" />
            <POINT type="up" desc="Sep 2020 — Nov 2024" />
            <POINT type="right" desc="GPA: 11.0 / 12.0 — A" />
            <POINT type="right" desc="Awarded Senate Medal — Top 3% of Graduating Class" long="true"/>
          </div>
          <SUBHEADING className="subheading" title="Skills" />
          <div className="info info-rings" id="rings-skills">
            <RING size="small" desc="JavaScript — HTML — REACT" />
            <RING size="small" desc="Linux — Git — Docker" />
            <RING size="small" desc="MongoDB — PostgreSQL" />
            <RING size="small" desc="Agile — SDLC — DevOps" />
            <RING size="small" desc="Accountability — Adaptability" />
          </div>
        </div>
        <div className="bottom-right">
          <SUBHEADING className="subheading" title="Teaching Assistant" />
          <div className="info-alt" id="ta">
            <POINT type="up" desc="Carleton University, Ottawa, ON" />
            <POINT type="up" desc="Sep 2021 — Apr 2022" />
            <POINT type="up" desc="Intro CS I & Discrete Structures I" />
            <POINT type="right" desc="Taught concepts to CS students" />
            <POINT type="right" desc="Demonstrated bug fix patterns" />
            <POINT type="right" desc="Graded weekly assignments — delivering constructive feedback" long="true"/>
          </div>
          <SUBHEADING className="subheading" title="RF Engineer Intern" />
          <div className="info-alt" id="rf">
            <POINT type="up" desc="Ericsson, Remote" />
            <POINT type="up" desc="May 2022 — Aug 2022" />
            <POINT type="right" desc="Compiled 5G performance reports using specialized networking tools" long="true"/>
            <POINT type="right" desc="Designed optimized test routes —facilitating network analysis" long="true"/>
          </div>

        </div>

      </div>
    </div>
  );
}

function HEADING() {
  return ( 
    <div className="heading">
          <div className="title">
            <h1 id="name"> Soroush Moussavi </h1>
            <h3 id="subtitle"> Software Engineer — Ottawa, ON </h3>
          </div>
          <div className="image">
            <img id="glyph" src="/images/GLYPH3.png" alt="Glyph" />
          </div>
     </div>
  )
}


function MN({className, title, id, onClick}){

  if (className.includes('MN-nil')) {
    return (
      <div className={className} id={id} onClick={onClick}>
        <span>{title}</span>
      </div>
    );
  }

  let src = '';
  if(className.includes('MN-right')) { src = 'images/arrow.png';}
  if(className.includes('MN-down')) { src = 'images/arrowdown.png'; }
  if(className.includes('MN-left')) { src = 'images/arrowback.png'; }

  let spanstyle = {width: "70%" };
  let imgstyle = {width: "24px" };

  if (id === 'expedition') {
    spanstyle.alignSelf = "flex-start";
    imgstyle.alignSelf = "flex-end";
  }

  return (
    <div className={className} id={id} onClick={onClick}>
      <span style={spanstyle}>{title}</span>
      <img src={src} alt="Arrow Icon" style={imgstyle} />
    </div>
  );
}

function RING({size, desc}) {
  let ringsize = size === "large" ? {width: "18px"} : {width: "16px"};
  return (
    <div className={`ring ring-${size}`}>
      <img src="/images/GLYPH0.png" alt="Ring" style={ringsize}/>
      <p style={{margin: "0"}}>{desc}</p>
    </div>
  );
}

function POINT({type, desc, long}){
  let src = {
    "up" : "/images/pointup.png",
    "right" : "/images/point.png",
  }
  return (
  <div className={`point ${long ? "point-long" : ""}`}>
    <img src={src[type]} alt="Point" style={{width: "16px"}} />
    <p style={{margin: "0"}}>{desc}</p>
  </div>
  );
}

function SUBHEADING({className, title}) {
  return ( <div className={className}> <p style={{margin: "0"}}>{title}</p> </div> );
}



export default App;
