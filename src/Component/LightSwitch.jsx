import { useState } from "react";

export const LightSwitch = ()=>{

    const [toggle, setToggle ]=useState("OFF")

    const onClickHandler = ()=>{

        if(toggle === "OFF"){
            setToggle("ON")
            document.getElementById("pTag").style.backgroundColor = "yellow"
        }else if(toggle === "ON"){
            setToggle("OFF")
            document.getElementById("pTag").style.backgroundColor = "gray"
        }

    }

    return(
        <>
        <h1>useState Testing-2</h1>
        <div id="pTag">
        <p>{toggle}</p>
        </div>
        <button className="btn btn-success" onClick={onClickHandler}>Click To Toggle</button>
        </>
    )

}