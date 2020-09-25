// console.log("Hello world");
var welcomeContainer = document.getElementById("welcome");
var startButton = document.getElementById("create-pizza");
var options = document.getElementById("options");
var selection = document.getElementById("selection");

var currentStage = 0;
var stages = [
  {
    name: "Crust",
    options: ["Thin", "Hand Tossed", "Pan", "Deep Dish"],
  },
  {
    name: "Meats",
    options: ["Pepperoni", "Ham", "Sausage", "Beef", "Chicken"],
  },
  {
    name: "Veggies",
    options: ["Green Peppers", "Onions", "Tomatoes", "Banana Peppers"],
  },
];

function renderOptions(array) {
  for (var i = 0; i < array.length; i++) {
    // 1. Create an element.
    var button = document.createElement("button");
    // 2. Add content
    button.setAttribute("class", "btn btn-info");
    button.textContent = array[i];
    button.setAttribute("data-value", array[i]);
    // 3. Append to an existing element
    options.append(button);
  }
}

options.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log("You clicked a button");
    var selectedCrust = event.target.getAttribute("data-value");
    console.log(selectedCrust);

    selection.textContent = "";
    var crustToDisplay = document.createElement("h3");
    crustToDisplay.textContent = selectedCrust;
    selection.append(crustToDisplay);
    // TODO: Save to Local Storage
    if (currentStage === stages.length -1){
        alert("Your Pizza is on its way!");
    } else {
    setTimeout(function () {
      currentStage++;
      var optionsToDisplay = stages[currentStage].options;
      options.textContent = "";
      renderOptions(optionsToDisplay);
    }, 1000);
  }
}
});

startButton.addEventListener("click", function () {
  welcomeContainer.style.display = "none";
  var optionsToDisplay = stages[currentStage].options;
  renderOptions(optionsToDisplay);
});