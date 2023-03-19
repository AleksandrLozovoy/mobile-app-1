const dom = {
  selectbox: document.getElementById("selectbox"),
  selectboxList: document.querySelector(".selectbox__list"),
  rooms: document.getElementById("rooms"),
};

const rooms = {
  all: "Все комнаты",
  livingroom: "Зал",
  bedroom: "Спальня",
  kitchen: "Кухня",
  bathroom: "Ванная",
  studio: "Кабинет",
  washingroom: "Уборная",
};

// Выпадающий список
dom.selectbox
  .querySelector(".selectbox__selected")
  .addEventListener("click", (event) => {
    dom.selectbox.classList.toggle("open");
  });
console.log(dom);

document.body.addEventListener("click", (event) => {
  const { target } = event;
  if (
    !target.matches(".selectbox") &&
    !target.parentElement.matches(".selectbox") &&
    !target.parentElement.parentElement.matches(".selectbox")
  ) {
    dom.selectbox.classList.remove("open");
  }
});

dom.selectboxList.addEventListener("click", (event) => {
  const { target } = event;
  if (target.matches(".selectbox__item")) {
    const room = target.dataset.room;
    const selectedItem = dom.selectboxList.querySelector(".selected");
    dom.selectbox.classList.remove("open");
    selectedItem.classList.remove("selected");
    target.classList.add("selected");
    selectRoom(room);
  }
});

// Выбор комнаты
function selectRoom(room) {
  const selectedRoom = dom.rooms.querySelector(".selected");
  const SelectedSelectboxRoom = dom.selectbox.querySelector(
    ".selectbox__item.selected"
  );
  const newSelectedItem = dom.selectbox.querySelector(`[data-room=${room}]`);

  if (selectedRoom) {
    selectedRoom.classList.remove("selected");
  }

  if (room !== "all") {
    const newSelectedRoom = dom.rooms.querySelector(`[data-room=${room}]`);
    newSelectedRoom.classList.add("selected");
  }

  SelectedSelectboxRoom.classList.remove("selected");
  newSelectedItem.classList.add("selected");
  const selectBoxSelected = dom.selectbox.querySelector(
    ".selectbox__selected span"
  );
  selectBoxSelected.innerText = rooms[room];
}

dom.rooms.querySelectorAll(".room").forEach((room) => {
  room.addEventListener("click", (event) => {
    const value = room.dataset.room;
    selectRoom(value);
  });
});
