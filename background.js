// // var CSS='body{background-color: red;-webkit-animation-name: example; -webkit-animation-duration: 20s; animation-name: example;animation-duration: 10s;}@-webkit-keyframes example {0%   {background-color: violet;}20%  {background-color: indigo;}40% {background-color: blue;}60% {background-color: green;}80% {background-color: yellow;}90%{background-color: orange;}100% {background-color: red;}}@keyframes example {0%   {background-color: violet;}20%  {background-color: indigo;}40% {background-color: blue;}60% {background-color: green;}80% {background-color: yellow;}90%{background-color: orange;}100% {background-color: red;}}}'
var CSS='body * {background:black !important; color:white !important;}'
var enable=true;
//method to enable nightmode
function enableNightMode() {
	browser.tabs.insertCSS({code: CSS});
	enable=false;
}

//method to disable nightmode
function disableNightMode(){
	browser.tabs.removeCSS({code: CSS});
	enable=true;
}

//method to toggle mode
function toggleNightMode(tab){
	// console.log(tab.url)
	if(tab.url){
		if(enable){
			enableNightMode();
		}else{
			disableNightMode();
		}
	}
}

//when the browser tab is refreshed
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
	if(tab.url){
		disableNightMode();
	}
});

//event handler when you click the button in the toolbar
browser.browserAction.onClicked.addListener(toggleNightMode);
// document.background="red";