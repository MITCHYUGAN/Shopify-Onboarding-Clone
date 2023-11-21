const closeSelectplanBtn = document.querySelector(".closeselectplan")
const selectplan = document.querySelector(".selectplan")

closeSelectplanBtn.addEventListener("click", () => {
    selectplan.remove()
})