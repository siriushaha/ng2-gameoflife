import { ICell, ICoordinate } from '../interfaces';
import { IBoard } from './board.model';

export class Cell implements ICell {
  
  isAlive?: boolean = false;
  position: ICoordinate;
  
  constructor(position: ICoordinate, options?: any) { 
    this.position = position;
    this.isAlive = options && options.isAlive;
  }

  toggle(): void {
    this.isAlive = !this.isAlive;
  }

  getAliveNeighbors(board: IBoard): number {
    let { y, x } = this.position;
    let prevRow: Array<Cell> = board[y - 1] || [];
    let nextRow: Array<Cell> = board[y + 1] || [];
    let neighbors: Array<Cell> = [
      prevRow[x - 1], prevRow[x], prevRow[x + 1],
      board[y][x - 1], board[y][x + 1],
      nextRow[x - 1], nextRow[x], nextRow[x + 1]
    ];
    return neighbors.reduce((count: number, cell: Cell) => {
      if (cell) {
        return count += +!!cell.isAlive;
      }
      return count += 0;
    }, 0);
  }
  
}
