import { useState } from "react"
import './App.css'
import "./styles/homepage.css"
import "./styles/dashboard.css"
import Homepage from './web/home/homepage.jsx'
import Dashboard from "./web/dashboard/Dashboard.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  function btnEventHandler() {
    setCurrentPage('dashboard')
  }

  return (
    <>
      {currentPage === 'home' && <RenderHome btnEventHandler={btnEventHandler} />}
      {currentPage === 'dashboard' && <RenderDashboard />}
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

function RenderDashboard() {
  return (
    <div className="dashboard-page">
      <Dashboard />
    </div>
  );
}
