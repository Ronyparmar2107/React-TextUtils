import './App.css';
import TextBox from './components/TextBox';
import ToggleBtn from './components/ToggleBtn';
import { useState } from 'react'

function App() {
  const [mode, setmode] = useState('')
  const toggleMode=()=>{
    if(mode===''){
      setmode('dark')
    }
    else{
      setmode('')
    }
    console.log('this is mode button')
  }
  return (
    <div className={`page${mode}`}>
      <div className={`App${mode}`}>
        <div className='icon'></div>
        <div>TEXTUTILS</div>
        <div  className='btn'>
        <ToggleBtn toggleMode={toggleMode}/>
        </div>
      </div>
      <TextBox mode={mode}/>
    </div>
  );

  // return(
  //   <div>
  //     HI
  //   </div>
  // )
}

export default App;
