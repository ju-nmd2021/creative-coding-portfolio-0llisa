const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const githubLink = document.getElementById("github");
const nameText = document.getElementById("name");
const descriptionText = document.getElementById("description");
const backgroundText = document.getElementById("background");
const p5container = document.getElementById("p5container");

let currentExperiment = 0;
let experiments = [];

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    experiments = data;
    if (experiments.length > 0) {
      goToExperiment(0);
    }
  });

function goToExperiment(index) {
  const experiment = experiments[index];
  if (!experiment) {
    return;
  }
  p5container.innerHTML = "";

  const iframe = document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";

  const bodyElement = document.createElement("div");

  const p5script = document.createElement("script");
  p5script.type = "text/javascript";
  p5script.src = "assets/p5.min.js";
  p5script.defer = true;
  bodyElement.appendChild(p5script);

  const codeScript = document.createElement("script");
  codeScript.type = "text/javascript";
  codeScript.src = experiment.file;
  codeScript.defer = true;
  bodyElement.appendChild(codeScript);

  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "assets/iframe.css";
  bodyElement.appendChild(styleLink);

  iframe.srcdoc = bodyElement.innerHTML;
  p5container.appendChild(iframe);
  iframe.style.zIndex = "-100";

  nameText.innerText = experiment.name;
  descriptionText.innerText = experiment.description;
  backgroundText.innerText = experiment.background;
  githubLink.href = experiment.github;
}

nextButton.addEventListener("click", () => {
  currentExperiment++;
  if (currentExperiment >= experiments.length) {
    currentExperiment = 0;
  }
  goToExperiment(currentExperiment);
});

prevButton.addEventListener("click", () => {
  currentExperiment--;
  if (currentExperiment < 0) {
    currentExperiment = experiments.length - 1;
  }
  goToExperiment(currentExperiment);
});
