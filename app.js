const closeSelectplanBtn = document.querySelector(".closeselectplan")
const selectplan = document.querySelector(".selectplan")
const notificationTab = document.querySelector("#notification-tab")
const notificationcontents = document.querySelector(".notificationcontents")
const profile = document.querySelector("#profile-menu")
const profilecontents = document.querySelector(".profilecontents")
const onbordingControl = document.querySelector("#onbording-control")
const onboardingGuides = document.querySelector('.onboarding-guides')
const progressBarNumber = document.querySelector(".progress-bar-number")

const onboardingGuidesHeading = document.querySelectorAll(".onboarding-guide-heading")
const onboardingGuideImg = document.querySelectorAll('.onboarding-guide-img')
const onboardingGuide = document.querySelectorAll('.onboarding-guide')
const onboardingGuideContent = document.querySelectorAll(".onboarding-guide-content")

console.log("ONB Guide Heading:", onboardingGuidesHeading)
console.log("ONB Guide Toggle:", onboardingGuideContent)


// Close Select Plan
closeSelectplanBtn.addEventListener("click", () => {
    selectplan.remove()
})

// Toggle Notification
notificationTab.addEventListener("click", () => {
    notificationcontents.classList.toggle("active")
    // notification.ariaExpanded= "true"
})

//Toggle Profile
profile.addEventListener("click", () => {
    profilecontents.classList.toggle("active")
    // profile.ariaExpanded = "true"
})

// Toggle Onboarding 
onbordingControl.addEventListener("click", () => {
    console.log("Working")
    onboardingGuides.classList.toggle("active")
})

// Open and Close Onboarding Elements on active

onboardingGuidesHeading[0].addEventListener("click", () => {

    onboardingGuideContent[0].classList.add("active")
    onboardingGuideContent[1].classList.remove("active")
    onboardingGuideContent[2].classList.remove("active")
    onboardingGuideContent[3].classList.remove("active")
    onboardingGuideContent[4].classList.remove("active")

    onboardingGuideImg[0].classList.add("active")
    onboardingGuideImg[1].classList.remove("active")
    onboardingGuideImg[2].classList.remove("active")
    onboardingGuideImg[3].classList.remove("active")
    onboardingGuideImg[4].classList.remove("active")

    onboardingGuide[0].classList.add("active")
    onboardingGuide[1].classList.remove("active")
    onboardingGuide[2].classList.remove("active")
    onboardingGuide[3].classList.remove("active")
    onboardingGuide[4].classList.remove("active")
})

onboardingGuidesHeading[1].addEventListener("click", () => {

    onboardingGuideContent[1].classList.add("active")
    onboardingGuideContent[0].classList.remove("active")
    onboardingGuideContent[2].classList.remove("active")
    onboardingGuideContent[3].classList.remove("active")
    onboardingGuideContent[4].classList.remove("active")
    
    onboardingGuideImg[1].classList.add("active")
    onboardingGuideImg[0].classList.remove("active")
    onboardingGuideImg[2].classList.remove("active")
    onboardingGuideImg[3].classList.remove("active")
    onboardingGuideImg[4].classList.remove("active")

    onboardingGuide[1].classList.add("active")
    onboardingGuide[0].classList.remove("active")
    onboardingGuide[2].classList.remove("active")
    onboardingGuide[3].classList.remove("active")
    onboardingGuide[4].classList.remove("active")
    
})

onboardingGuidesHeading[2].addEventListener("click", () => {

    onboardingGuideContent[2].classList.add("active")
    onboardingGuideContent[0].classList.remove("active")
    onboardingGuideContent[1].classList.remove("active")
    onboardingGuideContent[3].classList.remove("active")
    onboardingGuideContent[4].classList.remove("active")
    
    onboardingGuideImg[2].classList.add("active")
    onboardingGuideImg[0].classList.remove("active")
    onboardingGuideImg[1].classList.remove("active")
    onboardingGuideImg[3].classList.remove("active")
    onboardingGuideImg[4].classList.remove("active")

    onboardingGuide[2].classList.add("active")
    onboardingGuide[1].classList.remove("active")
    onboardingGuide[0].classList.remove("active")
    onboardingGuide[3].classList.remove("active")
    onboardingGuide[4].classList.remove("active")
})

onboardingGuidesHeading[3].addEventListener("click", () => {

    onboardingGuideContent[3].classList.add("active")
    onboardingGuideContent[0].classList.remove("active")
    onboardingGuideContent[1].classList.remove("active")
    onboardingGuideContent[2].classList.remove("active")
    onboardingGuideContent[4].classList.remove("active")
    
    onboardingGuideImg[3].classList.add("active")
    onboardingGuideImg[0].classList.remove("active")
    onboardingGuideImg[2].classList.remove("active")
    onboardingGuideImg[1].classList.remove("active")
    onboardingGuideImg[4].classList.remove("active")

    onboardingGuide[3].classList.add("active")
    onboardingGuide[1].classList.remove("active")
    onboardingGuide[2].classList.remove("active")
    onboardingGuide[0].classList.remove("active")
    onboardingGuide[4].classList.remove("active")
})

onboardingGuidesHeading[4].addEventListener("click", () => {

    onboardingGuideContent[4].classList.add("active")
    onboardingGuideContent[0].classList.remove("active")
    onboardingGuideContent[3].classList.remove("active")
    onboardingGuideContent[2].classList.remove("active")
    onboardingGuideContent[1].classList.remove("active")
    
    onboardingGuideImg[4].classList.add("active")
    onboardingGuideImg[0].classList.remove("active")
    onboardingGuideImg[2].classList.remove("active")
    onboardingGuideImg[3].classList.remove("active")
    onboardingGuideImg[1].classList.remove("active")

    onboardingGuide[4].classList.add("active")
    onboardingGuide[1].classList.remove("active")
    onboardingGuide[2].classList.remove("active")
    onboardingGuide[3].classList.remove("active")
    onboardingGuide[0].classList.remove("active")
})


let currentProgress = 0;
const totalElements = 5; // Change this to the total number of elements

function updateProgress(elementNumber) {
    if (elementNumber === currentProgress + 1) {
        // Check an element
        currentProgress++;
        progressBarNumber.innerHTML++;
    } else if (elementNumber === currentProgress) {
        // Uncheck the last checked element
        currentProgress--;
        progressBarNumber.innerHTML--;
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




document.querySelectorAll('.toggle').forEach(function(toggleBtn) {
  let currentIndex = 0;
  let initialImage;
  let interval;

  const showimg = toggleBtn.querySelector(".showimg");
  const image = toggleBtn.querySelector(".image");

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
