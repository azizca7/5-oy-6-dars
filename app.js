// 1. Forma asosida dinamik jadval yaratish

const form1 = document.getElementById("userForm");

form1 &&
  form1.addEventListener("submit", function (event) {
    event.preventDefault();
    const ism = document.getElementById("ism").value;
    const familiya = document.getElementById("familiya").value;
    const email = document.getElementById("email").value;

    if (!ism || !familiya || !email) {
      alert("Ism, familiya va emailni kiriting!");
      return;
    }

    const table = document
      .getElementById("dataTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
                <td>${ism}</td>
                <td>${familiya}</td>
                <td>${email}</td>
                <td><button onclick="deleteRow(this)">O'chirish</button></td>
            `;
  });

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.remove();
}

// 2. Rang tanlash paneli va jonli ko‘rinish

const form2 = document.getElementById("colorForm");
const colorInput = document.getElementById("colorPicker");
const textInput = document.getElementById("textInput");
const newDiv = document.getElementById("newDiv");

form2 &&
  form2.addEventListener("input", function (event) {
    event.preventDefault();
    newDiv.style.backgroundColor = event.target.value;

    newDiv.textContent = textInput.value;
  });

// 3. To‘ldirilmagan maydonlarni belgilash

const form3 = document.getElementById("designationForm");

form3 &&
  form3.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputs = document.querySelectorAll(".input");

    inputs.forEach((input) => {
      if (input.value.trim() == "") {
        input.style.border = "2px solid red";
      } else {
        input.style.border = "2px solid green";
      }
    });
  });

// 4. Qidiruv natijalarini dinamik ko‘rsatish

const form4 = document.getElementById("searchForm");

form4 &&
  form4.addEventListener("input", function (event) {
    event.preventDefault();

    const searchInput = document.getElementById("search").value.toLowerCase();
    const tableRows = document.querySelectorAll("#datatable tbody tr");

    tableRows.forEach((row) => {
      const rowText = row.textContent.toLowerCase();
      if (rowText.includes(searchInput)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });

// 5. Dynamic Element Yaratish

const form5 = document.getElementById("createForm");

form5 &&
  form5.addEventListener("submit", function (event) {
    event.preventDefault();

    const elementTypeInput = document
      .getElementById("elementType")
      .value.trim();
    const elementTextInput = document
      .getElementById("elementText")
      .value.trim();
    const resultContainer = document.getElementById("resultContainer");

    if (!elementTypeInput || !elementTextInput) {
      alert("Iltimos maydonlarni to'ldiring!");
      return;
    }

    const validElementTypes = ["div", "p", "h1", "span"];
    if (!validElementTypes.includes(elementTypeInput.toLowerCase())) {
      alert("Faqat mavjud element turlarini kiriting: (div, p, h1, span)");
      return;
    }

    const newElement = document.createElement(elementTypeInput);
    newElement.textContent = elementTextInput;

    newElement.style.padding = "10px";
    newElement.style.border = "2px solid black";
    newElement.style.backgroundColor = "yellow";
    newElement.style.margin = "10px";
    newElement.style.width = "fit-content";

    resultContainer.appendChild(newElement);

    elementTypeInput.value = "";
    elementTextInput.value = "";
  });

// 7. Interaktiv ishlar ro‘yxati (To-Do List)

const form7 = document.getElementById("todoForm");

form7 &&
  form7.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoInput = document.getElementById("todoInput").value.trim();
    const todoList = document.getElementById("todoList");

    if (todoInput !== "") {
      const todoItem = document.createElement("li");
      todoItem.classList.add("todo-item");

      const textNode = document.createElement("span");
      textNode.textContent = todoInput;

      todoItem.appendChild(textNode);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "O‘chirish";
      deleteButton.addEventListener("click", function () {
        todoList.removeChild(todoItem);
      });
      todoItem.appendChild(deleteButton);

      todoList.appendChild(todoItem);
      document.getElementById("todoInput").value = "";
    } else {
      alert("Iltimos, ishni kiriting.");
    }
  });

//  8. Shaxsiylashtirilgan salomlashuv yaratish

const form8 = document.getElementById("salomlashuvForm");

form8 &&
  form8.addEventListener("submit", function (event) {
    event.preventDefault();

    let ism = document.getElementById("name").value;
    let jins = document.getElementById("jins").value;
    const salomText = document.getElementById("salomText");

    if (jins === "erkak") {
      salomText.textContent = `Assalomu alaykum ${ism}!`;
    } else if (jins === "ayol") {
      salomText.textContent = `Salom ${ism}! `;
    }
  });

// 9. Jonli hisoblagich

const form9 = document.getElementById("hisobForm");

form9.addEventListener("input", function (event) {
  event.preventDefault();

  let num1 = parseFloat(document.getElementById("num1").value) || 0;
  let num2 = parseFloat(document.getElementById("num2").value) || 0;
  let operatsiya = document.getElementById("operatsiya").value;
  let natija = 0;

  switch (operatsiya) {
    case "qoshish":
      natija = num1 + num2;
      break;
    case "ayirish":
      natija = num1 - num2;
      break;
    case "kopaytirish":
      natija = num1 * num2;
      break;
    case "bolish":
      natija = num2 !== 0 ? num1 / num2 : "Nolga bo'lib bolmaydi";
      break;
  }

  document.getElementById("natija").textContent = "Natija: " + natija;
});
