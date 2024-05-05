/*
Copyright 2024 DolmaAndKebab

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

document.addEventListener("DOMContentLoaded", () => {

  function AddItemToStorage(Key, value) {
    localStorage.setItem(Key,value);
  }

  function RemoveItemFromStorage(Key) {
    localStorage.removeItem(Key);
  }

  function List_All_Items_From_Storage() {
    return Object.keys(localStorage);
  }

  function Storage_Has_Items() {
    return Object.keys(localStorage).length > 0 ? true : false;
  }

  function Storage_Clear() {
    const Storage_Keys = Object.keys(localStorage);

    Storage_Keys.forEach((Key) => {
      localStorage.removeItem(Key.toString());
    })

    return Object.keys(localStorage).length > 0 ? true : false;
  }

  function AddItem(Container, Remove_btn) {
    const Requested_User_Input = document.getElementById("Input");
    if (Container instanceof HTMLElement) {

      // Creating Elements
      const User_Input = document.createElement("input");

      User_Input.classList.add("form-control");
      User_Input.value = Requested_User_Input.value;

      if (Remove_btn instanceof HTMLElement) {
        Remove_btn.classList.add("btn");
        Remove_btn.classList.add("btn-danger");
        Remove_btn.type = "button";

        Remove_btn.innerHTML = "Remove";
      }

      // Appending Elements
      Container.appendChild(User_Input);
      Remove_btn instanceof HTMLElement ? Container.appendChild(Remove_btn) : null;
    }
  }

  function RemoveItem(Container) {
    if (Container instanceof HTMLElement) {Container.remove()};
  }

  function HandleCreateBtn(Element) {
    if (Element instanceof HTMLElement) {
      Element.addEventListener("click", () => {

        // Creating Item Container
        const Item_Container = document.createElement("div");

        Item_Container.classList.add("Row-Align");

        // Creating Item Remove button
        const Item_Remove_btn = document.createElement("button");

        // Adding Item into Item Container
        AddItem(Item_Container, Item_Remove_btn);

        // Appending Item Container
        document.getElementById("List").appendChild(Item_Container);

      })
    }
  }

  function HandleRemoveBtn(Element) {
    if (Element instanceof HTMLElement) {
      Element.addEventListener("click", () => {

      })
    }    
  }
  
  HandleCreateBtn(document.getElementById("Create"));
  HandleRemoveBtn(document.getElementById("Remove"));
   

});
