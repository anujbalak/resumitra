import ButtonWithIcon from "./ButtonWithIcon";
import homeIcon from "/svg/home-angle.svg";
import personalIcon from "/svg/personal.svg";
import educationIcon from "/svg/education.svg";
import projectIcon from "/svg/project-new.svg";
import experienceIcon from "/svg/user-pen.svg";
import printIcon from "/svg/print.svg";

export default function LeftSidebar({
  backBtnHandler,
  showFieldHandler,
  handlePrint,
}) {
  return (
    <div className="left-sidebar">
      <ButtonWithIcon
        label="Go to Dashboard"
        imgSource={homeIcon}
        btnHandler={backBtnHandler}
      />
      <div className="juper-links">
        <ButtonWithIcon
          label="Personal Details"
          link="#personal-details"
          imgSource={personalIcon}
          btnHandler={showFieldHandler}
        />
        <ButtonWithIcon
          label="Education Details"
          link="#education-details"
          imgSource={educationIcon}
          btnHandler={showFieldHandler}
        />
        <ButtonWithIcon
          label="Experience"
          link="#experience"
          imgSource={experienceIcon}
          btnHandler={showFieldHandler}
        />
        <ButtonWithIcon
          label="Projects"
          link="#projects"
          imgSource={projectIcon}
          btnHandler={showFieldHandler}
        />
      </div>
      <div className="print-button-container">
        <div>
          <ButtonWithIcon
            label="Print"
            imgSource={printIcon}
            btnHandler={handlePrint}
          />
        </div>
      </div>
    </div>
  );
}
