        

function openContact(){
    //document.getElementById("aboutmeOverlay").style.borderRight = "10px solid rgb(54, 17, 17)";

    document.getElementById("aboutmeOverlay").style.width = "25vw";
    document.getElementById("main").style.marginLeft = "25vw";

    

    document.getElementById("slideContent1").style.transitionDuration = "1s";
    document.getElementById("slideContent2").style.transitionDuration = "1s";
    document.getElementById("slideContent3").style.transitionDuration = "1s";
    document.getElementById("slideContent4").style.transitionDuration = "1s";


    var slideTimer = setTimeout(function(){document.getElementById("slideContent1").style.marginLeft = "1vw";}, 100);
    var slideTimer = setTimeout(function(){document.getElementById("slideContent2").style.marginLeft = "1vw";}, 300);
    var slideTimer = setTimeout(function(){document.getElementById("slideContent3").style.marginLeft = "1vw";}, 500);
    var slideTimer = setTimeout(function(){document.getElementById("slideContent4").style.marginLeft = "42%";}, 700);

    var slideTimer = setTimeout(function(){document.getElementById("slideContentIcon1").style.transform = "rotate(360deg)";}, 1500);
    var slideTimer = setTimeout(function(){document.getElementById("slideContentIcon1").style.width = "15%";}, 1500);

    var slideTimer = setTimeout(function(){document.getElementById("slideContentIcon2").style.transform = "rotate(360deg)";}, 1700);
    var slideTimer = setTimeout(function(){document.getElementById("slideContentIcon2").style.width = "15%";}, 1700);
}    
function closeContact(){
    document.getElementById("aboutmeOverlay").style.borderRight = "0";

    document.getElementById("aboutmeOverlay").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
 

        document.getElementById("slideContent1").style.marginLeft = "-500vh";
        document.getElementById("slideContent1").style.transitionDuration = "1s";

          document.getElementById("slideContent2").style.marginLeft = "-500vh";
          document.getElementById("slideContent2").style.transitionDuration = "1s";

          document.getElementById("slideContent3").style.marginLeft = "-500vh";
          document.getElementById("slideContent3").style.transitionDuration = "1s"

          document.getElementById("slideContent4").style.marginLeft = "-500vh";
          document.getElementById("slideContent4").style.transitionDuration = "1s"

    document.getElementById("slideContentIcon1").style.transform = "rotate(0deg)";
    document.getElementById("slideContentIcon1").style.width = "2%";

    document.getElementById("slideContentIcon2").style.transform = "rotate(0deg)";
    document.getElementById("slideContentIcon2").style.width = "2%";
}