const upperShade = document.querySelector(".upper");
const lowerShade = document.querySelector(".lower");
const calculateButton = document.querySelector(".calculate");
const inputBuyingPrice = document.querySelector(".buying-price");
const inputCurrentPrice = document.querySelector(".current-price");
const inputQuantity = document.querySelector(".quantity");
const resultStatement = document.querySelector(".result-statement");


function calculate() {
    
    let buyingQuantity = Number(inputQuantity.value);
    let buyingPrice = Number(inputBuyingPrice.value);
    let currentPrice = Number(inputCurrentPrice.value);

    let buyingValue = buyingQuantity * buyingPrice;
    let currentValue = buyingQuantity * currentPrice;

    let totalValuation = currentValue - buyingValue;
    let totalPercentage = totalValuation * 100 / buyingValue;

    if(buyingPrice === 0 || buyingQuantity === 0){
        resultStatement.innerText = "Invalid Values.."
    } 
    else if(totalValuation >= 1){
        setTimeout(() => {
            resultStatement.innerText = `Wuhhuuu!! You are in total profit of ${totalValuation} rupees and profit percentage is ${totalPercentage}`;  
            upperShade.style.boxShadow = "15px 30px 710px 150px green";
            upperShade.style.transition = "3s ease-out";
                
    
            lowerShade.style.boxShadow = "5px 10px 710px 150px green";
            lowerShade.style.transition = "3s ease-out";
        }, 4000);
    }
    else if(totalValuation < 1) {
        setTimeout(() => {
            resultStatement.innerText = `OOpsie :( You are in loss of ${Math.abs(totalValuation)} rupees and loss percentage is ${Math.abs(totalPercentage)}`;
            upperShade.style.boxShadow = "15px 30px 710px 150px red";
            upperShade.style.transition = "3s ease-out";
                
    
            lowerShade.style.boxShadow = "5px 10px 710px 150px red";
            lowerShade.style.transition = "3s ease-out";
        }, 4000);
    }else {
        resultStatement.innerText = "Current price of the stock is same as the buying price. Have patience";
    }

}


calculateButton.addEventListener("click", calculate);