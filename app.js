const textareaEl = document.getElementById("textarea");
const spansContainerEl = document.getElementById("choices");

console.log(textareaEl);

function createTags(e) {
  const inputData = e.target.value;

  const inputSplitted = inputData
    .split(",")

    .filter((inputData) => {
      return inputData.trim() !== "";
    })
    .map((inputData) => {
      return inputData.trim();
    });

  spansContainerEl.innerHTML = "";
  for (const tag of inputSplitted) {
    const span = document.createElement("span");
    span.textContent = tag;
    spansContainerEl.appendChild(span);
  }

  if (e.key === "Enter") {

   const randomSpan = randomSpanPick();

   console.log(randomSpan);

  }
}

textareaEl.addEventListener("keyup", createTags);

function randomSpanPick(){
    const spans = document.querySelectorAll('span');

    return spans[Math.floor(Math.random() * 3)];

    // console.log(spans[Math.floor(Math.random * 3)]);
}

