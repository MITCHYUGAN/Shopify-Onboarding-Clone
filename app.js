const closeSelectplanBtn = document.querySelector(".closeselectplan")
const selectplan = document.querySelector(".selectplan")
const notification = document.querySelector(".notification")
const notificationcontents = document.querySelector(".notificationcontents")

// Close Select Plan
closeSelectplanBtn.addEventListener("click", () => {
    selectplan.remove()
})

// Toggle Notification
notification.addEventListener("click", () => {
    notificationcontents.classList.toggle("active")
})