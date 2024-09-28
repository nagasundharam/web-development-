import { useState } from "react";

const RandomColor = () => {
    function utility(length){
        return Math.floor(Math.random() * length);

    }
    function hexColorGenerater(){
        let hexColor = "#";

        const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        

        for (let i = 0 ; i < 6 ; i++){
            hexColor+=hex[utility(hex.length)]
        }
        setColor(hexColor);
    }
    function rgbColorGenerater(){
        const r = utility(256);
        const g = utility(256);
        const b = utility(256);

        const rgb = `rgb(${r},${g},${b})`;

        setColor(rgb);

    }
    const [color,setColor] = useState("#fffffff");

    const [typeOfColor,setTypeOfColor] = useState('hex')
    return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:color,color:"black"}}>
        <button onClick={()=>{setTypeOfColor('hex')}}>Hex</button>
        <button onClick={() => {setTypeOfColor('rgb')}}>RGB</button>
        <button onClick={()=> {typeOfColor === "hex"? hexColorGenerater():rgbColorGenerater()}}>RandomColor</button>
         <div>
            <h3>{color}</h3>
            <h1>{typeOfColor}</h1>
         </div>
    </div>  );
}
 
export default RandomColor;