import './Preview.css'
export default function Preview(props) {
return (
        <div className="Preview" >
            <h1>Preview</h1>
            <p>The word count is {props.wordCount}</p>
            <p>The Lenght is {props.textLength}</p>
            <div className='text'>
            {props.text}
            </div>
        </div>
    )
}
