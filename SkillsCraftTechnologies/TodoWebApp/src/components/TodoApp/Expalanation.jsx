
// Code ka Breakdown:
// 1. State Variables
// javascript
// Copy code

// const [inputValue, setInputValue] = useState();
// const [items, setItems] = useState([]);

// inputValue: Yeh state user ke input ko track karne ke liye hai (jo user text input field me likhta hai).
// items: Yeh state todo items ki list ko track karne ke liye hai.


// 2. addItem Function
// javascript
// Copy code
// const addItem = () => {
//   console.log(inputValue);
//   if (inputValue) {
//     setItems([...items, inputValue]);
//     console.log(items);
//     setInputValue('');
//     return;
//   }
// };


// Purpose: Naya todo item list me add karta hai.
// Working:
// inputValue ko check karta hai (agar khali nahi hai).
// setItems([...items, inputValue]):
// Pehle se existing items ke saath nayi value (inputValue) ko merge karta hai.
// setInputValue(''): Input field ko khali kar deta hai.
// 3. deleteAllItem Function
// javascript
// Copy code
// const deleteAllItem = () => {
//   setItems([]);
//   setInputValue('');
//   alert('All todo list are deleted...');
// };
// Purpose: Poore list ko delete karta hai.
// Working:
// setItems([]) state ko empty array banata hai (saare items hata deta hai).
// setInputValue('') input field ko reset kar deta hai.
// Ek alert show karta hai: "All todo list are deleted..."
// 4. deleteSingleItem Function
// javascript
// Copy code
// const deleteSingleItem = (index) => {
//   const filterAllItems = items.filter((e, i) => {
//     return index !== i;
//   });
//   setItems(filterAllItems);
// };
// Purpose: Ek specific todo item ko delete karta hai.
// Working:
// items.filter: List ke har item ko check karta hai.
// Sirf un items ko return karta hai jin ka index (i) delete hone wale index (index) ke barabar nahi hai.
// setItems(filterAllItems): Updated list ko state me save karta hai.
// 5. EditSingleItem Function
// javascript
// Copy code
// const EditSingleItem = (index) => {
//   console.log(index);
//   const editPrompt = prompt('Edit your todo: ', items[index]);
//   if (editPrompt) {
//     items[index] = editPrompt;
//     setItems([...items]);
//   }
//   console.log(items);
// };
// Purpose: Ek specific todo item ko edit karta hai.
// Working:
// prompt: User se updated value mangta hai (default value wo hoti hai jo abhi list me hai).
// Edit Logic:
// items[index] = editPrompt: Selected item ko update karta hai.
// setItems([...items]): State ko re-render karne ke liye updated list save karta hai.
// 6. Rendered Output (return)
// javascript
// Copy code
// return (
//   <>
//     <h1>Todo App</h1>
//     <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
//     <button onClick={addItem}>Add todo</button>
//     <button onClick={deleteAllItem}>Delete All todo</button>

//     {items.map((e, i) => {
//       return (
//         <div key={i}>
//           {e}
//           <button onClick={() => deleteSingleItem(i)}>Delete</button>
//           <button onClick={() => EditSingleItem(i)}>Edit</button>
//         </div>
//       );
//     })}
//   </>
// );
// <input> Field:

// User ke input ko setInputValue ke zariye state me save karta hai.
// Value ko dynamically inputValue ke saath bind karta hai.
// Add Button:

// addItem function ko trigger karta hai.
// Naya todo list me add karta hai.
// Delete All Button:

// deleteAllItem function ko trigger karta hai.
// Saare items delete karta hai aur ek alert show karta hai.
// Todo List Display:

// items.map: Har item ko loop karke render karta hai.
// Har item ke liye:
// Ek Delete button hota hai jo us item ko delete karta hai.
// Ek Edit button hota hai jo us item ko edit karta hai.
// Output Example:
// Initial State:

// Input field empty hoti hai.
// List me koi todo nahi hota.
// Adding Todos:

// User "Namaz", "Quran", aur "Dua" add karta hai.
// List ban jati hai:
// Namaz
// Quran
// Dua
// Editing Todo:

// User "Quran" edit karta hai aur "Zikr" likhta hai.
// Updated list:
// Namaz
// Zikr
// Dua
// Deleting a Single Todo:

// "Dua" ko delete karta hai.
// Updated list:
// Namaz
// Zikr
// Deleting All Todos:

// "Delete All" button click karta hai.
// List empty ho jati hai aur alert show hota hai.
// Summary:
// Features:
// Nayi todo add karna.
// Ek specific todo edit karna.
// Ek specific todo delete karna.
// Saare todos ek sath delete karna.
// React ka Role: State (items aur inputValue) ko update karke UI dynamically re-render karta hai.



