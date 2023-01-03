import imgBanner from "../../public/images/banner.jpg"
import Image from "next/image"

function Banner(){
    return(
        <Image src={imgBanner}/>
    )
}

export default Banner