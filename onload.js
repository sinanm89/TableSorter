// Run script at the end of page load/refresh.
// window.addEventListener ("load", function(){


console.log('LOADED');
var url = window.location.host;
if (url.indexOf("wiki") != -1) {
    chrome.storage.sync.get("flip_estate_wiki", toggle_wikipedia);
}

if (url.indexOf("reddit") != -1) {
    chrome.storage.sync.get("flip_estate_reddit", toggle_reddit);
}

if (url.indexOf("youtube") != -1) {
    var observer = new MutationObserver(function (m) {
        chrome.storage.sync.get("flip_estate_youtube", toggle_youtube);
    });
    // all the childs have to be loaded as well...
    observer.observe(document.body, {childList: true});
}

if (url.indexOf("facebook") != -1) {
    chrome.storage.sync.get("flip_estate_facebook", toggle_facebook);
}

function toggle_facebook(value) {
  if (!value.flip_estate_facebook){
    document.getElementById("leftCol").style.display = "none";
    document.getElementById("rightCol").style.display = "none";
    document.getElementById("mainContainer").style.margin = "0 30% 0 30%";
  } else {
    document.getElementById("leftCol").style.display = "";
    document.getElementById("rightCol").style.display = "";
    document.getElementById("mainContainer").style.margin = "inherit";
  }
}

function toggle_reddit(value) {
  var side = document.getElementsByClassName("side")[0];
  var content = document.getElementById("siteTable").parentElement;
  if (!value.flip_estate_reddit){
    side.style.display = "none";
    content.style.width = "100vw";
  } else {
    side.style.display = "";
    content.style.width = "inherit";
  }
}

function toggle_youtube(value) {
    console.log(value);
  var content = document.getElementById("masthead-container");
  var video = document.getElementById("page-manager");
  if (!value.flip_estate_youtube){
    content.style.display = "none";
    video.style.marginTop = "0px";
  } else {
    content.style.display = "";
    video.style.marginTop = "56px";
  }
}

function toggle_wikipedia(value) {
    console.log("the current wiki value is " + value);
  if (!value.flip_estate_wiki) {
      document.getElementById("content").style.marginLeft = "176px";
    }
    else {
      document.getElementById("content").style.marginLeft = "0px";
    }
    if (!value.flip_estate_wiki) {
      document.getElementById("mw-panel").style.display = "";
    } else {
      document.getElementById("mw-panel").style.display = "none";
    }
}

// }, false);
