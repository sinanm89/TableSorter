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
