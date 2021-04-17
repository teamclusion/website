javascript: (function() {
  % 20 % 20 % 20 % 20
  const % 20 download_link_id % 20 = % 20 "__zoomdl_link"; % 20 % 20 % 20 % 20
  if %20(!window.location.hostname.endsWith("zoom.us") % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 || % 20 document.getElementById(download_link_id)) % 20 {
    % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20
    return; % 20 % 20 % 20 % 20
  } % 20 % 20 % 20 % 20
  const % 20 video_url % 20 = % 20 document.getElementById("vjs_video_3_html5_api").src; % 20 % 20 % 20 % 20
  var % 20 download_link % 20 = % 20 document.createElement("a"); % 20 % 20 % 20 % 20 download_link.id % 20 = % 20 download_link_id; % 20 % 20 % 20 % 20 download_link.href % 20 = % 20 video_url; % 20 % 20 % 20 % 20 download_link.innerHTML % 20 = % 20 "Download%20Video%20(right%20click%20→%20Save%20Link%20As)"; % 20 % 20 % 20 % 20 download_link.style % 20 = % 20 "font-weight:%20bold"; % 20 % 20 % 20 % 20 download_link.onclick % 20 = % 20
  function() % 20 {
    % 20
    return %20 false; % 20
  }; % 20 % 20 % 20 % 20
  var % 20 container % 20 = % 20 document.getElementsByClassName("main")[0]; % 20 % 20 % 20 % 20 container.prepend(download_link); % 20 % 20 % 20 % 20
  function % 20 enableContextMenu(aggressive % 20 = % 20 false) % 20 {
    % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 void(document.ondragstart % 20 = % 20n ull); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 void(document.onselectstart % 20 = % 20n ull); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 void(document.onclick % 20 = % 20n ull); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 void(document.onmousedown % 20 = % 20n ull); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 void(document.onmouseup % 20 = % 20n ull); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 void(document.body.oncontextmenu % 20 = % 20n ull); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 enableRightClickLight(document); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20
    if %20(aggressive) % 20 {
      % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 enableRightClick(document); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 removeContextMenuOnAll("body"); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 removeContextMenuOnAll("img"); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 removeContextMenuOnAll("td"); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20
    } % 20 % 20 % 20 % 20
  } % 20 % 20 % 20 % 20
  function % 20 removeContextMenuOnAll(tagName) % 20 {
    % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20
    var % 20 elements % 20 = % 20 document.getElementsByTagName(tagName); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20
    for % 20(var % 20 i % 20 = % 200; % 20 i % 20 < % 20 elements.length; % 20 i++) % 20 {
      % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 enableRightClick(elements[i]); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20
    } % 20 % 20 % 20 % 20
  } % 20 % 20 % 20 % 20
  function % 20 enableRightClickLight(el) % 20 {
    % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el % 20 || % 20(el % 20 = % 20 document); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el.addEventListener("contextmenu", % 20 bringBackDefault, % 20 true); % 20 % 20 % 20 % 20
  } % 20 % 20 % 20 % 20
  function % 20 enableRightClick(el) % 20 {
    % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el % 20 || % 20(el % 20 = % 20 document); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el.addEventListener("contextmenu", % 20 bringBackDefault, % 20 true); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el.addEventListener("dragstart", % 20 bringBackDefault, % 20 true); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el.addEventListener("selectstart", % 20 bringBackDefault, % 20 true); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el.addEventListener("click", % 20 bringBackDefault, % 20 true); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el.addEventListener("mousedown", % 20 bringBackDefault, % 20 true); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el.addEventListener("mouseup", % 20 bringBackDefault, % 20 true); % 20 % 20 % 20 % 20
  } % 20 % 20 % 20 % 20
  function % 20 restoreRightClick(el) % 20 {
    % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el % 20 || % 20(el % 20 = % 20 document); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el.removeEventListener("contextmenu", % 20 bringBackDefault, % 20 true); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el.removeEventListener("dragstart", % 20 bringBackDefault, % 20 true); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el.removeEventListener("selectstart", % 20 bringBackDefault, % 20 true); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el.removeEventListener("click", % 20 bringBackDefault, % 20 true); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el.removeEventListener("mousedown", % 20 bringBackDefault, % 20 true); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 el.removeEventListener("mouseup", % 20 bringBackDefault, % 20 true); % 20 % 20 % 20 % 20
  } % 20 % 20 % 20 % 20
  function % 20 bringBackDefault(event) % 20 {
    % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20 event.returnValue % 20 = % 20 true; % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20(typeof % 20 event.stopPropagation % 20 === % 20 "function") % 20 && % 20 event.stopPropagation(); % 20 % 20 % 20 % 20 % 20 % 20 % 20 % 20(typeof % 20 event.cancelBubble % 20 === % 20 "function") % 20 && % 20 event.cancelBubble(); % 20 % 20 % 20 % 20
  } % 20 % 20 % 20 % 20 enableContextMenu();
})();
