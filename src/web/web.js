import stages from "../stage/index.js";

const buttonGroupDom = document.querySelector("#btn-group");
const tipDom = document.querySelector("#tip");
const canvas = document.querySelector("canvas");

for (const [testName, testFn] of Object.entries(stages)) {
  const button = document.createElement("button");
  button.textContent = testName;
  button.addEventListener("click", () => {
    canvas.getContext("2d").reset();

    tipDom.textContent = testName;

    testFn(canvas, "web-canvas");
  });

  buttonGroupDom.append(button);
}

document.querySelector("button").click();
