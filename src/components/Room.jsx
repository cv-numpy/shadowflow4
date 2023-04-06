import React, {useRef} from 'react';
import styled from "styled-components";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from 'react-webcam';

import Navbar from './Navbar';
import { Hand } from './mediaPipe/handObj.jsx'
import { drawHand } from './mediaPipe/userSight';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
      height: 200vh;
    }
`;



const Room = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    
    let hand1 = new Hand();

    const runHandpose = async () =>{

        const net = await handpose.load() 
        console.log('Handpose model loaded.')
        
        // Looping the Detection
        setInterval(()=>{
        
        hand1.detect_hand.bind(hand1, webcamRef, net, canvasRef)();
    
      }, 100)
    }
    
    
    runHandpose();
    return (
        <div>

            <Navbar />
            {/* <Webcam ref={webcamRef} />
            <canvas ref={canvasRef} /> */}

            <Webcam ref={webcamRef} 
            style={{
                position:"absolute",
                marginLeft:"auto",
                marginRight:"auto",
                left:0,
                right:0,
                textAlign:"center",
                zIndex:9,
                width:640,
                height:480,
            }}
            />

            <canvas ref={canvasRef} 
            style={{
                position:"absolute",
                marginLeft:"auto",
                marginRight:"auto",
                left:0,
                right:0,
                textAlign:"center",
                zIndex:9,
                width:640,
                height:480,
            }}
            />
            {/* </header> */}
        </div>
    );
};

export default Room;