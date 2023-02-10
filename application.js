
  let hidden = "false";

  const data = {
    ["Logs"]: {
      ["ScriptExecutionLogs"]: {},
      ["ErrorLogs"]: {},
      ["EventLogs"]: {},
    }
  }


  const GUI = document.createElement("div");
  GUI.style.position = "absolute";
  GUI.style.top = "0px";
  GUI.style.left = "0px";
  GUI.style.backgroundColor = "darkRed";
  GUI.style.borderRadius = "6px"
  GUI.style.height = "155px";
  GUI.style.width = "160px";
  GUI.style.boxShadow = "0 16px 32px 0 rgba(0,0,0,0.2), 0 12px 40px 0 rgba(0,0,0,0.19)";
  GUI.scrollTop = "200px";
  GUI.overflowY = "scroll";


  GUI.style.zIndex = 2147483646;
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
  ExecuteButton.style.top = "175px";
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

  //  ExploreButton.style.top = "35px";
  //  ExploreButton.style.left = "5px";
  const ExploreButton = document.createElement('button');
  ExploreButton.innerHTML = "Explore Global Scripts";
  ExploreButton.style.zIndex = 2147483647;
  ExploreButton.style.position = "absolute";
  ExploreButton.style.top = "45px";
  ExploreButton.style.left = "5px";
  ExploreButton.style.display = "inline-block";
  ExploreButton.style.padding = "10px 20px";
  ExploreButton.style.backgroundColor = "#ff0000";
  ExploreButton.style.color = "white";
  ExploreButton.style.textAlign = "center";
  ExploreButton.style.textDecoration = "none";
  ExploreButton.style.borderRadius = "4px";
  ExploreButton.style.border = "none";
  ExploreButton.style.fontSize = "10px";
  ExploreButton.style.cursor = "pointer";
  ExploreButton.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
  ExploreButton.style.transition = "all 0.3s ease-in-out";
  ExploreButton.onmouseover = function(){ 
    ExploreButton.style.backgroundColor = "#b00000";
  }
  ExploreButton.onmouseout = function(){ 
    ExploreButton.style.backgroundColor = "#ff0000";
  }
  
  ExploreButton.onclick = function() {
    const ExploreDiv = document.createElement('div');
    ExploreDiv.zIndex = 2147483647;
    ExploreDiv.backgroundColor = "darkRed";
    ExploreDiv.borderRadius = "6px";
    ExploreDiv.style.boxShadow = "0 16px 32px 0 rgba(0,0,0,0.2), 0 12px 40px 0 rgba(0,0,0,0.19)";
    ExploreDiv.color = "darkRed";
  }
  GUI.appendChild(ExploreButton);


  const CommandButton = document.createElement('button');
  CommandButton.innerHTML = "Command Line";
  CommandButton.style.zIndex = 2147483647;
  CommandButton.style.position = "absolute";
  CommandButton.style.top = "80px";
  CommandButton.style.left = "5px";
  CommandButton.style.display = "inline-block";
  CommandButton.style.padding = "10px 20px";
  CommandButton.style.backgroundColor = "#ff0000";
  CommandButton.style.color = "white";
  CommandButton.style.textAlign = "center";
  CommandButton.style.textDecoration = "none";
  CommandButton.style.borderRadius = "4px";
  CommandButton.style.border = "none";
  CommandButton.style.fontSize = "10px";
  CommandButton.style.cursor = "pointer";
  CommandButton.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
  CommandButton.style.transition = "all 0.3s ease-in-out";
  CommandButton.onmouseover = function(){ 
    CommandButton.style.backgroundColor = "#b00000";
  }
  CommandButton.onmouseout = function(){ 
    CommandButton.style.backgroundColor = "#ff0000";
  }
  GUI.appendChild(CommandButton);

  function CheckForHidden() {
    if (hidden == "false") {
      GUI.style.opacity = 1;
      TextContent.style.opacity = 1;
      ExecuteButton.style.opacity = 1;
      ExploreButton.style.opacity = 1;
    } else {
      GUI.style.opacity = 0;
      TextContent.style.opacity = 0;
      ExecuteButton.style.opacity = 0;
      ExploreButton.style.opacity = 0;
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
