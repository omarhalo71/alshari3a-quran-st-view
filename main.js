const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector("form");
const container = document.getElementById("container");


container.style.border = "2px solid red"


container.addEventListener("click", (eo) => {

  
  switch (eo.target.className) {
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;

    case "icon-angry2 icon":
      eo.target.classList.add("dn");
      const heart = `<span class="icon-heart">   </span>`;

      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("finish");

      eo.target.parentElement.innerHTML += heart;
      ;

    case "icon-heart":
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.remove("finish");

      eo.target.classList.add("dn");

      const addAngry = `
<span class="icon-angry2 icon"> </span>
`;

      eo.target.parentElement.innerHTML += addAngry;
      break;

    case "icon-star icon":
      eo.target.classList.add("orange");

      container.prepend(eo.target.parentElement);
      break;

    case "icon-star icon orange":
      eo.target.classList.remove("orange");
      break;
 
  }
});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `   
  
  <div class="task">
  <span class="icon-star icon"> </span>
  <p lang="ar"  class="task-text">      ${input.value}     </p>

  <div>
    <span class="icon-trash icon"> </span>

    <span class="icon-angry2 icon"> </span>
  </div>

 </div>`;

  container.innerHTML += task;

  input.value = "";
});
function saveTasks() {
  localStorage.setItem("tasks", container.innerHTML);
}

function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    container.innerHTML = savedTasks;
  }
}

// استدعاء loadTasks عند تحميل الصفحة
loadTasks();

form.addEventListener("submit", (eo) => {
  // ... (بقية الكود) ...
  saveTasks(); // حفظ المهام بعد إضافة مهمة جديدة
});

container.addEventListener("click", (eo) => {
  // ... (بقية الكود) ...
  saveTasks(); // حفظ المهام بعد أي تعديل (حذف، اكتمال، تمييز)
});