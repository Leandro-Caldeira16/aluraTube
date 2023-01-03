import { createClient } from "@supabase/supabase-js";
import React, { useState } from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(propsForm){
    const [values, setValues]= React.useState(propsForm.initialValues)

    return{
        values,
        handleChange: (event)=>{
            console.log(event.target);
            const value = event.target.value
            const name= event.target.name
            console.log(value);
            setValues({
                ...values,
                [name]:value,
                })
            },
            clearForm(){
                setValues({})
            }
    }
}

const PROJECT_URL = "https://zgwdltxpguxtqevknolk.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpnd2RsdHhwZ3V4dHFldmtub2xrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg4MTQ2MzksImV4cCI6MTk4NDM5MDYzOX0.0mvGTbVBwIiiKEOKDqnYe_YBTsycREZZJKQX-NhnWQk"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export default function RegisterVideo(){

    const formCadastro = useForm( {
        initialValues: {titulo:"Frost punk", url:"https://www.youtube.com/watch?v=QsqatJxAUtk"}
    } )

    const [formVisivel, setFormVisivel]= React.useState(true)

   

/*
    O que precisa para o form funcionar?
    -pegar os dados que precisam vir do state
    -titulo
    -url do video]
    -precisa ter um onsubmit no nosso form
    -limpar o formulario apos o submit
*/
  

    return(
        <StyledRegisterVideo>
            <button onClick={()=>setFormVisivel(true)} className="add-video">
                +
            </button>
            {formVisivel && (
                <form 
                    onSubmit={(event)=>{event.preventDefault()
                    console.log(formCadastro.values);

                    // CONTRATO ENTRE O FRONT E O BACKEND
                    supabase.from("video").insert({
                        title: formCadastro.values.titulo,
                        url: formCadastro.values.url,
                        thumb: "",
                        playlist: "",
                    })

                    setFormVisivel(false)
                    formCadastro.clearForm()
                    }}
                
                    >
                    <div>
                        <button type="button" onClick={()=>{setFormVisivel(false)}} className="close-modal">
                            X
                        </button>
                        <input 
                            placeholder="Titulo do video" 
                            name="titulo"
                            value={formCadastro.values.titulo} 
                            onChange={formCadastro.handleChange}
                        ></input>

                        <input 
                            placeholder="URL"
                            name="url"
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange}
                            >

                        </input>
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                    

                </form>


            )}
            
        </StyledRegisterVideo>
    )
}

  // [x]falta o botao para adicionar
    // [x]modal
    // [x]precisamos controlar o state
    // ->formulario em si