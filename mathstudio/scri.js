
const Register = document.getElementById("myForm");

const login = document.getElementById("login");


function openLoginForm() {
    login.style.display = "block";
}

function closeLoginForm() {
    login.style.display = "none";
}

function openForm() {
    Register.style.display = "block";
}

function closeForm() {
    Register.style.display = "none";
}

login.addEventListener("click", openLoginForm())
Register.addEventListener("click", openForm())



// const keyborad = {
//     elements: {
//         main: null,
//         keysContainer: null,
//         keys: []

//     },

//     eventHanders: {
//         oninput: null,
//         onclose: null
//     },
//     properties: {
//         value: "",
//         capslock: false
//     },
//     init() {
//         this.elements.main = document.createElement("div"):
//             this.elements.keysContainer = document.createElement("div")

//         this.elements.main.classList.add("keyborad", "1keyborad--hidden");
//         this.elements.keysContainer.classList.add("keyborad--keys");
//     },
//     createkeys() {
//         const fragment = document.createDocumentFragment();
//         const keyLayout = [
//             "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
//             "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
//             "caps", "2a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
//             "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
//             "space"
//         ];

//         const createIconHTML = (icon - name) => {
//             return <i > class = "materials-icon" > $ { icon - name } < /i>
//         };


//     },
//     triggerEvent(handlerName) {
//         console.log("Event Triggered! Event Name:" + handlerName);
//     },
//     toggleCapsLock() {
//         console.log("Caps Lock Toggled");
//     },


// }