// Import Firebase
import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Show Sections
function showSection(sectionId) {
    let sections = document.querySelectorAll(".content");
    sections.forEach(sec => sec.classList.add("hidden"));

    document.getElementById(sectionId).classList.remove("hidden");
}

window.showSection = showSection;


// 🎫 BOOK TICKET
function bookTicket() {
    let inputs = document.querySelectorAll("#tickets input");

    let from = inputs[0].value;
    let to = inputs[1].value;
    let date = inputs[2].value;

    if (from === "" || to === "" || date === "") {
        alert("Please fill all ticket fields");
        return;
    }

    addDoc(collection(db, "tickets"), {
        from: from,
        to: to,
        date: date,
        createdAt: new Date()
    })
    .then(() => {
        alert("✅ Ticket booked successfully!");
    })
    .catch((error) => {
        alert("❌ Error saving ticket");
        console.error(error);
    });
}

window.bookTicket = bookTicket;


// 🛂 APPLY VISA
function applyVisa() {
    let inputs = document.querySelectorAll("#visa input");

    let country = inputs[0].value;
    let name = inputs[1].value;

    if (country === "" || name === "") {
        alert("Please fill all visa fields");
        return;
    }

    addDoc(collection(db, "visa"), {
        country: country,
        name: name,
        createdAt: new Date()
    })
    .then(() => {
        alert("✅ Visa application submitted!");
    })
    .catch((error) => {
        alert("❌ Error submitting visa");
        console.error(error);
    });
}

window.applyVisa = applyVisa;


// 🌍 PASSPORT
function applyPassport() {
    let inputs = document.querySelectorAll("#passport input");

    let name = inputs[0].value;
    let nin = inputs[1].value;

    if (name === "" || nin === "") {
        alert("Please fill all passport fields");
        return;
    }

    addDoc(collection(db, "passport"), {
        name: name,
        nin: nin,
        createdAt: new Date()
    })
    .then(() => {
        alert("✅ Passport request sent!");
    })
    .catch((error) => {
        alert("❌ Error submitting passport");
        console.error(error);
    });
}

window.applyPassport = applyPassport;


// 💳 POS TERMINAL REQUEST
function requestPOS() {
    addDoc(collection(db, "pos"), {
        status: "Requested",
        createdAt: new Date()
    })
    .then(() => {
        alert("✅ POS request sent!");
    })
    .catch((error) => {
        alert("❌ Error requesting POS");
        console.error(error);
    });
}

window.requestPOS = requestPOS;


// ⛽ OIL & GAS SERVICE
function requestOilGas() {
    addDoc(collection(db, "oil_gas"), {
        service: "Fuel Request",
        createdAt: new Date()
    })
    .then(() => {
        alert("✅ Oil & Gas request sent!");
    })
    .catch((error) => {
        alert("❌ Error sending request");
        console.error(error);
    });
}

window.requestOilGas = requestOilGas;
