var mainContainer = document.getElementById("mainContainer")
var cakeOuter = document.getElementById("cakeOuter")
var instructorOuter = document.getElementById("instructorOuter")
var instructorImg = document.getElementById("instructorImg")
var countInstructor = 0
var countCandle = 0
var btnInstructor = document.getElementById("btnInstructor")
var instructorSay = document.getElementById("instructorSay")
var instructorSayDetail = document.getElementById("instructorSayDetail")
var btnLight = document.getElementById("btnLight")
var btnBlow = document.getElementById("btnBlow")
var btnPresent = document.getElementById("btnPresent")
var candleOne = document.getElementById("candleOne")
var candleTwo = document.getElementById("candleTwo")
var candleThree = document.getElementById("candleThree")
var instructorPray1 = document.getElementById("instructorPray1")
var instructorPray2 = document.getElementById("instructorPray2")
var hpbdSong = document.getElementById("hpbdSong")
var giftSong = document.getElementById("giftSong")
var maiduyOuter = document.getElementById("maiduyOuter")
var giftPresent = document.getElementById("giftPresent")
var checkSignin = 0
localStorage.setItem("checkPage", "hihi")
function checkPage() {
    if (localStorage.getItem("checkPage") == "0") {
        window.location.href = "signin.html"
    }
    if(localStorage.getItem("checkPage") == "1") {
        localStorage.setItem("checkPage", "hihi")
    }
}
window.onload = checkPage
// Stop music first time sign in
hpbdSong.pause()
giftSong.pause()
// Next Button Click to show instruction
btnInstructor.addEventListener("click", function (e) {
    e.preventDefault()
    countInstructor++
    switch (countInstructor) {
        case 1:
            newChat("Xin chào chị Ý Nhi.")
            break;
        case 2:
            newChat("Em là ZuyEm (Bot do anh Mai Duy lập trình).")
            break;
        case 3:
            newChat("Em sẽ là người hướng dẫn cho chị Nhi ngày hôm nay.")
            break;
        case 4:
            newChat("Bây giờ là 0h00 3/9/2023 (hoặc hơn xíu :<).")
            break;
        case 5:
            newChat("Em chúc mừng sinh nhật chị Nhi nhaaa :>")
            break;
        case 6:
            newChat("Anh Mai Duy đã làm cho chị cái bánh này nè.")
            addCake()
            break;
        case 7:
            newChat("Đang hông biết làm sao để đốt nến đúng hong he he.")
            break;
        case 8:
            newChat("Đợi xíu để em đi lấy diêm cho chị đốt nến nhó.")
            activeLight()
            break;
        case 9:
            newChat("Cùng xem nhó")
            presentActive()
            break;
        case 10:
            newChat("Hết òi hihihihi. Thích hong babi :>")
            presentActive()
            break;

    }
})

// Light Button to light candle (3 times)
btnLight.addEventListener("click", function (e) {
    e.preventDefault()
    countCandle++
    switch (countCandle) {
        case 1:
            newCandle(candleOne)
            break;
        case 2:
            newCandle(candleTwo)
            break;
        case 3:
            newCandle(candleThree)
            prayWork()
            break;
    }
})

// Blow Button to remove candle
btnBlow.addEventListener("click", (e) => {
    e.preventDefault()
    removeCandle(candleOne)
    removeCandle(candleTwo)
    removeCandle(candleThree)
    showMaiDuy()
})

// Present Button to show Mai Duy with msg
btnPresent.addEventListener("click", (e) => {
    e.preventDefault()
    showPresent()
    newChat2("Đây là những lời nhắn anh gửi em trong tuổi mới. (Xin lỗi thi Văn 5 điểm.)")
})

// Make new chat of Instructor
async function newChat(chat) {
    instructorSay.classList.add("none")
    instructorSayDetail.innerHTML = chat
    await new Promise(resolve => setTimeout(resolve, 1000));
    instructorSay.classList.remove("none")
}

// Make new chat of Mai Duy (remove hide)
async function newChat2(chat) {
    instructorSay.classList.add("none")
    instructorSayDetail.innerHTML = chat
    await new Promise(resolve => setTimeout(resolve, 1000));
    instructorOuter.classList.remove("hide")
    instructorSay.classList.remove("none")
}

// Add cake to middle of screen
async function addCake() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    cakeOuter.classList.remove("none")
}

// Show light of candle
async function activeLight() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    btnLight.classList.add("btn-light")
    btnLight.removeAttribute("disabled")
}

// Make new candle
async function newCandle(candle) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    candle.classList.remove("none")
}

// Blow and remove candle
function removeCandle(candle) {
    candle.classList.add("animate__fadeOutUp")
}

// Dark BG to pray
async function changeBg(color) {
    instructorOuter.classList.add("hide")
    await new Promise(resolve => setTimeout(resolve, 1000));
    mainContainer.style.background = color
}

// Show Instruction to pray
async function prayWork() {
    btnLight.classList.add("none")
    await new Promise(resolve => setTimeout(resolve, 1200));
    newChat("Chuẩn bị 3s gòi chị sẽ cầu nguyện trong vòng 10s nhá.")
    await new Promise(resolve => setTimeout(resolve, 3500));
    newChat("3 nè")
    await new Promise(resolve => setTimeout(resolve, 4000));
    newChat("2 nè")
    await new Promise(resolve => setTimeout(resolve, 5000));
    newChat("1 nè")
    await new Promise(resolve => setTimeout(resolve, 5500));
    changeBg("rgba(0, 0, 0, 0.8)")
    hpbdSong.play()
    instructorPray1.classList.remove("hide")
    instructorPray2.classList.remove("hide")
    waitUntilDone()
}

// Wait for music end
async function waitUntilDone() {
    await new Promise(resolve => setTimeout(resolve, 32000));
    btnBlow.removeAttribute("disabled")
    btnBlow.classList.add("btn-blow")
}

// Click Blow and show Mai Duy
async function showMaiDuy() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    cakeOuter.classList.add("none")
    maiduyOuter.classList.remove("none")
}

// Click Open Present and show Mai Duy instructor
async function showPresent() {
    maiduyOuter.classList.add("animate__zoomOut")
    instructorImg.src = "./images/maiduyPresent.png"
    btnInstructor.style.background = "#000"
    await new Promise(resolve => setTimeout(resolve, 1000));
    maiduyOuter.classList.add("none")
}

// Open new song and show present
async function presentActive() {
    giftSong.play()
    giftPresent.classList.remove("none")
    await new Promise(resolve => setTimeout(resolve, 1000));
    newChat("Nhấn giữ từng hình để xem lời chúc nha.")
}



// SCROLL GIFT
var giftContainer = document.querySelector(".gift-present_wrapper")
var giftPrev = document.getElementById("giftPrev")
var giftNext = document.getElementById("giftNext")

// giftContainer.addEventListener("wheel", (e) => {
//     e.preventDefault()
//     giftContainer.style.scrollBehavior = "smooth"
//     giftContainer.scrollLeft += e.deltaY
// })

giftNext.addEventListener("click", (e) => {
    giftContainer.style.scrollBehavior = "smooth"
    giftContainer.scrollLeft += 1400
})
giftPrev.addEventListener("click", (e) => {
    giftContainer.style.scrollBehavior = "smooth"
    giftContainer.scrollLeft -= 1400
})
