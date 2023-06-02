import { useEffect, useContext } from "react"
import { Card, Model, Zaban} from "../cumponents/cumponents"
// import AutoTyping from "/AutoTyping.js-master/dist/AutoTyping.min.js"
import AutoTyping from "./AutoTyping.js-master/"
// import AutoTyping from '../dist/AutoTyping.min.js'
// import "/AutoTyping.js-master/dist/AutoTyping.min.js"
import "./home.css"
export default function Home(){


  setTimeout(() => {
  var navmDiv = document.getElementsByClassName("navmDiv")
  var navmobile = document.getElementById("navmobile");
  navmobile.style.transition="0.5s"
      for (const element of navmDiv) {
        element.style.transition="0.5s"
      }
  }, "100");
  
    useEffect(() => {

      const dayereanim1 = document.getElementById("dayereanim1")
      const dayereanim2 = document.getElementById("dayereanim2")
      const loading = document.getElementById("loading")
      const cards = document.querySelectorAll(".tozih")
      const hoverme = document.querySelectorAll(".hoverme")
  //     var navmDiv = document.getElementsByClassName("navmDiv")
  // var navmobile = document.getElementById("navmobile");

  // navmobile.style.transition="0.5s"
  //       for (const element of navmDiv) {
  //         element.style.transition="0.5s"
  //       }


      window.scrollTo({ top: 0, behavior: "smooth" });
      document.querySelector("html").style.overflowY="hidden"
      document.querySelector("html").style.overflowX="hidden"
      setTimeout(() => {
        document.querySelector("html").style.position="fixed"
      }, "1000");

      const dd = () => {
        dayereanim1.classList.remove("dayereanim1");
        dayereanim2.classList.add("dayereanim2");
        setTimeout(ddd, 1000);
      }
      
      const ddd = () => {
        dayereanim1.classList.add("dayereanim1");
        dayereanim2.classList.remove("dayereanim2");
        setTimeout(dd, 1000);
      }

      dd();

      setTimeout(() => {
        loading.style.display = "none";
        const observerr = new IntersectionObserver((entries)=>{
          entries.forEach((entries)=>{
            if(entries.isIntersecting){
              entries.target.style.opacity="1"
            }
          })
        })

        cards.forEach((el) => {
          observerr.observe(el)
        });

        hoverme.forEach((el) => {
          observerr.observe(el)
        });
      }, 3000);


      const gradientan = document.getElementById("gradientan")
      const about = document.getElementById("about")
      const photoabout = document.getElementById("photoabout")
      const nav = document.querySelector("nav")
      const Language = document.querySelector(".language-selector")
      
      gradientan.style.transform=`translateX(${window.innerWidth*-1}px)`
      about.style.transform=`translateX(${window.innerWidth*2}px)`

      nav.style.transform="translateY(-70px)"
      Language.style.opacity="0"

      setTimeout(() => {
        gradientan.style.transition="2s ease"
        about.style.transition="2s ease"
        gradientan.style.transform="translateX(0)";
        about.style.transform="translateX(0)";
        document.querySelector("html").style.overflowY="auto"
        document.querySelector("html").style.position="absolute"
        nav.style.transition="1s"
        nav.style.transform="translateY(0px)"
        Language.style.opacity="1"
      }, "3001");
      setTimeout(() => {
        gradientan.style.transition="0s"
        about.style.transition="0s"
        nav.style.transition="all 0.3s ease 0s"
      }, "3100");



      setTimeout(() => {
        photoabout.style.outlineOffset="5px"
        const myText = new AutoTyping({
          id: "types",
    
          typeText: ["میرزا محمدتقی‌خان فراهانی", "امیر کبیر"],
    
          // typeSpeed:20,
        }).init();
        document.querySelector(".types span:nth-child(1)").style.color = "white";
        typing()
        typeWriter()
      }, "5000");



      var text =
      "میرزا محمد تقی‌خان فراهانی (۱۲۲۲-۱۲۶۸ق) (۱۱۸۵-۱۲۳۰ش) مشهور به امیرکبیر، صدراعظم‌ ایران در دوره ناصرالدین شاه قاجار. وی در دوره صدارت سه سال و سه ماه (۳۹ ماهه) خود، اصلاحاتی را در زمینه‌های آموزشی، اجتماعی و سیاسی ایران آغاز کرد. امیرکبیر دارُالفُنون را بنیان نهاد، مسجد و مدرسه دینی ساخت، بست‌نشینی در بیوت علما و تعزیه‌خوانی را محدود و شورش بابی‌ها را سرکوب کرد. او با دسیسه اطرافیان شاه از مقام خود برکنار و به کاشان تبعید شد و به دستور شاه به قتل رسید. قبر وی در حرم امام حسین(ع) قرار دارد.";

      var i = 0;
      var speed = 20;
      const typeWriter = () => {
        if (i < text.length) {
          document.getElementById("boro").innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
          donetype();
        }
      }


      const typing = () => {
        document.querySelector(".pos").setAttribute("id", "pasl");
        const myText = new AutoTyping({
          id: "pasl",
    
          typeText: ["asd", "salam salam"],
    
          typeSpeed: 20,
        }).stop();
    
        setTimeout(() => {
          document.querySelector(".pos").removeAttribute("id");
        }, 1000);
      }

      const donetype = () => {
        if (document.querySelector(".boro").innerHTML == text) {
          setTimeout(() => {
            var second = document.querySelector(".matn span:nth-child(3)");
            second.style.display = "none";
          }, 1000);
        }
      }
    },[])

    // const cur = document.getElementById("cur")


    // var text =
    //   "میرزا محمد تقی‌خان فراهانی (۱۲۲۲-۱۲۶۸ق) (۱۱۸۵-۱۲۳۰ش) مشهور به امیرکبیر، صدراعظم‌ ایران در دوره ناصرالدین شاه قاجار. وی در دوره صدارت سه سال و سه ماه (۳۹ ماهه) خود، اصلاحاتی را در زمینه‌های آموزشی، اجتماعی و سیاسی ایران آغاز کرد. امیرکبیر دارُالفُنون را بنیان نهاد، مسجد و مدرسه دینی ساخت، بست‌نشینی در بیوت علما و تعزیه‌خوانی را محدود و شورش بابی‌ها را سرکوب کرد. او با دسیسه اطرافیان شاه از مقام خود برکنار و به کاشان تبعید شد و به دستور شاه به قتل رسید. قبر وی در حرم امام حسین(ع) قرار دارد.";

    //   var i = 0;
    //   var speed = 20;
    // const Cure = () =>{
    //   if (i < text.length) {
    //     document.getElementById("boro").innerHTML += text.charAt(i);
    //     i++;
    //     setTimeout(Cure, speed);
    //   }
    // }

    // Cure();

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
          setmodel(2) 
        }
        else if(window.innerWidth <= 900){
          setmodel(1)
        }
        setzaban("farsi")
      }
    
      const Englishcmd = () => {
        farsi.style.color = "white"
        rang.style.marginRight="50%"
        english.style.color="black"
        if(window.innerWidth > 900){
          setmodel(3)
        }
        else if(window.innerWidth <= 900){
          setmodel(4)
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
        <div className="aslflow">
            <div className="gradientan" id="gradientan">
                <div className="about" id="about">
                    <div className="types"><p id="types" style={{direction: "rtl"}}></p></div>
                    <div className="photo-about" id="photoabout"></div>
                    <div className="matn"><p ><span  className="pos" ><span className="boro" id="boro"></span><span></span></span></p></div> 
                </div>
            </div>


            <div className="cartdiv">
                <div className="moratab">
                    <div className="hoverme"><p>{model == 3 ? "Hover The Cards" : model == 4 ? "Click The Cards" : model == 1 ? "موس را بر روی کارت ها ببرید" : model == 2 ? "بر روی کارت ها کلیک کنید" : "ERROR 404"}</p></div>
                    <Card class="card1" neveshte1="روایت‌ها آمده است که روزی قائم مقام از فرزندان خود سوال درسی می‌پرسد؛ اما هیچ‌ یک موفق به پاسخگویی نمی‌شوند. امیرکبیر جواب سوال را می‌دانست و به آن پاسخ می‌دهد؛ پس از این اتفاق قائم مقام به او انعامی می‌دهد." neveshte2="اما او قبول نمی‌کند و در عوض از قائم مقام می‌خواهد تا به او اجازه دهد به‌همراه فرزندان او از کلاس‌ها بهره ببرد. محمدتقی شیوه‌های منشی‌گری، نامه‌نگاری و صدور احکام دیوانی را از قائم مقام یاد گرفت تا اینکه قائم مقام پس از مدتی تحریر و نگارش پاره‌ای از احکام و نوشته‌ها را بر عهده محمدتقی‌ خان گذاشت."></Card>
                    <Card class="card2" marginBottom="0px" neveshte1="امیرکبیر پس از حدود سه سال صدارت با دسیسه درباریان و مادر شاه از سمت خود برکنار و به کاشان تبعید شد. او حدود ۴۰ روز بعد در باغ فین کاشان توسط علی خان حاجب‌الدوله به قتل رسید. روز ۲۰ دی، سالروز درگذشت امیرکبیر در تقویم «روز ملی توسعه» نام‌گذاری شده است." neveshte2="محمدتقی در دوره کودکی با فرزندان خردسال قائم مقام اول همبازی بود. مورخان نقل کرده‌اند که او مسئولیت انتقال ظروف غذا به حجره درس فرزندان قائم مقام را به عهده داشت و همین امر سبب می‌شد پس از بردن ظرف‌های غذا پشت در حجره مانده و به درس‌ها گوش فرا دهد."></Card>
                </div>
                <div className="moratab moratab2">
                    <Card class="card3" neveshte1="امیرکبیر در دوره فعالیت خود همچنین تلاش‌های ارزشمندی برای رسیدگی به وضعیت مالیه انجام داد. او با رشوه خواری به مبارزه پرداخت و دریافتی‌های بی حساب از دستگاه‌های دولتی را قطع کرد." neveshte2="وی همچنین حقوق شاه را به دو هزار تومان کاهش داد و وضع مالیه و قوانین مالیاتی را به‌طور کلی سر و سامان داد. امیرکبیر با تلاش‌هایی که در این زمینه انجام داد موفق شد رقم خالص درآمد کشور را در آخرین سال صدارت خود به سه میلیون تومان برساند."></Card>
                    <Card class="card4" neveshte1="امیرکبیر اصلاحات بسیاری در دوره کوتاه صدارت خود انجام داد. از آن‌جایی که او عناوین و القاب پیش از اسم افراد را موجب به وجود آمدن زیان‌های اجتماعی می‌دانست، برای نام‌گذاری افراد صاحب منصب به‌عنوان «جناب» اکتفا می‌کرد. امیرکبیر اصلاحات اجتماعی زیادی نیز انجام داد که در آن دوران موجب بهبود وضع اجتماعی ایران شد." neveshte2="در آن زمان که رسومی از جمله هرزگی و قمه‌کشی در ایران رواج داشت، باعث می‌شد که زنان و کودکان پس از غروب جرئت خروج از خانه را نداشته باشند؛ اما امیرکبیر دستور داد تا این رسوم منسوخ شوند و همچنین حمل اسلحه و سلاح گرم را ممنوع اعلام کرد."></Card>
                </div>
            </div>

        <div className="loading" id="loading">
            <div className="dayere dayereanim1" id="dayereanim1"></div>
            <div className="dayere"></div>
            <div className="dayere"></div>
            <div className="dayere"></div>
            <div className="dayere" id="dayereanim2"></div>
        </div>
      </div>  
        </>
    )
}