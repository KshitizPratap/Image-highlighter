import React, { useEffect, useRef, useState } from "react";
import classes from './Canvas.module.css'
import Card from '../Card'

function Canvas(props) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [startCoordinate, setStartCoordinate] = useState([]);
  const [endCoordinate, setEndCoordinate] = useState([]);
  const [coordinateArray, setCoordinateArray] = useState([]);

  useEffect(() => {
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
    context.fillStyle = "#3cff0052"

    contextRef.current = context;

    setCoordinateArray([]);
}, [props.url])

  const startDrawing = ({nativeEvent}) => {

    console.log(nativeEvent)
    const {offsetX, offsetY} = nativeEvent

    setStartCoordinate([offsetX, offsetY])
    setEndCoordinate([offsetX, offsetY])

    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);

    setIsDrawing(true);
  }

  const draw = ({nativeEvent}) => {
    if(!isDrawing){
      return;
    }

    const {offsetX, offsetY} = nativeEvent;

    setEndCoordinate([offsetX, offsetY])

    console.log("[Start Coordinate] : x = " + startCoordinate[0] + ", y = " + startCoordinate[1])
    console.log("[End Coordinate] : x = " + endCoordinate[0] + ", y = " + endCoordinate[1])

    const x = startCoordinate[0];
    const y = startCoordinate[1];
    const w = (endCoordinate[0] - startCoordinate[0])
    const h = (endCoordinate[1] - startCoordinate[1]);
    
    contextRef.current.clearRect(0, 0, 1000, 1000);
    // contextRef.current.stroke();

    coordinateArray.map(coordinate => {
        return contextRef.current.fillRect(coordinate[0], coordinate[1], coordinate[2], coordinate[3]);
    })

    contextRef.current.fillRect(x, y, w, h);
    contextRef.current.stroke();
  }

  const finishDrawing = () => {    
    contextRef.current.closePath()
    setIsDrawing(false);

    const x = startCoordinate[0];
    const y = startCoordinate[1];
    const w = (endCoordinate[0] - startCoordinate[0])
    const h = (endCoordinate[1] - startCoordinate[1]);

    setCoordinateArray(state => [...state, [x, y, w, h]]) 
  }

  const stopDrawing = () => {
    setIsDrawing(false);
  }

  let coordinateCard = coordinateArray.map(coordinate => {
      return (
          <Card 
            x = {coordinate[0]}
            y = {coordinate[1]}
            w = {coordinate[2]}
            h = {coordinate[3]}/>
      )
  })

  return(
        <div className = {classes.Container}>
            <canvas
                className = {classes.CanvasContainer}
                onMouseDown = {startDrawing}
                onMouseUp = {finishDrawing}
                onMouseMove = {draw}
                onMouseLeave = {stopDrawing}
                ref = {canvasRef}/> 
                
                <div className = {classes.CardContainer}>{coordinateCard}</div>
                
        </div>
  )
}

export default Canvas;
