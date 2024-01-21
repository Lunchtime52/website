const companydata = {
  name: "Pixel Dynasty",
  slogan: "Web Development for you!",
  phone: "865-405-9812",
  email: "help@pixeldynasy.dev",
  address: "123 something street, City, State Zip",
  logo: "/assets/logo.png",
};

function pageload() {
  setmobilelinks();
  setVars(companydata);
}

function setVars(data) {
  document.title = data.name;

  const companyElements = document.querySelectorAll(
    ".company-name , .company-slogan , .company-phone , .company-email , .company-address, .company-logo"
  );
  companyElements.forEach((element) => {
    if (element.classList.contains("company-name")) {
      element.textContent = data.name;
    } else if (element.classList.contains("company-slogan")) {
      element.textContent = data.slogan;
    } else if (element.classList.contains("company-phone")) {
      element.textContent = data.phone;
    } else if (element.classList.contains("company-email")) {
      element.textContent = data.email;
    } else if (element.classList.contains("company-address")) {
      element.textContent = data.address;
      //Logo not working yet
    } else if (element.classList.contains("company-logo")) {
      const img = document.createElement("img");
      img.setAttribute("src",data.logo);
      logoElement.appendChild(img);
    }
  });
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
