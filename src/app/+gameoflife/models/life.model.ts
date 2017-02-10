import { Cell } from './cell.model';
import { IBoard } from './board.model';

export class Life {
	
	private previousBoard: IBoard;
	private height: number;
	private width: number;
	board: IBoard;
	
	constructor(seed: IBoard) {
    this.height = seed.length;
    this.width = seed[0].length;
    this.previousBoard = [];
    this.board = [...seed];
	}

  next(): void {
    this.previousBoard = [...this.board];
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        this.board[y][x] = this.newCellState(this.previousBoard, x, y);
      }
    }
  }

  private newCellState(previousBoard: IBoard, x: number, y: number): Cell {
    let oldCell: Cell = this.previousBoard[y][x];
    let newCell: Cell = new Cell(oldCell.position, { isAlive: oldCell.isAlive });
    let neighbors: number = newCell.getAliveNeighbors(this.previousBoard);
    newCell.isAlive = newCell.isAlive ? neighbors >= 2 && neighbors <= 3 : neighbors === 3;
    return newCell;
  }
}

