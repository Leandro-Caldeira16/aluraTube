import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {

    const estilosDaPage = {
        // backgroundColor: "red"
    }

    return (
        <>
            <CSSReset />
            <div style={estilosDaPage}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
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
    img{
        width:80px;
        height:80px;
        border-radius:50px;
    }
    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        padding: 16px 32px;
        gap: 16px;

    }
  `;

function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner"/> */}
            <section className="user-info">

                <img src={`https://github.com/${config.github}.png`} />

                <div>
                    <h2>{config.name}</h2>

                    <p>{config.job}</p>
                </div>




            </section>

        </StyledHeader>
    )
}

function Timeline(propriedades) {
    console.log("dentro", propriedades.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    console.log(playlistNames);



    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {

                const videos = propriedades.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);

                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )


            })}

        </StyledTimeline>

    )
}