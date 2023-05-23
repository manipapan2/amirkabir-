import { Link } from "react-router-dom"
import { useEffect, useState, useRef, } from "react"
import "./cumponents.css"

export default function Navigationbar(){

  const navRef = useRef(null);

  var khatclick = document.getElementById("khatclick");
  var navmobile = document.getElementById("navmobile");
  var khat3 = document.getElementById("khat3");
  var khata = document.getElementById("khata");
  var khatb = document.getElementById("khatb");
  var navmDiv = document.getElementsByClassName("navmDiv")

  const navm = () => {
    if(navmobile.style.height!="100vh"){
      document.querySelector("html").style.overflowY="hidden"
      navmobile.style.height="100vh"
      navmobile.style.paddingBottom = "60px"
      khat3.style.transform="translateY(20px) rotate(45deg)"
      khata.style.opacity="0"
      khatb.style.transform="translateY(20px) rotate(-45deg)"
      // document.querySelector("body").style.position = "fixed";
      // document.querySelector("html").style.overflow="hidden"
      for (const element of navmDiv) {
        element.style.opacity="1"
      }
    }
    else{
      document.querySelector("html").style.overflowY="auto"
      navmobile.style.height="0px"
      navmobile.style.padding="0px"
      // document.querySelector("body").style.position = "absolute";
      khat3.style.transform="translateY(10px) rotate(0deg)"
      khatb.style.transform="translateY(30px) rotate(0deg)"
      khata.style.opacity="1"
      for (const element of navmDiv) {
        element.style.opacity="0"
      }
    }
  }

  useEffect(() => {

    const nav = navRef.current
    

    const navRadius = () => {
      if(window.innerWidth >= 900){
        if(window.scrollY > 20){
          nav.style.borderTopRightRadius="25px"
          nav.style.borderBottomRightRadius="25px"
          nav.style.borderTopRightRadius="0px"
        }
    
        if(window.scrollY < 20){
          nav.style.borderTopRightRadius="25px"
          nav.style.borderBottomLeftRadius="25px"
          nav.style.borderBottomRightRadius="0"
        }
      }
    
      if(window.innerWidth <= 900){
        nav.style.borderTopRightRadius="0px"
        nav.style.borderBottomLeftRadius="0px"
        nav.style.borderBottomRightRadius="0px"
      }
    }


    window.addEventListener("scroll",navRadius)
    window.addEventListener("resize",navRadius)


    var khatclick = document.getElementById("khatclick");
    var navmobile = document.getElementById("navmobile");
    var khat3 = document.getElementById("khat3");
    var khata = document.getElementById("khata");
    var khatb = document.getElementById("khatb");
    var navmDiv = document.getElementsByClassName("navmDiv")

    const navm = () => {
      if(navmobile.style.height!="100vh"){
        document.querySelector("html").style.overflowY="hidden"
        navmobile.style.height="100vh"
        navmobile.style.paddingBottom = "60px"
        khat3.style.transform="translateY(20px) rotate(45deg)"
        khata.style.opacity="0"
        khatb.style.transform="translateY(20px) rotate(-45deg)"
        // document.querySelector("body").style.position = "fixed";
        // document.querySelector("html").style.overflow="hidden"
        for (const element of navmDiv) {
          element.style.opacity="1"
        }
      }
      else{
        document.querySelector("html").style.overflowY="auto"
        navmobile.style.height="0px"
        navmobile.style.padding="0px"
        // document.querySelector("body").style.position = "absolute";
        khat3.style.transform="translateY(10px) rotate(0deg)"
        khatb.style.transform="translateY(30px) rotate(0deg)"
        khata.style.opacity="1"
        for (const element of navmDiv) {
          element.style.opacity="0"
        }
      }
    }
    khatclick.addEventListener("click",navm);

    // const navmDiv = document.querySelectorAll("navmDiv")

    // const Factory = () => {
    //   document.querySelector("nav").style.transform="translateY(-70px)"
    // }


  });

  
  
  return(
    <>
    <nav ref={navRef}>
      <div className="your-logo" id="marginezafe"></div>
      <div className="navDiv"><p>Coming Soon...</p></div>
      <div className="navDiv"><p>Coming Soon...</p></div>
      <div className="navDiv"><Link to="/photos">Photos</Link></div>
      <div className="navDiv"><Link to="/">Home</Link></div>
      <div className="khatd" id="khatclick">
        <div className="khat3" id="khat3"></div>
        <div className="khata" id="khata"></div>
        <div className="khatb" id="khatb"></div>
      </div>
    </nav>

    <div className="navmobile" id="navmobile" title="menu">
            <Link onClick={navm} to="/" className="navmDiv siahk"><p style={{color: "black"}} id="home2">Home</p></Link>
            <Link onClick={navm} to="/photos" className="navmDiv sefidk"><p style={{color: "black"}} id="photos2">Photos</p></Link>
            <Link to="" className="navmDiv siahk"><p style={{color: "black"}} id="cms3">...Coming Soon</p></Link>
            <Link to="" className="navmDiv sefidk"><p style={{color: "black"}} id="cms4">...Coming Soon</p></Link>
    </div>
    </>
  )
}


export function Card(props) {
  const [coverVisible, setCoverVisible] = useState(true);
  const [becharkhe, setbecharkhe] = useState(true);

  // Create refs for the elements
  const tozih1Ref = useRef(null);
  const dokmeRef = useRef(null);
  const neveshte1DivRef = useRef(null);
  const neveshte2DivRef = useRef(null);
  const p1Ref = useRef(null);
  const pupRef = useRef(null);

  // const tozihEnter = () => {
  //   setCoverVisible(false);
  // };

  // const tozihLeave = () => {
  //   setCoverVisible(true);
  // };

  const tozihEnterAndLeave = () => {
    setCoverVisible((state)=>!state);
  }

  useEffect(() => {
    // Use the refs to get the current DOM elements
    const tozih1 = tozih1Ref.current;
    const dokme = dokmeRef.current;
    const neveshte1Div = neveshte1DivRef.current;
    const neveshte2Div = neveshte2DivRef.current;
    // const p1 = p1Ref.current;
    const pup = pupRef.current;

    if (becharkhe) {
      tozih1.classList.remove("t1a");
      tozih1.classList.add("tozih");
      neveshte1Div.style.transform = "rotateY(0deg)";
      neveshte2Div.style.transform = "rotateY(180deg)";
      dokme.style.transition = "1000ms";
      dokme.style.transform = "rotateY(0deg)";
      setTimeout(() => {
        neveshte1Div.classList.remove("pia");
        neveshte1Div.classList.add("pi");
      }, "1");
      setTimeout(() => {
        dokme.style.transition = "0.3s";
      }, "1");
    } else {
      dokme.style.transition = "1s";
      setTimeout(() => {
        dokme.style.transition = "0.3s";
      }, 1);
      tozih1.classList.remove("tozih");
      tozih1.classList.add("t1a");
      neveshte1Div.classList.remove("pi");
      neveshte1Div.classList.add("pia");
      // p1.style.borderRadius = "15px";
      neveshte1Div.style.transform = "rotateY(-180deg)";
      neveshte2Div.style.transform = "rotateY(0deg)";
      dokme.style.transform = "rotateY(-180deg)";
      pup.style.borderRadius = "15px";
      pup.style.fontSize = "17px"
      tozih1.classList.remove("tozih");
      tozih1.classList.add("t1a");
    }
  }, [becharkhe]);

  return (
    <div className="tozih marginTozih" id="tozih" onMouseEnter={tozihEnterAndLeave} onMouseLeave={tozihEnterAndLeave} ref={tozih1Ref} style={{marginBottom: `${props.marginBottom}`}}>
      <div className="neveshte1Div pi4" id="neveshte1Div" style={{ backgroundImage: `url(/public/img/${props.aks})` }} ref={neveshte1DivRef}><p className="p1" id="p1" ref={p1Ref}>{props.neveshte1}</p></div>
      <div className="dokme" id="dokme" onClick={() => { setbecharkhe((state)=>!state) }} ref={dokmeRef}>Show More</div>
      <div className="neveshte2Div" id="neveshte2Div" ref={neveshte2DivRef}><p className="pup" id="pup" ref={pupRef}>{props.neveshte2}</p><button className="dokmekam" onClick={() => { setbecharkhe((state)=>!state)}}>Back</button></div>
      <div className="cover" style={{ display: coverVisible ? 'flex' : 'none' }}></div>
    </div>
  )
}


export function Footer(){
  return(
    <footer>
            {/* <div className="createdby"> */}
                 {/* <ul>
                    <ul>
                        <li style={{marginBottom: "10px",direction: "rtl"}}>Developer</li>
                        <li className="kochikf"><Link to="https://github.com/manipapan2" rel="noopener noreferrer" style="direction: ltr;">manipapan2</Link></li>
                        <div className="links" id="links">
                            <i className="fa fa-twitter" id="twitter"></i>
                            <i className="fa fa-instagram" id="instagram"></i>
                            <Link to="https://github.com/manipapan2" rel="noopener noreferrer"><i className="fa fa-github" id="github"></i></Link>
                            <i className="fa fa-youtube-play" id="youtube"></i>
                        </div>
                    </ul>
                </ul>  */}
            {/* </div> */}
            <div className="createdby">
                <ul>
                    <li style={{marginBottom: "10px"}}>Sources</li>
                    <li className="kochikf" style={{marginBottom: "10px"}}><Link id="a1" to="https://fa.wikipedia.org/wiki/%D8%A7%D9%85%DB%8C%D8%B1%DA%A9%D8%A8%DB%8C%D8%B1">wikipedia</Link></li>
                    <li className="kochikf"><Link id="a2" to="https://fa.wikishia.net/view/%D8%A7%D9%85%DB%8C%D8%B1%DA%A9%D8%A8%DB%8C%D8%B1">wikishia</Link></li>
                </ul>
            </div>
            <div className="createdby">
                <ul>
                    <li style={{marginBottom: "10px"}} id="s1">Source Code</li>
                    <li className="kochikf"><Link id="a3" to="https://github.com/manipapan2/vaznc" rel="noopener noreferrer">Amir Kabir's Source Code</Link></li>
                </ul>
            </div>
            <div className="createdby">
                <ul>
                    <ul>
                        <li style={{marginBottom: "10px",direction: "rtl"}} id="d1">Developer</li>
                        <li className="kochikf"><Link to="https://github.com/manipapan2" rel="noopener noreferrer" style={{direction: "ltr"}} id="d2">manipapan2</Link></li>
                        <div className="links" id="links">
                            <i className="fa fa-twitter" id="twitter" title="twitter"></i>
                            <i className="fa fa-instagram" id="instagram" title="instagram"></i>
                            <Link to="https://github.com/manipapan2" rel="noopener noreferrer"><i className="fa fa-github" id="github" title="github"></i></Link>
                            <i className="fa fa-youtube-play" id="youtube" title="youtube"></i>
                        </div>
                    </ul>
                </ul>
            </div>

            <div className="copyright"><p>© Copyright By manipapan2</p></div>
            

        </footer>
  )
}


export function ImageCard(props){
  const [coverVisible, setCoverVisible] = useState(true);
  // const fuss = useContext(null)

  const cardEnterAndLeave = () => {
    setCoverVisible((state)=>!state);
  }

  return(
    <div className={"imagesm"} style={{backgroundImage: `url(${props.background})`}}  onMouseEnter={cardEnterAndLeave} onMouseLeave={cardEnterAndLeave}><button><a href={props.aks} className="a" download>Click To Download</a></button><div className="nam" style={{display: coverVisible ? "flex" : "none"}}></div></div>
  )
}

export function ImageSlide(props){

  return(
    <div className="images"><div className="download"><button><a href={props.aks} className="a" download>Click To Download</a></button></div></div>
  )
}

export let model = "";
export const setmodel = (value) => {
  model = value;
};
export let zaban = "";
export const setzaban = (value) => {
  zaban = value;
};


// const FuzzContext = React.createContext();

export function Languageselector(){
  // var gl = 1
  // const fuzz = useContext(FuzzContext);
  useEffect(() => {
    

  const farsi = document.getElementById("farsi")
  const rang = document.getElementById("rang")
  const english = document.getElementById("english")
  // 1 = farsi - 1000
  // 2 = farsi - 900
  // 3 = english - 1000
  // 4 = english - 900
  // const aslkar = () => {
    
  // }

  const Farsicmd = () => {
    farsi.style.transition="0.5s"
    farsi.style.color = "black"
    rang.style.transition="0.5s"
    rang.style.margin="0px"
    english.style.transition="0.5s"
    english.style.color="white"
    if(window.innerWidth > 900){
      setmodel(3)
      console.log(model)
    }
    else if(window.innerWidth <= 900){
      setmodel(4)
      console.log(model)

    }
    setzaban("farsi")
  }

  const Englishcmd = () => {
    farsi.style.color = "white"
    rang.style.marginRight="50%"
    english.style.color="black"
    if(window.innerWidth > 900){
      setmodel(1)
      console.log(model)

    }
    else if(window.innerWidth <= 900){
      setmodel(2)
      console.log(model)

    }
    setzaban("english")

  }

  const resizezaban = () => {
    if(window.getComputedStyle(rang).marginRight != "0px"){
      setzaban("english")
    }
    else if(window.getComputedStyle(rang).marginRight == "0px"){
      setzaban("farsi")
    }
  }

  resizezaban();

  window.addEventListener("resize", resizezaban)

  farsi.addEventListener("click",Farsicmd)
  english.addEventListener("click",Englishcmd)
  

  }, [])

  
  return(
    <div className="language-selector">
        <div className="farsi" id="farsi"><p>فارسی</p></div>
        <div className="english" id="english"><p>English</p></div>
        <div className="rang" id="rang"></div>
    </div>
  )
}