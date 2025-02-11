import ButtonWithIcon from "./ButtonWithIcon.jsx";
import Preset from "./Preset.jsx";
import collapseIcon from "/svg/collapse.svg"

import preset1Img from "/templates/template_1.png"
const colors = ['133, 0, 245', "30, 30, 30", "209, 69, 102", '13, 159, 201', '210, 194, 12', "2, 104, 0", "37, 40, 152"]

export default function RightSidebar({ setShowRightSidebar, resumeData}) {
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
            default:
                break;
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
                            img={preset1Img}
                            id="preset2"
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
                                onClick={(e) => document.body.style.setProperty('--accent-color', e.target.id)}
                            ></span>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}


function removeSelectedClass() {
    const presets = document.querySelectorAll('div.preset img')
    return presets.forEach((preset) => {
        console.log(preset.className)
        preset.classList.remove('selected')
    })
}

function applyPreset(id) {
    const page = document.querySelector('div.live-resume')
    return page.id = id
}