let boxes = document.querySelectorAll(".box");
let winbox = document.querySelector(".count")
let winCounts = 0;

boxes.forEach(box => {
    box.addEventListener("click", (e) => {
        if (e.target == document.querySelector('.selected')) {
            winCounts++;
            winbox.innerText = "Your Score Is: " + winCounts
        }
    });
});

setInterval(() => {
    // Clear previous backgrounds
    boxes.forEach(box => {
        box.style.backgroundImage = 'none';
        box.classList.remove('selected');
    });

    // Generate random number
    let randomNumber = Math.floor(Math.random() * 16) + 1; // Adding 1 to ensure the range is 1-16

    // Select random box
    let selectedBox = document.querySelector(`.no-${randomNumber}`);

    // Set background image
    selectedBox.style.backgroundImage = `url("./assets/cd9ece62880791.Y3JvcCwyMzE0LDE4MTAsODAsMA.png")`;
    selectedBox.classList.add('selected');
}, 500);
