const data = {
    "companyName":"Pixel Dynasty",

};

function pageload() {
  setmobilelinks();
  setVars(data);
}

function mobilenavbar() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.style.display = "block";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
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

function setVars(data){
    document.title = data.companyName
    const companyNameElements = document.querySelectorAll('.company-name');
    companyNameElements.forEach(element => {
      element.textContent = data.companyName;
    });
}