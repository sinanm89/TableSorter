var url = window.location.host;

if (url.indexOf("wiki") != -1) {
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

if (url.indexOf("facebook") != -1) {
  if (document.getElementById("leftCol").style.display != "none"){
    document.getElementById("leftCol").style.display = "none";
    document.getElementById("rightCol").style.display = "none";
    document.getElementById("mainContainer").style.margin = "0 30% 0 30%";
  } else {
    document.getElementById("leftCol").style.display = "block";
    document.getElementById("rightCol").style.display = "block";
    document.getElementById("mainContainer").style.margin = "inherit";
  }
}
