function loadGUI() {
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
  GUI.style.backgroundColor = "darkRed";
  GUI.style.borderRadius = "15px"
  GUI.style.height = "135px";
  GUI.style.width = "200px";

  GUI.style.zIndex = 2147483646;
  document.body.appendChild(GUI);

  function Execute() {
    let pr1 = prompt("Which script would you like to execute?");
    eval(pr1);
    return true;
  }



  const TextContent = document.createElement('div')
  TextContent.zIndex = 2147483647;
  TextContent.style.position = "absolute";
  TextContent.style.top = "95px";
  TextContent.style.left = "5px";
  TextContent.style.borderRadius = '7.5px';
  TextContent.style.borderWidth = 'thick';
  TextContent.style.borderColor = 'red';
  TextContent.style.backgroundColor = "orange";
  TextContent.innerHTML = "Wanna explore a huge variety of scripts? Click 'Explore'!";
  GUI.appendChild(TextContent);


  const ExecuteButton = document.createElement('button');

  ExecuteButton.innerHTML = "Execute Script";
  ExecuteButton.zIndex = 2147483647;
  ExecuteButton.style.position = "absolute";
  ExecuteButton.style.borderRadius = '7.5px';
  ExecuteButton.style.borderWidth = 'thick';
  ExecuteButton.style.borderColor = 'red';
  ExecuteButton.style.backgroundColor = "orange";
  ExecuteButton.style.top = "65px";
  ExecuteButton.style.left = "5px"
  ExecuteButton.onclick = function() {
    let ExecutionProcess = Execute();
    if (ExecutionProcess) {
      console.log("[RW] The execution process succeeded.")
    }
  }
  GUI.appendChild(ExecuteButton);


  const ExploreButton = document.createElement('button');
  ExploreButton.innerHTML = "Explore Global Scripts";
  ExploreButton.zIndex = 2147483647;
  ExploreButton.style.position = "absolute";
  ExploreButton.style.borderRadius = "7.5px";
  ExploreButton.style.borderWidth = "thick";
  ExploreButton.style.borderColor = "red";
  ExploreButton.style.backgroundColor = "orange";
  ExploreButton.style.top = "40px";
  ExploreButton.style.left = "5px";
  ExploreButton.onclick = function() {

  }
  GUI.appendChild(ExploreButton);

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

}

loadGUI();
