import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";

import "./styles/resets.scss"
import "./styles/base.scss"
import "./styles/header.scss"
import "./styles/form.scss"
import "./styles/footer.scss"

// console.log(checkForName);

// console.log("CHANGE!!");

// if ("serviceWorker" in navigator){
//     window.addEventListener("load", () => 
//         navigator.serviceWorker.register("/service-worker.js")
//     )
    
// }


export { checkForName, handleSubmit };
