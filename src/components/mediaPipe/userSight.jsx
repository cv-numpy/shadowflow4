// Drawing function
export const drawHand = (landmarks, ctx) => {

    for (let i = 0; i < landmarks.length; i++){
        
        const x = landmarks[i][0];
        const y = landmarks[i][1];
        
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 3*Math.PI);
        
        ctx.fillSyle = "indigo";
        ctx.fill();

        console.log("Drawing")
    }
}