import { useEffect } from "react";
import "./photos.css"
import { ImageCard } from "../cumponents/cumponents";

export default function Photos(){

    useEffect(() => {
        const imagesm = document.querySelectorAll(".imagesm")
        const cover = document.querySelectorAll("cover")
      
    setTimeout(() => {
        const observerr = new IntersectionObserver((entries)=>{
            entries.forEach((entries)=>{
              if(entries.isIntersecting){
                entries.target.style.opacity="1"
              }
            })
          })

        imagesm.forEach((el) => {
            observerr.observe(el)
          });
    }, "1");
      
    }, [])

    

    return(
        <>
            <div className="container">
        <div className="carousel">
            <div className="images"><div className="download"><button><a href={"/img/amirkabir1.jpg"} className="a" download>Click To Download</a></button></div></div>
            <div className="images"><div className="download"><button><a href={"/img/amirkabir2.jpg"} className="a" download>Click To Download</a></button></div></div>
            <div className="images"><div className="download"><button><a href={"/img/amirkabir3.jpg"} className="a" download>Click To Download</a></button></div></div>
            <div className="images"><div className="download"><button><a href={"/img/amirkabir4.jpg"} className="a" download>Click To Download</a></button></div></div>
            <div className="images"><div className="download"><button><a href={"/img/amirkabir5.jpg"} className="a" download>Click To Download</a></button></div></div>
            <div className="images"><div className="download"><button><a href={"/img/amirkabir1.jpg"} className="a" download>Click To Download</a></button></div></div>
            <div className="images"><div className="download"><button><a href={"/img/amirkabir2.jpg"} className="a" download>Click To Download</a></button></div></div>
            <div className="images"><div className="download"><button><a href={"/img/amirkabir3.jpg"} className="a" download>Click To Download</a></button></div></div>
            <div className="images"><div className="download"><button><a href={"/img/amirkabir4.jpg"} className="a" download>Click To Download</a></button></div></div>
        </div>
    </div>

    <div className="htc"><p>Hover The Cards!</p></div>

    <div className="containerm">
        <div className="negah">
            {/* <div className="imagesm imagesm1" onMouseEnter={tozihEnter} onMouseLeave={tozihLeave} id="imagesm1"><button><a href={"/img/amirkabir1.jpg"} className="a" download>Click To Download</a></button><div className="nam" id="nam1"></div></div> */}
            {/* <div className="imagesm imagesm2"id="imagesm2"><button><a href={"/img/amirkabir2.jpg"} className="a" download>Click To Download</a></button><div className="nam" id="nam2"></div></div> */}
            <ImageCard aks="/img/amirkabir1.jpg" background="/img/amirkabir1.jpg"></ImageCard>
            <ImageCard aks="/img/amirkabir2.jpg" background="/img/amirkabir2.jpg"></ImageCard>
        </div>

        <div className="negah">
            <ImageCard aks="/img/amirkabir3.jpg" background="/img/amirkabir3.jpg"></ImageCard>
            <ImageCard aks="/img/amirkabir4.jpg" background="/img/amirkabir4.jpg"></ImageCard>
        </div>

        <div className="negah">
            <ImageCard aks="/img/amirkabir5.jpg" background="/img/amirkabir5.jpg"></ImageCard>
            <ImageCard aks="/img/amirkabir1.jpg" background="/img/amirkabir1.jpg"></ImageCard>
        </div>
    </div>
        </>
    )
}