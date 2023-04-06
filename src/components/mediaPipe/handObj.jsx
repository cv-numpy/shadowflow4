import { drawHand } from "./userSight";

export class Hand {
    constructor(camera_index=0, framework_name='mediapipe') {
  
      this.camX = camera_index; // camera index
      this.framework = framework_name; // name of neural network framework
  
      this.width = 640;
      this.height = 480;

      this.origin_xy = null; // xy coordinates given by neural network
      this.pixel_xy = null; // pixel position of hand
  
      this.distance = null; // distance from camera
  
    }
  
  //   step1: camera checking
  //   check if camera is available


  
  //  step2: setup camera resolution
  //  set camera resolution
  
  
  //   step3: load demo hand model
  //   load a dashboard for showing hand information
  
  
  
  //   step4: get keypoint data from neural network
  //   get keypoint data from neural network
  
      // detectHand() {
          // if (this.framework === 'mediapipe') {
  
  
  //   step5: calculation of scalar information from 2D keypoint data
  //   * distance from camera
  //   * ratios of hand keypoint positions
  //   * 2D vector of hand direction
  
  
  
  //   step6: mask generation
  
  get_landmarks(preditions){

    if (preditions.length > 0) {
        preditions.forEach(element => {
            this.landmarks = element.landmarks;
        });
    }
}

  async detect_hand(webcamRef, net, canvasRef=null){
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ){
    
        const video = webcamRef.current.video;
        

        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;
    
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
        
        
        
        // resutls
        const preditions = await net.estimateHands(video);
        
        // get landmarks
        this.get_landmarks(preditions);
        
        console.log("canvasRef.current   ", canvasRef.current);

        if(canvasRef.current !== null
            && canvasRef.current !== undefined){
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const ctx = canvasRef.current.getContext("2d");
            drawHand(this.landmarks, ctx);
        }
      }
    }
  
  }