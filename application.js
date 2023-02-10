
  let hidden = "false";


  const GUI = document.createElement("div");
  GUI.style.position = "absolute";
  GUI.style.top = "0px";
  GUI.style.left = "0px";
  GUI.style.backgroundColor = "darkRed";
  GUI.style.borderRadius = "6px"
  GUI.style.height = "155px";
  GUI.style.width = "160px";
  GUI.style.boxShadow = "0 16px 32px 0 rgba(0,0,0,0.2), 0 12px 40px 0 rgba(0,0,0,0.19)";
  GUI.style.scrollTop = "200px";
  GUI.style.overflowY = "scroll";

  GUI.zIndex = 2147483646;
  document.body.appendChild(GUI);

  function Execute() {
    let pr1 = prompt("Which script would you like to execute?");
    eval(pr1);
    return true;
  }

function addListeners(){
    GUI.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
    
}

function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
} 

function mouseDown(e){
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
  var div = GUI;
  div.style.position = 'absolute';
  div.style.top = e.clientY + 'px';
  div.style.left = e.clientX + 'px';
}

addListeners()

  const ExecuteButton = document.createElement('button');
  ExecuteButton.innerHTML = "Execute Script";
  ExecuteButton.style.zIndex = 2147483647;
  ExecuteButton.style.position = "absolute";
  ExecuteButton.style.top = "45px";
  ExecuteButton.style.left = "5px";
  ExecuteButton.style.display = "inline-block";
  ExecuteButton.style.padding = "10px 20px";
  ExecuteButton.style.backgroundColor = "#ff0000";
  ExecuteButton.style.color = "white";
  ExecuteButton.style.textAlign = "center";
  ExecuteButton.style.textDecoration = "none";
  ExecuteButton.style.borderRadius = "4px";
  ExecuteButton.style.border = "none";
  ExecuteButton.style.fontSize = "10px";
  ExecuteButton.style.cursor = "pointer";
  ExecuteButton.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
  ExecuteButton.style.transition = "all 0.3s ease-in-out";
  ExecuteButton.onmouseover = function(){ 
    ExecuteButton.style.backgroundColor = "#b00000";
  }
  ExecuteButton.onmouseout = function(){ 
    ExecuteButton.style.backgroundColor = "#ff0000";
  }

 
  ExecuteButton.onclick = function() {
    let ExecutionProcess = Execute();
    if (ExecutionProcess) {
      console.log("[RW] The execution process succeeded.")
    }
  }
  GUI.appendChild(ExecuteButton);


  function CheckForHidden() {
    if (hidden == "false") {
      GUI.style.opacity = 1;
    } else {
      GUI.style.opacity = 0;
    }
  }

  const HideShow = document.createElement('button');
  HideShow.innerHTML = "[RW] Hide/Show";
  HideShow.style.zIndex = 2147483647;
  HideShow.style.position = "absolute";
  HideShow.style.top = "10px";
  HideShow.style.left = "5px";
  HideShow.style.display = "inline-block";
  HideShow.style.padding = "10px 20px";
  HideShow.style.backgroundColor = "#ff0000";
  HideShow.style.color = "white";
  HideShow.style.textAlign = "center";
  HideShow.style.textDecoration = "none";
  HideShow.style.borderRadius = "4px";
  HideShow.style.border = "none";
  HideShow.style.fontSize = "10px";
  HideShow.style.cursor = "pointer";
  HideShow.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
  HideShow.style.transition = "all 0.3s ease-in-out";
  HideShow.onmouseover = function(){ 
    HideShow.style.backgroundColor = "#b00000";
  }
  HideShow.onmouseout = function(){ 
    HideShow.style.backgroundColor = "#ff0000";
  }
  HideShow.onclick = function() {
    if (hidden == "false") {
      hidden = "true";
      CheckForHidden();
    } else {
      hidden = "false";
      CheckForHidden();
    }
  }

  GUI.appendChild(HideShow);
