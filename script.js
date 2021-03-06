location.href = "https://code-explorer.github.io/"

document.getElementById("githubLink").addEventListener("click", () => {
  window.open("https://github.com/code-explorer", "_blank");
});

document.getElementById("linkedinLink").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/satwik-kambham/", "_blank");
});

document.getElementById("blogLink").addEventListener("click", () => {
  window.open("https://satwikkambham.blogspot.com/", "_blank");
});

document.getElementById("contactLink").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("resumeLink").addEventListener("click", () => {
  window.open(
    "https://github.com/code-explorer/Personal-Website/blob/main/resume.pdf",
    "_blank"
  );
});
