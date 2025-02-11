import ButtonWithIcon from "./ButtonWithIcon.jsx";
import Preset from "./Preset.jsx";
import collapseIcon from "/svg/collapse.svg"

import preset1Img from "/templates/template_1.png"
import preset2Img from "/templates/template_2.png"

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

    function changeAccentColor(e) {
        document.body.style.setProperty('--accent-color', e.target.id)
        const colors = document.querySelectorAll('span.color');
        colors.forEach(color => {
            color.classList.remove('selected');
        })
        e.target.classList.add('selected')
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