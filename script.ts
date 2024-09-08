// Toggle Skills Section Visibility
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn") as HTMLButtonElement;
const skillsSection = document.getElementById("skillsSection") as HTMLUListElement;

toggleSkillsBtn.addEventListener("click", () => {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
});
