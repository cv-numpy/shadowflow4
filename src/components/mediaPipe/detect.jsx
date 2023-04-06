// import { drawHand } from './userSight.jsx';

const get_landmarks = (preditions) => {

    console.log("preditions");
    console.log(preditions);

    if (preditions.length > 0) {
        preditions.forEach(element => {
            const landmarks = element.landmarks;

            console.log("landmarks");
            console.log(landmarks);

            return landmarks;
        });
    }
}


export const detect_hand = async (webcamRef, net) => {

    console.log("webcamRef");
    console.log(webcamRef.current);
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ){
  
      const video = webcamRef.current.video;
      
      // resutls
      const preditions = await net.estimateHands(video);

      // get landmarks
      const landmarks = get_landmarks(preditions);

    //   // draw
    //   const ctx = canvasRef.current.getContext("2d")
    //   drawHand(landmarks, ctx);
    }
  }