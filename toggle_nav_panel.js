if (document.title.indexOf("Wiki") != -1) {
    if (document.getElementById("content").style.marginLeft === "0px") {
      document.getElementById("content").style.marginLeft = "176px";
    }
    else {
      document.getElementById("content").style.marginLeft = "0px";
    }
    if (document.getElementById("mw-panel").style.visibility === "hidden") {

      document.getElementById("mw-panel").style.visibility = "visible";
    } else {
      document.getElementById("mw-panel").style.visibility = "hidden";
    }
}
if (document.title.indexOf("reddit") != -1) {
  display_setting = document.getElementsByClassName("side")[0].style.display;
  if (display_setting != "none"){
    display_setting = document.getElementsByClassName("side")[0].style.display = "none";
  } else {
    display_setting = document.getElementsByClassName("side")[0].style.display = "block";
  }
}
// deprecated but here for old theme usability
if (document.title.indexOf("YouTube") != -1) {
  if (document.getElementById("yt-masthead-container").style.display != "none"){
    document.getElementById("yt-masthead-container").style.display = "none";
    document.getElementById("masthead-positioner-height-offset").style.display = "none";
  } else {
    document.getElementById("yt-masthead-container").style.display = "block";
    document.getElementById("masthead-positioner-height-offset").style.display = "block";
  }
}
