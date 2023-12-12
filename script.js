function genuii() {
    let base = "2.16.840.1.114416.24." // Base Code to be added
    let ert = document.getElementById("ERT").value; // fetch the contects of the input tag
    if (ert != "") { // check if the input is not empty
        let modert = ert.slice(3);
        let fuii = base + modert;
        document.getElementById("uiicode").innerHTML = fuii; // Display the data in the paragraph gag
    }
    else{
        alert("Enter Ert Number"); // Display alert if no data is present
    }
}

function copy() {
    var copy = document.getElementById("uiicode").innerHTML;
    if (copy != ""){

    // Copy the UII code to the Clipboard
    navigator.clipboard.writeText(copy);
    var copybtn = document.getElementById("copybtn");
    copybtn.innerHTML = "Copied";

    setTimeout(() => {
        copybtn.innerHTML = "Copy"
    }, 2000);
}
else{
    alert("Enter ERTMeter Number");
}
}
function reset(){
    // Reload the Page and clear the contents
    window.location.reload();
}