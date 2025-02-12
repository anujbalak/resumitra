import { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon.jsx";
import Preset from "./Preset.jsx";
import collapseIcon from "/svg/collapse.svg"

import preset1Img from "/templates/template_1.png"
import preset2Img from "/templates/template_2.png"
import preset3Img from "/templates/template_3.png"
import Button from "./Button.jsx";

const colors = [
    '133, 0, 245', 
    "30, 30, 30", 
    "209, 69, 102", 
    '13, 159, 201', 
    '210, 194, 12', 
    "2, 104, 0", 
    "37, 40, 152", 
    "102, 198, 161", 
    "102, 51, 153", 
    "214, 152, 46", 
    "217, 74, 56", 
    "156, 29, 147", 
    "47, 47, 190", 
    "234, 118, 203", 
    "210, 15, 57",
    "254, 100, 11",
    "23, 146, 153",
    "114, 135, 253",
]

export default function RightSidebar({ 
    setShowRightSidebar, 
    showProfile, 
    setShowProfile,
    showEducation, 
    setShowEducation,
    showExperience, 
    setShowExperience,
    showProjects, 
    setShowProjects,
    handlePrint,
    }) {

    function collapseBtnHandler() {
        setShowRightSidebar(false)
    }


    function clickHandler(e) {
        
        switch (e.target.id) {
            case "preset1":
                applyPreset("preset1")
                removeSelectedClass()
                e.target.classList.add('selected');       
                break;
            case "preset2":
                applyPreset("preset2")
                removeSelectedClass()
                e.target.classList.add('selected');       
                break;
            case "preset3":
                applyPreset("preset3")
                removeSelectedClass()
                e.target.classList.add('selected');       
                break;
            default:
                break;
        }
    }
    
    function changeAccentColor(e) {
        document.body.style.setProperty('--accent-color', e.target.id)
        const colors = document.querySelectorAll('span.color');
        colors.forEach(color => {
            color.classList.remove('selected');
        })
        e.target.classList.add('selected')
        console.log(document.body.style.getPropertyValue('--accent-color'))
    }

    function toggleField(field, setField) {
        if (!field) {
            setField(true);
        } else if (field) {
            setField(false)
        }
    }


    return (
        <>
            <div className="right-sidebar">
                <ButtonWithIcon
                    label='Collapse'
                    imgSource={collapseIcon}
                    btnHandler={collapseBtnHandler}
                />
                <div className="right-sidebar-content">
                    <h3 className="template-label">Templates</h3>
                    <div className="presets">
                        <Preset
                            img={preset1Img}
                            id="preset1"
                            clickHandler={clickHandler}
                        />
                        <Preset
                            img={preset2Img}
                            id="preset2"
                            clickHandler={clickHandler}
                        />
                        <Preset
                            img={preset3Img}
                            id="preset3"
                            clickHandler={clickHandler}
                        />
                    </div>
                    <h3 className="colors-label">Accent Color</h3>
                    <div className="colors">
                        {colors.map((color) => 
                            <span 
                                key={color}
                                className="color"
                                id={color}
                                style={{
                                    backgroundColor: `rgb(${color})`, 
                                    width: "1.4em", 
                                    height: "1.4em"
                                }}
                                onClick={changeAccentColor}
                            ></span>
                        )}
                    </div>
                    <h3 className="hide-show-label">
                        Hide/Show Fields
                    </h3>
                    <div className="hide-show">
                        <Checkbox 
                            label="Profile"
                            checkEventHandler={() => toggleField(showProfile, setShowProfile, 'profile-container')}
                            checked={showProfile}
                        />
                        <Checkbox 
                            label="Education"
                            checkEventHandler={() => toggleField(showEducation, setShowEducation, 'education-details')}
                            checked={showEducation}
                        />
                        <Checkbox 
                            label="Experience"
                            checkEventHandler={() => toggleField(showExperience, setShowExperience, 'experience')}
                            checked={showExperience}
                        />
                        <Checkbox 
                            label="Projects"
                            checkEventHandler={() => toggleField(showProjects, setShowProjects, 'projects')}
                            checked={showProjects}
                        />
                    </div>
                    <div className="print-container">
                        <Button
                            name="Print"
                            btnEventHandler={handlePrint}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}


function removeSelectedClass() {
    const presets = document.querySelectorAll('div.preset img')
    return presets.forEach((preset) => {
        preset.classList.remove('selected')
    })
}

function applyPreset(id) {
    const page = document.querySelector('div.live-resume')
    return page.id = id
}

function Checkbox({label, checkEventHandler, checked}) {
    return (    	
        <div className="pretty p-default  p-round p-smooth p-toggle">
            <input 
                type="checkbox" 
                id="checkbox" 
                onChange={checkEventHandler}
                checked={checked}
            />
            <div className="state p-primary-o p-on">
                <label htmlFor="checkbox">Hide {label}</label>
            </div>
            <div className="state p-primary-o p-off">
                <label htmlFor="checkbox">Show {label}</label>
            </div>
        </div>
    )
}