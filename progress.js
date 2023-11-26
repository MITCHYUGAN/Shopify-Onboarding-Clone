// const progress = document.querySelector('progress');
// const steps = document.querySelectorAll('.step');

// steps.forEach((step, i) => {
//     step.addEventListener('click', () => {
//       // Update progress bar
//       progress.value = i + 2;
//     })
// })

const number = document.querySelector(".number");
console.log(number);

let currentProgress = 0;
const totalElements = 4; // Change this to the total number of elements

function updateProgress(elementNumber) {
  if (elementNumber === currentProgress + 1) {
    // Check an element
    currentProgress++;
    if (number.innerHTML > 1) {
      number.innerHTML++;
    }
  } else if (elementNumber === currentProgress) {
    // Uncheck the last checked element
    currentProgress--;
    number.innerHTML--;
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






// Loop Images and Change Color on Hover
// let imageArr = [
//     `<img class="image" src="https://mitchmousepage.netlify.app/img/completed2.png" alt="">`,
//     "https://mitchmousepage.netlify.app/img/circlefill.png",
//     "https://mitchmousepage.netlify.app/img/halfcircle1.png",
//     "https://mitchmousepage.netlify.app/img/halfcircle2.png",
//     "https://mitchmousepage.netlify.app/img/clock.png",
//     "https://mitchmousepage.netlify.app/img/completed1.png",
//     "https://mitchmousepage.netlify.app/img/completed2.png",
//   ];
  
// let currentIndex = 0;
// let initialImage;
// let interval;

// const toggle = document.getElementById("toggle");
// const image = document.getElementById("image");
// const showimg = document.querySelector(".showimg")

// let showimgsrc = document.querySelector(".showimg").src;
// let hoverimgsrc = "https://mitchmousepage.netlify.app/img/circle.png"

// showimg.addEventListener('mouseenter', function() {
//   console.log("working");
//   this.src = hoverimgsrc
// })

// showimg.addEventListener('mouseleave', function(){
//   this.src = showimgsrc
// })

// initialImage = image.src;

// toggle.addEventListener("click", function () {
//   if (!interval) {
//     showimg.classList.add("notActive")
//     image.classList.add("active")
//     interval = setInterval(function () {
//       currentIndex++;
//       image.src = imageArr[currentIndex];
//       if (currentIndex === imageArr.length - 1) {
//         clearInterval(interval);
//       }
//     }, 500);
//   } else {
//     showimg.classList.remove("notActive")
//     image.classList.remove("active")
//     clearInterval(interval);
//     interval = null;
//     currentIndex = 0;
//     image.src = initialImage;
//   }
// });







document.querySelectorAll('.toggle').forEach(function(toggleBtn) {
  let currentIndex = 0;
  let initialImage;
  let interval;

  const showimg = toggleBtn.nextElementSibling.querySelector(".showimg");
  const image = toggleBtn.nextElementSibling.querySelector(".image");

  console.log("show:", showimg);
  let showimgsrc = showimg.src;
  let hoverimgsrc = "https://mitchmousepage.netlify.app/img/circle.png"

  const imageArr = [
      "https://mitchmousepage.netlify.app/img/completed2.png",
      "https://mitchmousepage.netlify.app/img/circlefill.png",
      "https://mitchmousepage.netlify.app/img/halfcircle1.png",
      "https://mitchmousepage.netlify.app/img/halfcircle2.png",
      "https://mitchmousepage.netlify.app/img/clock.png",
      "https://mitchmousepage.netlify.app/img/completed1.png",
      "https://mitchmousepage.netlify.app/img/completed2.png",
  ];

  showimg.addEventListener('mouseenter', function() {
      this.src = hoverimgsrc
  });

  showimg.addEventListener('mouseleave', function(){
      this.src = showimgsrc
  });

  initialImage = image.src;

  toggleBtn.addEventListener("click", function () {
      if (!interval) {
          showimg.classList.add("notActive")
          image.classList.add("active")
          interval = setInterval(function () {
              currentIndex++;
              image.src = imageArr[currentIndex];
              if (currentIndex === imageArr.length - 1) {
                  clearInterval(interval);
              }
          }, 500);
      } else {
          showimg.classList.remove("notActive")
          image.classList.remove("active")
          clearInterval(interval);
          interval = null;
          currentIndex = 0;
          image.src = initialImage;
      }
  });
});