let homeCount = 0
let guestCount = 0

function addHome1() {
    homeCount = homeCount + 1
    document.getElementById("home-score").textContent = homeCount
}

function addHome2() {
    homeCount = homeCount + 2
    document.getElementById("home-score").textContent = homeCount
}

function addHome3() {
    homeCount = homeCount + 3
    document.getElementById("home-score").textContent = homeCount
}

function addGuest1() {
    guestCount = guestCount + 1
    document.getElementById("guest-score").textContent = guestCount
}

function addGuest2() {
    guestCount = guestCount + 2
    document.getElementById("guest-score").textContent = guestCount
}

function addGuest3() {
    guestCount = guestCount + 3
    document.getElementById("guest-score").textContent = guestCount
}