content = document.getElementsByClassName("card-numbers")[0];

numberButtons = content.querySelectorAll("button");
var numberList = Array.from(numberButtons);

chosenRating = 0;

function onButtonClick(value) {
    chosenRating = value;
    numberList.forEach(element => {
        if(element.classList.contains("active") && element.id != value){
            numberButtons[element.id-1].classList.remove("active");     
        }
    });
        numberButtons[value-1].classList.add("active");
};

function onSubmit() {
    if(chosenRating != 0) {
        document.getElementsByClassName("card")[0].classList.add("inactive-card");
        document.getElementById("select-value").textContent = `You selected ${chosenRating} out of 5`;
        document.getElementsByClassName("thank-card")[0].classList.remove("inactive-card");

    }
};