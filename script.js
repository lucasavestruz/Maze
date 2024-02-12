button.addEventListener('click'()) => {
    fargeOvergang = document.querySelector('fargeOvergang-input').value;
    selection.style.background

}

const canvas = document.getElementById("mazeCanvas");
        const ctx = canvas.getContext("2d");

        const rows = 20;
        const cols = 20;
        const cellSize = canvas.width / cols;

        const maze = generateMaze(rows, cols);
        drawMaze(maze);

        function generateMaze(rows, cols) {
            const maze = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

            // Set random walls
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    maze[i][j] = Math.random() < 0.3 ? 1 : 0;
                }
            }

            // Set start and end points
            maze[0][0] = 0;
            maze[rows - 1][cols - 1] = 0;

            return maze;
        }

        function drawMaze(maze) {
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (maze[i][j] === 1) {
                        ctx.fillStyle = "black";
                        ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
                    } else {
                        ctx.fillStyle = "white";
                        ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
                    }
                }
            }
        }

