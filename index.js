let count = 0;
let savedEntries = 0;
const countEl = document.getElementById("count");
const savedEntriesEl = document.getElementById('saved-entries');
const errorEl = document.getElementById("error");
const saveBtn = document.querySelector('.save-btn')

function increase() {
    count++;
    countEl.innerText = count;
}

function decrease() {
    if(count>0) {
        count--;
        countEl.innerText = count;
    }
}

function save() {
    saveBtn.disabled = false;
    let savedCount = count + ' - ';
    savedEntriesEl.textContent += savedCount;
    count = 0;
    countEl.innerText = count;
    savedEntries++;
    if (savedEntries>10) {
        errorEl.innerText = "Error: Saved too many times, please reset"
        saveBtn.disabled = true;
    }
}

function reset() {
    savedEntriesEl.innerText="";
    errorEl.innerText = "";
    count = 0;
    savedEntries = 0;
    countEl.innerText = count;
}
