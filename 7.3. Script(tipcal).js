// Id like to make all my functions on the top side of the page
function calculateTip() { // It is more convinient to use the same function as the ids

    // Store the data of the inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var totalPeople = document.getElementById("totalPeople").value;
    
    //Quick Validation
    if(billAmount === "" || serviceQuality === 0){
        window.alert("Please enter some values. I really need that tip!");
        return; // This would prevent the function from continuing.
    } 
        
    // Check to see if this input is empty or less than or equal to 1
    if(totalPeople === "" || totalPeople <= 1){
        totalPeople = 1; 
        document.getElementById("each").style.display = "none";
        // when I put a return here, the code doesn't work. 
    } else{
        document.getElementById("each").style.display = "block"; 
    }
      
    // Doo some math!
    var total = (billAmount * serviceQuality) / totalPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    //Display the tip 
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom Function

document.getElementById("calculate").onclick = function() {calculateTip(); };
