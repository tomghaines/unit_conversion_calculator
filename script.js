// Get input  & button elements:
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

// Set default values:
inputEl.value = 0

// get element Length:
const metersEl = document.getElementById("meters-el")
const feetEl = document.getElementById("feet-el")

// get element Volume:
const litersEl = document.getElementById("liters-el")
const gallonsEl = document.getElementById("gallons-el")

// get element Mass:
const kilosEl = document.getElementById("kilos-el")
const poundsEl = document.getElementById("pounds-el")

// Conversions Length:
function convertFootToMeter() {
    let result = inputEl.value * 3.281
    result = result.toFixed(2)
    metersEl.innerText = `${inputEl.value}m = ${result}ft`
}

function convertMeterToFoot() {
    let result = inputEl.value / 3.281
    result = result.toFixed(2)
    feetEl.innerText = `${inputEl.value}ft = ${result}m`
}

// Conversions Volume:
function convertLiterToGallon() {
    let result = inputEl.value * 3.785
    result = result.toFixed(2)
    gallonsEl.innerText = `${inputEl.value}gal = ${result}L`
}

function convertGallonToLiter() {
    let result = inputEl.value / 3.785
    result = result.toFixed(2)
    litersEl.innerText = `${inputEl.value}L = ${result}gal`
}

// Conversions Mass:
function convertKilosToPounds() {
    let result = inputEl.value * 2.205
    result = result.toFixed(2)
    poundsEl.innerText = `${inputEl.value}lbs = ${result}kg`
}

function convertPoundsToKilos() {
    let result = inputEl.value / 2.205
    result = result.toFixed(2)
    kilosEl.innerText = `${inputEl.value}kg = ${result}lbs`
}

const convertAll = function() {
    convertMeterToFoot()
    convertFootToMeter()
    convertLiterToGallon()
    convertGallonToLiter()
    convertKilosToPounds()
    convertPoundsToKilos()
}

convertBtn.addEventListener("click", function() {
    convertAll()
})