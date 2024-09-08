// Toggle Skills Section Visibility
var toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
var skillsSection = document.getElementById("skillsSection");
toggleSkillsBtn.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    }
    else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
});
