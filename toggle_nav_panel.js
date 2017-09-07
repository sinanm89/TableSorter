var url = window.location.host;

if (url.indexOf("Wiki") != -1) {
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
if (url.indexOf("reddit") != -1) {
  var side = document.getElementsByClassName("side")[0];
  var content = document.getElementById("siteTable").parentElement;
  if (side.style.display != "none"){
    side.style.display = "none";
    content.style.width = "100vw";
  } else {
    side.style.display = "block";
    content.style.width = "inherit";
  }
}
// deprecated but here for old theme usability
if (url.indexOf("YouTube") != -1) {
  if (document.getElementById("yt-masthead-container").style.display != "none"){
    document.getElementById("yt-masthead-container").style.display = "none";
    document.getElementById("masthead-positioner-height-offset").style.display = "none";
  } else {
    document.getElementById("yt-masthead-container").style.display = "block";
    document.getElementById("masthead-positioner-height-offset").style.display = "block";
  }
}
