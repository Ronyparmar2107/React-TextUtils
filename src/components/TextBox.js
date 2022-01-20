import Preview from './Preview'
import './TextBox.css'
import {useState} from 'react'


export default function TextBox(props) {
    
    let text
    let textLength =0;
    let WordCount = 0;
    const [perview, setperview] = useState(text)
    const [wordCount, setwordCount] = useState(WordCount)
    const [length, setlength] = useState(textLength)

    const storeText=(event)=>{
            text = event.target.value
            setperview (text)
            textLength = text.length
            setlength(textLength)
            WordCount= text.match(/(\w+)/g).length
            setwordCount(WordCount)
        }
        
        const ToCapital=()=>{
            if (perview!==' '){
                text = perview.toUpperCase();
                setperview(text)
            }
        }
        
        const ToSmall=()=>{
            if (perview!==' ') {
                text = perview.toLowerCase();
                setperview(text)
                
            }
        }
        const ClearScreen=()=>{
            if (perview!==' ') {
                text = '';
                setperview(text)
                setlength(textLength)
                setwordCount(WordCount)
            }
        }
        

    return (
        <div className={`container${props.mode}`}>
            <h1>Enter Text For Processes</h1>
            <textarea rows="12" onChange={storeText} value={perview} placeholder= 'Enter Something' className='TextContainer'/>
            <div className='Buttons'>
                <button onClick={ToCapital}>To UpperCase</button>
                <button onClick={ToSmall}>To LowerCase</button>
                <button onClick={ClearScreen}>Clear Screen</button>
            </div>
            <Preview text={perview} wordCount={wordCount} textLength={length}/>
        </div>
    )
}
