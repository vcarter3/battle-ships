import { game, readPlayerInput} from "./factories/UI/game";
import "./styles/styles.scss";

const user = readPlayerInput();

const submit = document.querySelector(".details .submit")
submit.addEventListener("click", () => {
    
    if(user.shipsPlaced()){
        console.log("good to go")
    }else{
        console.log(user.shipsPlaced())
    }
    console.log(user.activeCoordinates)
    //return activeCoordinates
})

const random = document.querySelector(".details .random")
random.addEventListener("click", () => {
    console.log("random")
    game();
})



