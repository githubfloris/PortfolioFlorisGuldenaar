function openInfo() {
    document.getElementById("pjctInfo").style.height = "100%";
  }
  
  function closeInfo() {
    document.getElementById("pjctInfo").style.height = "0%";
  }

  
function openImgOverlay() {
    document.getElementById("imgOverlay").style.display = "block";
    setTimeout(function(){document.getElementById("imgOverlay").style.opacity = "100%";}, 1);
  }
  
  function closeImgOverlay() {
    document.getElementById("imgOverlay").style.opacity = "0%";
    setTimeout(function(){document.getElementById("imgOverlay").style.display = "none";}, 300);
  
  }
  
  function selectImage(si) {
      var imgSrc = si.src;
      document.getElementById("imgOverlayImage").src = imgSrc;
  }
  function selectText(text) {
    var titleText = text.getAttribute('Titletext');
    var text = text.getAttribute('text');
    console.log(titleText)
    console.log(text)
  
    document.getElementById("imgOverlayTitle").innerHTML = titleText;
    document.getElementById("imgOverlayText").innerHTML = text;
  
    document.getElementById("imgOverlayTitleMain").innerHTML = titleText;
    document.getElementById("imgOverlayTextMain").innerHTML = text;
  }
  