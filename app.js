const closeSelectplanBtn = document.querySelector(".closeselectplan")
const selectplan = document.querySelector(".selectplan")
const notification = document.querySelector(".notification")
const notificationcontents = document.querySelector(".notificationcontents")
const profile = document.querySelector(".profile")
const profilecontents = document.querySelector(".profilecontents")


// Close Select Plan
closeSelectplanBtn.addEventListener("click", () => {
    selectplan.remove()
})

// Toggle Notification
notification.addEventListener("click", () => {
    notificationcontents.classList.toggle("active")
})

//Toggle Profile
profile.addEventListener("click", () => {
    profilecontents.classList.toggle("active")
})