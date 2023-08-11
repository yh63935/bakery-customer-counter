let count = 0;
let savedEntries = 0;

function increase() {
    count++;
    document.getElementById("count").innerText = count;
}

function decrease() {
    if(count>0) {
        count--;
        document.getElementById("count").innerText = count;
    }
}

function save() {
    let savedCount = count + ' - ';
    document.getElementById('saved-entries').textContent += savedCount;
    count = 0;
    document.getElementById("count").innerText = count;
    savedEntries++;
    if (savedEntries>10) {
        document.getElementById("error").innerText = "Error: Saved too many times, please reset"
        document.getElementsByClassName("save-btn")[0].disabled=true;
    }
}

function reset() {
    document.getElementById("saved-entries").innerText="";
    document.getElementById("error").innerText = "";
    count = 0;
    savedEntries = 0;
    document.getElementById("count").innerText = count;
}
