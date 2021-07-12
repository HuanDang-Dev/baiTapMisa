function autocomplete(inp, arr) {
  var currentFocus;

  function setLists(inp) {
    var i,
      boxOption,
      option,
      matched,
      val = inp.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;

    boxOption = document.createElement("DIV");
    boxOption.setAttribute("id", inp.id + "autocomplete-list");
    boxOption.setAttribute("class", "autocomplete-items");
    inp.parentNode.appendChild(boxOption);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].text.toLowerCase().indexOf(val.toLowerCase()) > -1) {
        matched = true;
        inp.parentNode.classList.remove("red-border");
        /*create a DIV element for each matching element:*/
        option = document.createElement("DIV");
        option.innerHTML += arr[i].text;
        option.innerHTML += "<input type='hidden' value='" + arr[i].text + "'>";

        option.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        boxOption.appendChild(option);
      }
    }
    if (!matched) {
      inp.parentNode.classList.add("red-border");
    }
  }

  inp.addEventListener("keydown", function (e) {
    keydownActive(inp, e);
  });

  function keydownActive(inp, e) {
    var x = document.getElementById(inp.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  }
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
        var match = false;
        for (let j = 0; j < arr.length; j++) {
          if (arr[j].text.toLowerCase() == inp.value.toLowerCase()) {
            match = true;
          }
        }
        if (!match) {
          inp.parentNode.classList.add("red-border");
        } else {
          inp.parentNode.classList.remove("red-border");
        }
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target, inp);
  });

  inp.addEventListener("input", function (e) {
    setLists(inp);
  });
}
var gender = [
  { text: "Nam", value: 1 },
  { text: "Nữ", value: 3 },
  { text: "Khác", value: 2 },
];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
window.onload() = autocomplete(
  document.getElementById("selectedDepartment"),
  gender
);
