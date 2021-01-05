// const newTask = document.querySelector("#txt_task");
// const taskList = document.querySelector("#my-list");

// const tasks = [];

// document.querySelector(".btn_submit").addEventListener("click", function (e) {
//   e.preventDefault();
//   let html = "";
//   clearhtml();
//   html += `<li>${newTask.value}</li>`;
//   tasks.push({ task: newTask.value });
//   taskList.insertAdjacentHTML("afterend", html);
//   clearTextArea();
// });

// const clearTextArea = () => {
//   newTask.value = "";
// };

// const clearhtml = () => {
//   taskList.innerHTML = "";
// };
const inputTask = document.querySelector(".form-control");
const btnDone = document.querySelector("#checkAll");
const taskList = document.querySelector("#sortable");
const tasks = [];
btnDone.addEventListener("click", function (e) {
  e.preventDefault();
  let html = "";
  clearhtml();
  html += `<li class="ui-state-default">
  <div class="checkbox">
    <label>
      <input type="checkbox" value="" />${inputTask.value}</label
    >
  </div>
</li> `;
  tasks.push({ task: inputTask.value });
  taskList.insertAdjacentHTML("afterend", html);
  clearTextArea();
});
const clearTextArea = () => {
  inputTask.value = "";
};

const clearhtml = () => {
  taskList.innerHTML = "";
};
