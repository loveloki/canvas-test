import stages from "../stage/index.js";

const buttonGroupDom = document.querySelector("#btn-group");
const tipDom = document.querySelector("#tip");
const canvas = document.querySelector("canvas");
const nodeBtn = document.querySelector("#node");
const skiaBtn = document.querySelector("#skia");

const asideDom = document.querySelector("aside");

const backendImg = document.createElement("img");
asideDom.append(backendImg);

nodeBtn.addEventListener("click", () => {
  backendImg.src = `${window.testName}-node-canvas.png`;
  backendImg.alt = `${window.testName}-node-canvas.png`;
});

skiaBtn.addEventListener("click", () => {
  backendImg.src = `${window.testName}-skia-canvas.png`;
  backendImg.alt = `${window.testName}-skia-canvas.png`;
});

for (const [testName, testFn] of Object.entries(stages)) {
  const button = document.createElement("button");
  button.textContent = testName;

  button.addEventListener("click", () => {
    window.testName = testName;

    canvas.getContext("2d").reset();

    tipDom.textContent = testName;

    testFn(canvas, "web-canvas");
    skiaBtn.click();
  });

  buttonGroupDom.append(button);
}

document.querySelector("button").click();

console.log("module", module);
if (module.hot) {
  module.hot.accept();
}
