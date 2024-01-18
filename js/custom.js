function mobilenavbar() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.style.display = "block";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function pageload() {
  setmobilelinks();
}

function setmobilelinks() {
  let ogList = document.getElementById("pageList");
  let newList = document.getElementById("mobilePageList");

  ogList.querySelectorAll("li").forEach((item) => {
    const clonedItem = item.cloneNode(true);
    clonedItem.classList.remove(
      "w3-hide-small",
      "w3-hide-medium",
      "navlistitem"
    );
    newList.appendChild(clonedItem);
  });
}
