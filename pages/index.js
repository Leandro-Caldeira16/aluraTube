import config from "../config.json";
import styled from "styled-components";

import Menu from "../src/components/menu/Index";
import { StyledTimeline } from "../src/components/Timeline";
import { useState } from "react";



function HomePage() {

    const [valorBusca, setValorBusca] = useState("")

    const estilosDaPage = {
        // backgroundColor: "red"
    }

    return (
        <>
            
            <div style={estilosDaPage}>
                <Menu valorBusca={valorBusca} setValorBusca={setValorBusca}/>
                <Header />
                <Timeline playlists={config.playlists} valorDoInput={valorBusca} />
            </div>
        </>
    )
}



export default HomePage

//   function Menu (){
//     return(
//         <div>Menu</div>
//     )
//   }

const StyledHeader = styled.div`

    background-color: ${({ theme }) => theme.backgroundLevel1};

    .imgPerfil{
        width:80px;
        height:80px;
        border-radius:50px;
    }
    .user-info{
        display: flex;
        align-items: center;
        padding: 16px 32px;
        gap: 16px;

    }

    img{
        width: 100%;
        height: 300px;
    }
  `;

  const StyleBanner = styled.div`

    /* background-image: url(${config.bg}); */
    background-image: url(${ ({bg})=> bg });
    height: 230px;
  `;

function Header() {
    return (
        <StyledHeader>
            
            <StyleBanner bg={config.bg}/>
            <section className="user-info">

                <img className="imgPerfil" src={`https://github.com/${config.github}.png`} />

                <div>
                    <h2>{config.name}</h2>

                    <p>{config.job}</p>
                </div>




            </section>

        </StyledHeader>
    )
}

function Timeline({valorDoInput, ...propriedades}) {
    const playlistNames = Object.keys(propriedades.playlists);
    
    return (
        <StyledTimeline>

            
            {playlistNames.map((playlistName) => {

                const videos = propriedades.playlists[playlistName];

                return (
                    <section key={playlistName.length}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video)=>{
                                return(
                                    
                                    video.title.toUpperCase().includes(valorDoInput.toUpperCase())
                                )
                            }).map((video) => {
                                return (
                                    <div key={video.url}>
                                        <a href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                            
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                )


            })}

        </StyledTimeline>

    )
}