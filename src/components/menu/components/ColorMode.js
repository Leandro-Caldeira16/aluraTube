import react, { useState } from "react";
import { createContext } from "react";

   export const ColorModeContext = createContext( {
        mode: "light",
        setMode: ()=> {alert("vc precisa me configurar primeiro")},
        toggleMode: ()=> {alert("vc precisa me configurar primeiro")},
    });



export default function ColorModeProvider(props){

const [mode, setMode] =useState(props.initialMode)

function toggleMode(){
    if(mode === "dark") setMode("light")
    if(mode === "light")setMode("dark")
  }


    return(
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode: toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}