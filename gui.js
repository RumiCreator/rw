
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
  GUI.style.borderRadius = "15px"
  GUI.style.height = "155px";
  GUI.style.width = "200px";

  GUI.style.zIndex = 2147483646;
  document.body.appendChild(GUI);

  function Execute() {
    let pr1 = prompt("Which script would you like to execute?");
    eval(pr1);
    return true;
  }


  const ExecuteButton = document.createElement('button');
  ExecuteButton.innerHTML = "Execute Script";
  ExecuteButton.style.zIndex = 2147483647;
  ExecuteButton.style.position = "absolute";
  ExecuteButton.style.top = "115px";
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
  ExploreButton.style.top = "115px";
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
  ExecuteButton.onmouseout = function(){ 
    ExploreButton.style.backgroundColor = "#ff0000";
  }
  
  ExploreButton.onclick = function() {
    let Win1 = window.open("https://www.google.com");
    Win1.document.write(`
    <p>[RW] Explore Global Scripts<p>
    <p>-C:(babyfy)-</p>
    <p>-C:(crashpage)-</p>
    `)
  }
  GUI.appendChild(ExploreButton);


  const CommandButton = document.createElement('button');
  CommandButton.innerHTML = "Command Line";
  CommandButton.zIndex = 2147483647;
  CommandButton.style.position = "absolute";
  CommandButton.style.borderRadius = "7.5px";
  CommandButton.style.borderWidth = "thick";
  CommandButton.style.borderColor = "red";
  CommandButton.style.backgroundColor = "orange";
  CommandButton.style.top = "90px";
  CommandButton.style.left = "5px";
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
  HideShow.zIndex = 2147483647;
  HideShow.style.position = "absolute";
  HideShow.style.borderRadius = "10px";
  HideShow.style.top = "10px";
  HideShow.style.left = "5px";
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

