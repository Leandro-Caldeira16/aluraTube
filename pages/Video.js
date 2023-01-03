import React from "react";
import { ColorModeContext } from "../src/components/menu/components/ColorMode";

function Video(){

    const contexto = React.useContext(ColorModeContext); 

    return(
        <div>video
            {contexto.mode} 
            <button onClick={()=> contexto.toggleMode()}>
                trocar modo
            </button>

        </div>
    )
}

export default Video