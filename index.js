const SIZE_BLOCK = 35;

// механика

const game = {
  area: [
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','o','o','o','o','o','o','o','o'],
		['o','o','x','o','o','o','o','o','o','o'],
		['o','o','x','o','o','o','o','o','o','x'],
		['x','x','x','x','o','o','x','x','o','x'],
		['x','x','x','x','x','x','x','x','x','x'],
	],

	activeTetromino: {
		x: 3,
		y: 0,
		block: [
			['o', 'x', 'x'],
			['o', 'x', 'o'],
			['o', 'x', 'o'],
		]
	},
	
	moveLeft() {
		this.activeTetromino.x -= 1
	},

	moveRight() {
		this.activeTetromino.x += 1
	},

	moveDown() {
		this.activeTetromino.y += 1
	},

	rotateTetromino() {
	},

	get viewArea() {
		const area = JSON.parse(JSON.stringify(this.area));
		const {x, y, block: tetromino} = this.activeTetromino;

		for (let i = 0; i < tetromino.length; i++) {
			const row = tetromino[i];
			for (let j = 0; j < row.length; j++) {
				if(row[j] === 'x') {
					area[y + i][x + j] = tetromino[i][j];
				}
			}
		}
		return area;
	}
}

game.moveDown();
game.moveDown();
game.moveDown();
game.moveDown();
game.moveDown();
game.moveDown();
game.moveDown();
game.moveDown();
game.moveDown();
game.moveDown();
game.moveDown();
game.moveDown();
game.moveRight();
game.moveRight();
game.moveRight();
game.moveRight();
game.moveDown();
game.moveDown();
game.moveDown();



// отрисовка
const container = document.querySelector('.container');
const canvas = document.createElement('canvas');
canvas.classList.add('game-area');
container.append(canvas);
canvas.width = SIZE_BLOCK * 10;
canvas.height = SIZE_BLOCK * 20;

const context = canvas.getContext('2d');

const showArea = area => {
	for (let y = 0; y < area.length; y++) {
		const line = area[y];

		for (let x = 0; x < line.length; x++) {
			const block = line[x];
			if(block === 'x') {
				context.fillStyle = 'green';
				context.strokeStyle = 'gold';
				context.fillRect(x * SIZE_BLOCK , y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
				context.strokeRect(x * SIZE_BLOCK , y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
			}
		}
	}
};

showArea(game.viewArea);