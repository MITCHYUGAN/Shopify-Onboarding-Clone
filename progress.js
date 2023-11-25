// const progress = document.querySelector('progress');
// const steps = document.querySelectorAll('.step');


// steps.forEach((step, i) => {
//     step.addEventListener('click', () => {
//       // Update progress bar
//       progress.value = i + 2;
//     })
// })

const number = document.querySelector(".number")
console.log(number);


let currentProgress = 0;
const totalElements = 4; // Change this to the total number of elements

function updateProgress(elementNumber) {
    if (elementNumber === currentProgress + 1) {
        // Check an element
        currentProgress++;
        if(number.innerHTML > 1){
            number.innerHTML++
        }
    } else if (elementNumber === currentProgress) {
        // Uncheck the last checked element
        currentProgress--;
        number.innerHTML--
    }

    updateProgressBar();
}

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");

    const progressPercentage = (currentProgress / totalElements) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// Optional: Reset the progress bar
function resetProgress() {
    currentProgress = 0;
    updateProgressBar();
}