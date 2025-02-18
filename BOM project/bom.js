// const x = window.innerHeight;
// const y = window.innerWidth;
// console.log(x,y);

// window.open();
// console.log(window.location.href);

// window.close();
// console.log(window.location.protocol);




const x = window.innerHeight;
const y = window.innerWidth;
console.log(`Height: ${x}, Width: ${y}`);

console.log("Current URL:", window.location.href);
console.log("Protocol:", window.location.protocol);

// Open a new window (this works only if triggered by user interaction)
const newWindow = window.open("https://example.com", "_blank");

if (newWindow) {
    console.log("New window opened successfully.");
    // Close the new window after 3 seconds (optional)
    setTimeout(() => {
        newWindow.close();
        console.log("New window closed.");
    }, 3000);
} else {
    console.log("Popup blocked!");
}

