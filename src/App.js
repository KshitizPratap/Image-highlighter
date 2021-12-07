import React, { useRef, useState } from "react";
import classes from './App.module.css'
import Canvas from './Components/Canvas/Canvas'

function App() {
  const imageRef = useRef(null);
  const inputRef = useRef(null);

  const [url, seturl] = useState(null);
  const [show, setShow] = useState(false);

  const fileHandler = (event) => {
    if(event.target.files[0] !== url){
      console.log("[event.target] " + event.target);
      console.log(url)
      seturl(URL.createObjectURL(event.target.files[0]));
    }
  }

  const imageLoaderHandler = () => {
    setShow(true);
  }

  const fileSelector = () => {
    inputRef.current.click();
  }

  return(
    <div style = {{position : "relative"}}>
      <input 
        style = {{display : "none"}}
        type = "file" onChange = {fileHandler} 
        ref = {inputRef}/>

      <button className = {classes.Button}onClick = {() => fileSelector()}>Pick image</button>
      <br />

      <div className = {show ? classes.Container : classes.NoDisplay}>
        <img src = {url}
          ref = {imageRef}
          onLoad = {imageLoaderHandler}/>

        <Canvas url = {url}/>
      </div> 
      <p className={show ? classes.Detail : classes.NoDisplay}>Details of selections :</p>
    </div>
  )
}

export default App;
