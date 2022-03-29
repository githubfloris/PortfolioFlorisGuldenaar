 //Scroll open About Me
 window.onscroll = function() {scrollFunctions()};

 function scrollFunctions() {
 
 
   if (document.documentElement.scrollTop > 10) {
     
     document.getElementById("parallaxbg").style.filter = "blur(3vh)";
     document.getElementById("parallaxbg").style.opacity = "20%";
 
     document.getElementById("font-H1").style.fontSize = "40pt";
     //document.getElementById("font-H1").style.textShadow = "0 0 5px #FFF, 0px 0px 20px rgba(4,44,255,0.34)";
     document.getElementById("headertext").style.transform = "translate(-10vh, 100vw)";
 
     document.getElementById("headertextH1").style.Top = "0";
     document.getElementById("headertextH1").style.Left = "25%";
 
     document.getElementById("contactButton").style.marginLeft = "0%";
 
 
 
   }else{
     
 
     document.getElementById("parallaxbg").style.filter = "blur(0vh)";
     document.getElementById("parallaxbg").style.opacity = "100%";
 
     document.getElementById("headertext").style.transform = "translate(-50%, -50%)";
     document.getElementById("headertext").style.fontSize = "50px";
 
 
     document.getElementById("headertextH1").style.transform = "translate(-50%, -150%)";
     document.getElementById("font-H1").style.fontSize = "75pt";
     document.getElementById("font-H1").style.textShadow = "0px 0px 5px rgba(0,0,0,0.16)";
 
     document.getElementById("contactButton").style.marginLeft = "200%";
 
     closeContact()
   }
   
 }
 
