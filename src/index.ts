import { game} from "./factories/UI/game";
import { readPlayerInput } from "./factories/UI/readPlayer";

import "./styles/styles.scss";

const user = readPlayerInput();

const submit = document.querySelector(".details .submit");
const random = document.querySelector(".details .random");
const placeShipsBoard = <HTMLElement> document.querySelector(".placeShips");
const instructions = <HTMLElement> document.querySelector(".instructions");

submit.addEventListener("click", () => {
    if(user.shipsPlaced()){
        placeShipsBoard.style.display="none";
        game(user.getStarts(), user.getDirection());
    }else{
        instructions.classList.add("invalid");
        setTimeout(()=> instructions.classList.remove("invalid"), 200)
    }
})

random.addEventListener("click", () => {
    placeShipsBoard.style.display="none";
    game([],[]);
})



