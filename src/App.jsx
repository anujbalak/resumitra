import { useState } from "react";
import "./App.css";
import "./styles/homepage.css";
import "./styles/dashboard.css";
import "./styles/editor.css";
import "./styles/button.css";
import "./styles/input.css";
import "./styles/left-sidebar.css";
import "./styles/resume-screen.css";
import "./styles/right-sidebar.css";
import "./styles/resume.css";
import "./styles/checkbox.css";

// Supports weights 300-700
import "@fontsource-variable/space-grotesk";
// Supports weights 200-800
import "@fontsource-variable/dosis";
// import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';
import Homepage from "./web/home/homepage.jsx";
import Dashboard from "./web/dashboard/Dashboard.jsx";
import EditPage from "./components/EditPage.jsx";

let currentResumeDetails = {};
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  function goDashboardBtnHandler() {
    setCurrentPage("dashboard");
  }

  function editResumeBtnHandler(e) {
    currentResumeDetails = {
      id: e.currentTarget.id,
      title: e.currentTarget.dataset.title,
    };
    setCurrentPage("edit-resume");
  }

  return (
    <>
      {currentPage === "home" && (
        <RenderHome btnEventHandler={goDashboardBtnHandler} />
      )}
      {currentPage === "dashboard" && (
        <RenderDashboard onEditResume={editResumeBtnHandler} />
      )}
      {currentPage === "edit-resume" && (
        <RenderEditResumePage
          backBtnHandler={goDashboardBtnHandler}
          resumeDetails={currentResumeDetails}
        />
      )}
      {/* <RenderDashboard currentPage={currentPage} /> */}
    </>
  );
}

function RenderHome({ btnEventHandler }) {
  return (
    <div className="homepage-container">
      <Homepage btnEventHandler={btnEventHandler} />
    </div>
  );
}

function RenderDashboard({ onEditResume }) {
  return (
    <div className="dashboard-page">
      <Dashboard onEditResume={onEditResume} />
    </div>
  );
}

function RenderEditResumePage({ backBtnHandler, resumeDetails }) {
  return (
    <div className="edit-resume-page" key={currentResumeDetails.id}>
      <EditPage backBtnHandler={backBtnHandler} resumeDetails={resumeDetails} />
    </div>
  );
}
