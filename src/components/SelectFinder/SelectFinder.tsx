import ColorSelect from "../ColorSelect/ColorSelect"
import { ScreenCalculator } from "./ScreenCalculator"
import { useState } from "react"
import './SelectFinder.css'


export const SelectFinder = () => {
    const [baseR, setBaseR] = useState(0)
    const [baseG, setBaseG] = useState(0)
    const [baseB, setBaseB] = useState(0)
    const [resultR, setResultR] = useState(0)
    const [resultG, setResultG] = useState(0)
    const [resultB, setResultB] = useState(0)
    const [screenR, setScreenR] = useState(0)
    const [screenG, setScreenG] = useState(0)
    const [screenB, setScreenB] = useState(0)

    const rgbBaseString = `rgb(${baseR}, ${baseG}, ${baseB})`
    const rgbResultString = `rgb(${resultR}, ${resultG}, ${resultB})`
    const rgbScreenString = `rgb(${screenR}, ${screenG}, ${screenB})`
    
    const calculateScreenCallback = () => {
        let [scrR, scrG, scrB] = ScreenCalculator.calculate(baseR, baseG, baseB, resultR, resultG, resultB)
        setScreenR(scrR)
        setScreenG(scrG)
        setScreenB(scrB)
    }

    return (
        <>
            <div className="selectFinder">
                <h2>Select Blending Mode Color Finder</h2>
                <p>
                    <strong>How to Use It:</strong><br />
                    Choose Base and Result colors to determine the color to use with the Select blending mode.</p>
                <h4>Base Color</h4>
                <div>
                    <ColorSelect label="Red" 
                        value={baseR}
                        onChange={v => {setBaseR(v); calculateScreenCallback()}} 
                    />
                    <ColorSelect label="Green"
                        value={baseG} 
                        onChange={v => {setBaseG(v); calculateScreenCallback()}} 
                    />
                    <ColorSelect label="Blue"
                        value={baseB}
                        onChange={v => {setBaseB(v); calculateScreenCallback()}} 
                    />
                    <div className="colorPreview" style={{ backgroundColor: rgbBaseString }} />
                </div>
                <h4>Result Color</h4>
                <div>
                    <ColorSelect label="Red" 
                        value={resultR}
                        onChange={v => {setResultR(v); calculateScreenCallback()}} 
                    />
                    <ColorSelect label="Green"
                        value={resultG} 
                        onChange={v => {setResultG(v); calculateScreenCallback()}} 
                    />
                    <ColorSelect label="Blue"
                        value={resultB}
                        onChange={v => {setResultB(v); calculateScreenCallback()}} 
                    />
                    <div className="colorPreview" style={{ backgroundColor: rgbResultString }} />
                </div>
                <div className="answer">
                    <h4>The Screen Color</h4>
                    <div style={{display: "flex"}}>
                        <div>
                            R: {screenR}<br />
                            G: {screenG}<br />
                            B: {screenB}
                        </div>
                        <div className="answerPreview" style={{ backgroundColor: rgbScreenString }} />
                    </div>
                </div>
            </div>
        </>
    )
}
