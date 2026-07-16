// =========================================
// Temporary Visitor Counter
// =========================================

console.log("Visitor Counter Started");

const visitorCount = document.getElementById("visitor-count");

if (visitorCount) {

    let count = localStorage.getItem("visitorCount");

    if (count === null) {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }

    localStorage.setItem("visitorCount", count);

    visitorCount.textContent = count;

    console.log("Visitor Count :", count);

}