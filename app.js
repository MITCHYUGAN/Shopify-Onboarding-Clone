const closeSelectplanBtn = document.querySelector(".closeselectplan")
const selectplan = document.querySelector(".selectplan")
const notification = document.querySelector(".notification")
const alerts = document.querySelector(".alerts")

// Close Select Plan
closeSelectplanBtn.addEventListener("click", () => {
    selectplan.remove()
})

// Toggle Notification
notification.addEventListener("click", () => {
    alerts.classList.toggle("active")
})