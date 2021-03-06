// Shades of uppe and lower
const upperShade = document.querySelector(".upper");
const lowerShade = document.querySelector(".lower");

const calculateButton = document.querySelector(".calculate");

// Inputs
const inputBuyingPrice = document.querySelector(".buying-price");
const inputCurrentPrice = document.querySelector(".current-price");
const inputQuantity = document.querySelector(".quantity");

//Results and gifs
const resultStatement = document.querySelector(".result-statement");
const loadingGIF = document.querySelector(".loading")


function calculate() {
    calculateButton.style.display = "none";
    loadingGIF.style.display = "block";
    
    let buyingQuantity = Number(inputQuantity.value);
    let buyingPrice = Number(inputBuyingPrice.value);
    let currentPrice = Number(inputCurrentPrice.value);

    let buyingValue = buyingQuantity * buyingPrice;
    let currentValue = buyingQuantity * currentPrice;
    // In profit or loss?
    let totalValuation = currentValue - buyingValue;
    let totalPercentage = totalValuation * 100 / buyingValue;

    if(buyingPrice <= 0 || buyingQuantity <= 0 || currentPrice <= 0) {
        loadingGIF.style.display = "none";
        resultStatement.innerText = "Invalid Values.."
    } 
    else if(totalValuation >= 1){
        setTimeout(() => {
            loadingGIF.style.display = "none";
            resultStatement.innerText = `Wuhhuuu!! You are in total profit of ${Math.abs(totalValuation)} rupees and profit percentage is ${Math.round(Math.abs(totalPercentage))}%`;  
            upperShade.style.boxShadow = "15px 30px 710px 150px green";
            upperShade.style.transition = "3s ease-out";
                
            //Color changes to green
            lowerShade.style.boxShadow = "5px 10px 710px 150px green";
            lowerShade.style.transition = "3s ease-out";
        }, 4000);
    }
    else if(totalValuation < 0) {
        setTimeout(() => {
            loadingGIF.style.display = "none";
            resultStatement.innerText = `OOpsie :( You are in loss of ${Math.abs(totalValuation)} rupees and loss percentage is ${Math.round(Math.abs(totalPercentage))}%`;
            upperShade.style.boxShadow = "15px 30px 710px 150px red";
            upperShade.style.transition = "3s ease-out";
                
            // Color changes to red
            lowerShade.style.boxShadow = "5px 10px 710px 150px red";
            lowerShade.style.transition = "3s ease-out";
        }, 4000);
    }else {
        loadingGIF.style.display = "none";

        resultStatement.innerText = "Current price of the stock is same as the buying price. Have patience";
    }

}

calculateButton.addEventListener("click", calculate);