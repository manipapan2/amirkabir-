import { useEffect, useContext } from "react";
import "./photos.css"
import { ImageCard, ImageSlide, Model, Zaban } from "../cumponents/cumponents";

export default function Photos(){

    useEffect(() => {
        const imagesm = document.querySelectorAll(".imagesm")
        // const cover = document.querySelectorAll("cover")
      
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

    const nav = document.querySelector("nav")

    nav.style.transition="1s"
    nav.style.transform="translateY(0px)"

    setTimeout(() => {
        nav.style.transition="all 0.3s ease 0s"
    }, "100");
      
    }, [])

    const {zaban, setzaban} = useContext(Zaban)
  const {model, setmodel} = useContext(Model)

    useEffect(() => {
      const farsi = document.getElementById("farsi")
      const rang = document.getElementById("rang")
      const english = document.getElementById("english")
    
      const Farsicmd = () => {
        farsi.style.transition="0.5s"
        farsi.style.color = "black"
        rang.style.transition="0.5s"
        rang.style.margin="0px"
        english.style.transition="0.5s"
        english.style.color="white"
        if(window.innerWidth > 900){
          setmodel(3) 
          // console.log(model)
        }
        else if(window.innerWidth <= 900){
          setmodel(4)
          // console.log(model)
    
        }
        setzaban("farsi")
      }
    
      const Englishcmd = () => {
        farsi.style.color = "white"
        rang.style.marginRight="50%"
        english.style.color="black"
        if(window.innerWidth > 900){
          setmodel(1)
          // console.log(model)
    
        }
        else if(window.innerWidth <= 900){
          setmodel(2)
          // console.log(model)
    
        }
        setzaban("english")
    
      }
    
      const resizemodel = () => {
        if(zaban == "english" && window.innerWidth > 900){
          setmodel(3)
        }
        else if(zaban == "english" && window.innerWidth <= 900){
          setmodel(4)
        }
        else if(zaban == "farsi" && window.innerWidth > 900){
          setmodel(1)
        }
        else if(zaban == "farsi" && window.innerWidth <= 900){
          setmodel(2)
        }
      }
    
      resizemodel();
    
      window.addEventListener("resize", resizemodel)
    
      farsi.addEventListener("click",Farsicmd)
      english.addEventListener("click",Englishcmd)
      
    }, )
    

    return(
        <>
            <div className="container">
        <div className="carousel">
            <ImageSlide aks="/img/amirkabir1.jpg"></ImageSlide>
            <ImageSlide aks="/img/amirkabir2.jpg"></ImageSlide>
            <ImageSlide aks="/img/amirkabir3.jpg"></ImageSlide>
            <ImageSlide aks="/img/amirkabir4.jpg"></ImageSlide>
            <ImageSlide aks="/img/amirkabir5.jpg"></ImageSlide>
            <ImageSlide aks="/img/amirkabir1.jpg"></ImageSlide>
            <ImageSlide aks="/img/amirkabir2.jpg"></ImageSlide>
            <ImageSlide aks="/img/amirkabir3.jpg"></ImageSlide>
            <ImageSlide aks="/img/amirkabir4.jpg"></ImageSlide>
        </div>
    </div>

    <div className="htc"><p>{model == 3 ? "Hover The Slides" : model == 4 ? "Click The Cards" : model == 1 ? "موس را بر روی اسلاید ها ببرید" : model == 2 ? "بر روی کارت ها کلیک کنید" : "ERROR 404"}</p></div>

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