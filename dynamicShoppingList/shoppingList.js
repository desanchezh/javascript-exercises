const shoppingList = document.querySelector("#shoppingList");
const input = document.querySelector("#item");
const button = document.querySelector("button");

function addItem () {
    
    const newItem = input.value;
    input.value = "";

    const itemBullet = document.createElement("li");
    const text = document.createElement("span");
    const deleteButton = document.createElement("button");

    itemBullet.appendChild(text);
    text.textContent = newItem;
    itemBullet.appendChild(deleteButton);
    deleteButton.textContent = "Delete";
    shoppingList.appendChild(itemBullet)

    deleteButton.addEventListener("click", () => {
        shoppingList.removeChild(itemBullet)
    })
    
}

button.addEventListener("click", addItem);