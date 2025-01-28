import { useState } from "react"
import './App.css'
import "./styles/homepage.css"
import "./styles/dashboard.css"
import "./styles/editor.css"
import "./styles/resume.css"
import Homepage from './web/home/homepage.jsx'
import Dashboard from "./web/dashboard/Dashboard.jsx";
import EditPage from "./components/EditPage.jsx"

let currentResumeDetails = {}
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  function goDashboardBtnHandler() {
    setCurrentPage('dashboard')
  }

  function editResumeBtnHandler(e) {
    setCurrentPage('edit-resume')
    currentResumeDetails = {id:e.target.id, title:e.target.dataset.title}
  }


  return (
    <>
      {currentPage === 'home' && <RenderHome btnEventHandler={goDashboardBtnHandler} />}
      {currentPage === 'dashboard' && <RenderDashboard onEditResume={editResumeBtnHandler}/>}
      {currentPage === 'edit-resume' && <RenderEditResumePage backBtnHandler={goDashboardBtnHandler} resumeDetails={currentResumeDetails}/>}
      {/* <RenderDashboard currentPage={currentPage} /> */}
    </>
  )
}

function RenderHome({btnEventHandler}) {
  return (
    <div className="homepage-container">
      <Homepage btnEventHandler={btnEventHandler}/>
    </div>
  )
}

function RenderDashboard({onEditResume}) {
  return (
    <div className="dashboard-page">
      <Dashboard onEditResume={onEditResume}/>
    </div>
  );
}

function RenderEditResumePage({backBtnHandler, resumeDetails}) {
  return (
    <div className="edit-resume-page" key={currentResumeDetails.id}>
      <EditPage backBtnHandler={backBtnHandler} resumeDetails={resumeDetails}/>
    </div>
  )
}
