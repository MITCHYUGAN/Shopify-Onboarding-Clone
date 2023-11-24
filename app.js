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


// 

// function checkIfContainsClass() {
//     if(onboardingGuideToggle.classList.contains="active"){
//         onboardingGuideHeading.remove()
//     }
// }

// checkIfContainsClass()

// onboardingGuideHeading.addEventListener("click", () => {
//     onboardingGuideToggle.classList.add("active")
//     onboardingGuideHeading.remove()
// })



//

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