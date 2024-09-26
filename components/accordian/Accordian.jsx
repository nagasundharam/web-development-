import { useState } from "react";
import data from "./data";
import "./something.css";


const Accordian = () => {
    const [selected,setSelect] = useState(null);
    const [enableMulti, setEnableMulti] = useState(false);
    const [multiSelector,setMulti] = useState([]);


    function handleFunction(id){
        setSelect(id === selected ? '':id);

    }
    function Multiselection(id){
        let cpy = [...multiSelector];
        const findIndex = cpy.indexOf(id)
        

        if (findIndex === -1){
            cpy.push(id)

        } 
        else {
            console.log("heelo");
            cpy.splice(findIndex,1)

        } 
        
        setMulti(cpy);
        console.log(cpy,id);
        

    }
   
    return (
        <div>
            <div className="wrapper">
                <button onClick={() => {setEnableMulti(!enableMulti)}}>
                    enableMultiSelector
                </button>
                <div className="accordian">

                    { data && data.length > 0 ? (
                        data.map((dataItem)=> {
                            return (
                            
                            <div className="item" key={dataItem.id} >
                                <div className="title" onClick={()=> { enableMulti ? Multiselection(dataItem.id) : (handleFunction(dataItem.id))}}>
                                    <h1>{dataItem.question }</h1>
                                    <p>+</p>
                                </div>
                                { enableMulti ? multiSelector.indexOf(dataItem.id)!== - 1 &&  <p>{dataItem.answer}</p> :  dataItem.id === selected && ( <p>{dataItem.answer}</p>) }
                                
                                
                            </div>
                            )
                        })
                    ): (<div>No data is here</div>)}

                </div>

            </div>
        </div>
    
    )
    
    
}
export default Accordian;