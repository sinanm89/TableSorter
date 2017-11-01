var url = window.location.host;

if (url.indexOf("wiki") != -1) {
  chrome.storage.sync.get("flip_estate_wiki", toggle_wikipedia);
}

if (url.indexOf("reddit") != -1) {
  chrome.storage.sync.get("flip_estate_reddit", toggle_reddit);
}

if (url.indexOf("youtube") != -1) {
  // no need for a mutation observer because this mutation is called by user
  chrome.storage.sync.get("flip_estate_youtube", toggle_youtube);
}

if (url.indexOf("facebook") != -1) {
  chrome.storage.sync.get("flip_estate_facebook", toggle_facebook);
}

function toggle_facebook(value) {
  value = !value.flip_estate_facebook;
  chrome.storage.sync.set({"flip_estate_facebook": value});
  if (value){
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
  value = !value.flip_estate_reddit;
  chrome.storage.sync.set({"flip_estate_reddit": value});
  var side = document.getElementsByClassName("side")[0];
  var content = document.getElementById("siteTable").parentElement;
  if (!value){
    side.style.display = "none";
    content.style.width = "100vw";
  } else {
    side.style.display = "";
    content.style.width = "inherit";
  }
}

function toggle_youtube(value) {
  value = !value.flip_estate_youtube;
  chrome.storage.sync.set({"flip_estate_youtube": value});
  var content = document.getElementById("masthead-container");
  var video = document.getElementById("page-manager");
  if (!value){
    content.style.display = "none";
    video.style.marginTop = "0px";
  } else {
    content.style.display = "";
    video.style.marginTop = "56px";
  }
  console.log(value);
}

function toggle_wikipedia(value) {
  value = !value.flip_estate_wiki;
  chrome.storage.sync.set({"flip_estate_wiki": value});
  if (!value) {
      document.getElementById("content").style.marginLeft = "176px";
    }
    else {
      document.getElementById("content").style.marginLeft = "0px";
    }
    if (!value) {
      document.getElementById("mw-panel").style.display = "";
    } else {
      document.getElementById("mw-panel").style.display = "none";
    }
}

