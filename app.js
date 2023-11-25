const closeSelectplanBtn = document.querySelector(".closeselectplan")
const selectplan = document.querySelector(".selectplan")
const notificationTab = document.querySelector("#notification-tab")
const notificationcontents = document.querySelector(".notificationcontents")
const profile = document.querySelector("#profile-menu")
const profilecontents = document.querySelector(".profilecontents")
const onbordingControl = document.querySelector("#onbording-control")
const onboardingGuides = document.querySelector('.onboarding-guides')
const onboardingGuideHeading = document.querySelector('.onboarding-guide-heading')
const onboardingGuideToggle = document.querySelector('.onboarding-guide-toggle')
const progressBarNumber = document.querySelector(".progress-bar-number")

const onboardingGuidesHeading = document.querySelectorAll(".onboarding-guide-heading")
const onboardingGuidesToggle = document.querySelectorAll(".onboarding-guide-toggle")

console.log("ONB Guide Heading:", onboardingGuidesHeading)
console.log("ONB Guide Toggle:", onboardingGuidesToggle)


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

    onboardingGuidesToggle[0].classList.add("active")
    onboardingGuidesToggle[1].classList.remove("active")
    onboardingGuidesToggle[2].classList.remove("active")
    onboardingGuidesToggle[3].classList.remove("active")
    onboardingGuidesToggle[4].classList.remove("active")

    onboardingGuidesHeading[0].classList.remove("active")
    onboardingGuidesHeading[1].classList.add("active")
    onboardingGuidesHeading[2].classList.add("active")
    onboardingGuidesHeading[3].classList.add("active")
    onboardingGuidesHeading[4].classList.add("active")
})

onboardingGuidesHeading[1].addEventListener("click", () => {

    onboardingGuidesToggle[1].classList.add("active")
    onboardingGuidesToggle[0].classList.remove("active")
    onboardingGuidesToggle[2].classList.remove("active")
    onboardingGuidesToggle[3].classList.remove("active")
    onboardingGuidesToggle[4].classList.remove("active")
    
    onboardingGuidesHeading[1].classList.remove("active")
    onboardingGuidesHeading[0].classList.add("active")
    onboardingGuidesHeading[2].classList.add("active")
    onboardingGuidesHeading[3].classList.add("active")
    onboardingGuidesHeading[4].classList.add("active")
})

onboardingGuidesHeading[2].addEventListener("click", () => {

    onboardingGuidesToggle[2].classList.add("active")
    onboardingGuidesToggle[0].classList.remove("active")
    onboardingGuidesToggle[1].classList.remove("active")
    onboardingGuidesToggle[3].classList.remove("active")
    onboardingGuidesToggle[4].classList.remove("active")
    
    onboardingGuidesHeading[2].classList.remove("active")
    onboardingGuidesHeading[0].classList.add("active")
    onboardingGuidesHeading[1].classList.add("active")
    onboardingGuidesHeading[3].classList.add("active")
    onboardingGuidesHeading[4].classList.add("active")
})

onboardingGuidesHeading[3].addEventListener("click", () => {

    onboardingGuidesToggle[3].classList.add("active")
    onboardingGuidesToggle[0].classList.remove("active")
    onboardingGuidesToggle[1].classList.remove("active")
    onboardingGuidesToggle[2].classList.remove("active")
    onboardingGuidesToggle[4].classList.remove("active")
    
    onboardingGuidesHeading[3].classList.remove("active")
    onboardingGuidesHeading[0].classList.add("active")
    onboardingGuidesHeading[1].classList.add("active")
    onboardingGuidesHeading[2].classList.add("active")
    onboardingGuidesHeading[4].classList.add("active")
})

onboardingGuidesHeading[4].addEventListener("click", () => {

    onboardingGuidesToggle[4].classList.add("active")
    onboardingGuidesToggle[0].classList.remove("active")
    onboardingGuidesToggle[3].classList.remove("active")
    onboardingGuidesToggle[2].classList.remove("active")
    onboardingGuidesToggle[1].classList.remove("active")
    
    onboardingGuidesHeading[4].classList.remove("active")
    onboardingGuidesHeading[0].classList.add("active")
    onboardingGuidesHeading[3].classList.add("active")
    onboardingGuidesHeading[2].classList.add("active")
    onboardingGuidesHeading[1].classList.add("active")
})


let currentProgress = 0;
const totalElements = 5; // Change this to the total number of elements

function updateProgress(elementNumber) {
    if (elementNumber === currentProgress + 1) {
        // Check an element
        currentProgress++;
        progressBarNumber.innerHTML++;
        // if(progressBarNumber.innerHTML > 1){
            
        // }
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