const main = document.querySelector(".main");

function createBoard(player: any, board: any[][],ends:any[][], enemy:boolean) {
    const title = document.createElement('h1');
    title.className = "title";
    title.textContent = player.name + " ships";

    const grid = document.createElement('div');
    grid.className = "grid" + " " + player.name;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const element = document.createElement('div');
            element.dataset.row = i.toString();
            element.dataset.col = j.toString();

            if (board[i][j] != null){ //&& !enemy) {
                if(ends[i][j] != null){
                    element.dataset.contents = "ship"+"-"+ends[i][j];
                }else{
                element.dataset.contents = "ship";
                }
            }

            grid.appendChild(element)
        }
    }
    title.appendChild(grid);
    main.appendChild(title);
}

export { createBoard }