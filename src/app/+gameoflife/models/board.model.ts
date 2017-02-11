import { ICoordinate, ICell } from '../interfaces';
import { Cell } from './cell.model';

export type IBoard = Cell[][];

export class Board {
	
	static generate(size: number): IBoard {
    let newBoard: IBoard = [];
    for (let y = 0; y < size; y++) {
      newBoard[y] = [];
      for (let x = 0; x  < size; x++) {
      	let position: ICoordinate = { y: y, x: x};
        newBoard[y][x] = new Cell(position);
      }
    }
    return newBoard;
	}
	
	static copyBoard(board: IBoard) : IBoard {
    let newBoard: IBoard = [];
    let size = board.length;
    for (let i=0; i < size; i++) {
      newBoard[i] = [...board[i]];
    }
    return newBoard;
  }

}

