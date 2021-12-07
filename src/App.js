import React, { useEffect, useRef, useState } from "react";
import classes from './App.module.css'
import Canvas from './Components/Canvas/Canvas'

function App() {
  const imageRef = useRef(null);

  const [url, seturl] = useState(null);
  const [show, setShow] = useState(false);

  const fileHandler = (event) => {
    seturl(URL.createObjectURL(event.target.files[0]));
  }

  const imageLoaderHandler = () => {
    setShow(true);
  }

  return(
    <div>
      <input type = "file" onChange = {fileHandler}/>
      <br />

      <div className = {show ? classes.Container : classes.NoDisplay}>

        <img src = {url}
          ref = {imageRef}
          onLoad = {imageLoaderHandler}/>

       <Canvas url = {url}/>
      </div> 
    </div>
  )
}

export default App;
