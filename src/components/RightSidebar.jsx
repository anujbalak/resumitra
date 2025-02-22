import { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon.jsx";
import Preset from "./Preset.jsx";
import collapseIcon from "/svg/collapse.svg"

import preset1Img from "/templates/template_1.png"
import preset2Img from "/templates/template_2.png"
import preset3Img from "/templates/template_3.png"
import Button from "./Button.jsx";

const colors = [
    "crimson", 
    "fireBrick", 
    "hotPink", 
    'paleVioletRed', 
    'tomato', 
    "orangeRed", 
    "darkOrange", 
    "darkKhaki", 
    "magenta", 
    "mediumPurple", 
    "blueViolet", 
    "indigo", 
    "darkSlateBlue", 
    "seaGreen", 
    "oliveDrab",
    "teal",
    "steelBlue",
    "dodgerBlue",
    "mediumSlateBlue",
    "navy",
    "dimGray",
    "slateGray",
    "ghostWhite",
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
    
    const [currentAccent, setCurrentAccent] = useState('ghostWhite');

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
                applyAccentOnTexts(currentAccent, "preset3");
                break;
            case "preset4":
                applyPreset("preset4")
                removeSelectedClass()
                e.target.classList.add('selected');       
                if(currentAccent === 'ghostWhite') {
                    setCurrentAccent('dimGray')
                    applyAccentOnTexts('dimGray', "preset4");
                    return
                }
                applyAccentOnTexts(currentAccent, "preset4");
                break;
            default:
                break;
        }
    }
    
    function changeAccentColor(e) {
        setCurrentAccent(e.target.id);
        const hrs = document.querySelectorAll('div.live-resume hr')
        hrs.forEach(hr => {
            hr.style.color = e.target.id
        })

        const textElements = document.querySelectorAll('#preset3 h2')
        if (textElements) {
            textElements.forEach(element => {
                element.style.color = e.target.id
            })
        }

        const t = document.querySelectorAll('#preset4 h2')
        if (t) {
            t.forEach(element => {
                element.style.color = e.target.id
            })
        }

        const links = document.querySelectorAll('.live-resume a')
        links.forEach(link => {
            link.style.textDecorationColor = e.target.id
        })

        const colors = document.querySelectorAll('span.color');
        colors.forEach(color => {
            color.classList.remove('selected');
        })
        e.target.classList.add('selected')
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
                        {/* <Preset
                            img={preset1Img}
                            id='preset4'
                            clickHandler={clickHandler}
                        /> */}
                    </div>
                    <h3 className="colors-label">Accent Color</h3>
                    <div className="colors">
                        {colors.map((color) => 
                            <span 
                                key={color}
                                className="color"
                                id={color}
                                style={{
                                    backgroundColor: color, 
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

function applyAccentOnTexts(accentColor, preset) {
    const textElements = document.querySelectorAll(`#${preset} h2`)
    textElements.forEach(element => {
        element.style.color = accentColor
    })
    
}