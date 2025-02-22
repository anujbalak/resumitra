import Button from "../../components/Button.jsx";
import Input from "../../components/Input.jsx";
import Textarea from "../../components/TextArea.jsx";

export default function Projects({ resumeData, setResumeData }) {
  let activatedProjects = [];
  Object.entries(resumeData.projects).forEach((key) => {
    return activatedProjects.push(key[1].activationStatus);
  });
  function addProjectHandler() {
    console.log(activatedProjects);
    if (activatedProjects[0] === 1 && activatedProjects[1] === 0) {
      activatedProjects.splice(1, 1, 1);
      setResumeData({
        ...resumeData,
        projects: {
          ...resumeData.projects,
          project2: {
            ...resumeData.projects.project2,
            activationStatus: 1,
          },
        },
      });
    } else if (activatedProjects[1] === 1) {
      activatedProjects.splice(2, 1, 1);
      setResumeData({
        ...resumeData,
        projects: {
          ...resumeData.projects,
          project3: {
            ...resumeData.projects.project3,
            activationStatus: 1,
          },
        },
      });
    }
    localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
  }

  return (
    <div className="projects-container">
      <>
        <Project1 setResumeData={setResumeData} resumeData={resumeData} />
        {activatedProjects[1] === 1 && (
          <>
            <hr />
            <Project2 setResumeData={setResumeData} resumeData={resumeData} />
          </>
        )}
        {activatedProjects[2] === 1 && (
          <>
            <hr />
            <Project3 setResumeData={setResumeData} resumeData={resumeData} />
          </>
        )}
        {activatedProjects.some((code) => code === 0) && (
          <Button name="Add Project" btnEventHandler={addProjectHandler} />
        )}
      </>
    </div>
  );
}

function Project1({ resumeData, setResumeData }) {
  function nameHandler(e) {
    setResumeData({
      ...resumeData,
      projects: {
        ...resumeData.projects,
        project1: {
          ...resumeData.projects.project1,
          name: e.target.value,
        },
      },
    });
    localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
  }

  function detailsHandler(e) {
    setResumeData({
      ...resumeData,
      projects: {
        ...resumeData.projects,
        project1: {
          ...resumeData.projects.project1,
          details: e.target.value,
        },
      },
    });
    localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
  }

  const savedResume = JSON.parse(localStorage.getItem(resumeData.id));
  return (
    <div className="project-container">
      <Input
        label="Project Name"
        inputHandler={nameHandler}
        placeHolder=""
        className="institute-name"
        value={savedResume.projects.project1.name}
      />

      <Textarea
        label="Details"
        textareaHandler={detailsHandler}
        className="project-details"
        value={savedResume.projects.project1.details}
      />
    </div>
  );
}

function Project2({ resumeData, setResumeData }) {
  function nameHandler(e) {
    setResumeData({
      ...resumeData,
      projects: {
        ...resumeData.projects,
        project2: {
          ...resumeData.projects.project2,
          name: e.target.value,
        },
      },
    });
    localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
  }

  function detailsHandler(e) {
    setResumeData({
      ...resumeData,
      projects: {
        ...resumeData.projects,
        project2: {
          ...resumeData.projects.project2,
          details: e.target.value,
        },
      },
    });
    localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
  }

  const savedResume = JSON.parse(localStorage.getItem(resumeData.id));
  return (
    <div className="project-container">
      <Input
        label="Project Name"
        inputHandler={nameHandler}
        placeHolder=""
        className="institute-name"
        value={savedResume.projects.project2.name}
      />

      <Textarea
        label="Details"
        textareaHandler={detailsHandler}
        className="project-details"
        value={savedResume.projects.project2.details}
      />
    </div>
  );
}

function Project3({ resumeData, setResumeData }) {
  function nameHandler(e) {
    setResumeData({
      ...resumeData,
      projects: {
        ...resumeData.projects,
        project3: {
          ...resumeData.projects.project3,
          name: e.target.value,
        },
      },
    });
    localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
  }

  function detailsHandler(e) {
    setResumeData({
      ...resumeData,
      projects: {
        ...resumeData.projects,
        project3: {
          ...resumeData.projects.project3,
          details: e.target.value,
        },
      },
    });
    localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
  }

  const savedResume = JSON.parse(localStorage.getItem(resumeData.id));
  return (
    <div className="project-container">
      <Input
        label="Project Name"
        inputHandler={nameHandler}
        placeHolder=""
        className="institute-name"
        value={savedResume.projects.project3.name}
      />

      <Textarea
        label="Details"
        textareaHandler={detailsHandler}
        className="project-details"
        value={savedResume.projects.project3.details}
      />
    </div>
  );
}
