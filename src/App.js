import React, { useEffect, useRef, useState } from "react";
import classes from './App.module.css'

function App() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const imageRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [url, seturl] = useState(null);

  useEffect(() => {

    console.log(imageRef);
    const canvas = canvasRef.current;
    
    canvas.width = 0.5*window.innerWidth*3;
    canvas.height = 0.9*window.innerHeight*3;
    canvas.style.width = `${0.5*window.innerWidth}px`;
    canvas.style.height = `${0.9*window.innerHeight}px`;

    const context = canvas.getContext('2d')
    context.scale(3, 3);
    context.lineCap = "round";
    context.strokeStyle = "white";
    context.lineWidth = 3;

    contextRef.current = context;
  }, [url])

  const startDrawing = ({nativeEvent}) => {

    console.log(nativeEvent)
    const {offsetX, offsetY} = nativeEvent
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);

    setIsDrawing(true);
  }

  const draw = ({nativeEvent}) => {
    if(!isDrawing){
      return;
    }

    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  }

  const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false);

  }

  const fileHandler = (event) => {
    seturl(URL.createObjectURL(event.target.files[0]));
  }

  return(
    <>
    <input type = "file" onChange = {fileHandler}/>
    <br />
    <div className = {classes.Container}>
      <img src = {url}
        ref = {imageRef}/>
      <canvas
        className = {classes.CanvasContainer}
        onMouseDown = {startDrawing}
        onMouseUp = {finishDrawing}
        onMouseMove = {draw}
        ref = {canvasRef}/>   
    </div> 
    </>
  )
}

export default App;
