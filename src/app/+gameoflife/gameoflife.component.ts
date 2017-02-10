import { Component, OnInit } from '@angular/core';

import { Life, Cell, Board, IBoard, initialSeed } from './models';

@Component({
  selector: 'app-gameoflife',
  templateUrl: './gameoflife.component.html',
  styleUrls: ['./gameoflife.component.less']
})
export class GameOfLifeComponent implements OnInit {

  thumbs: any;
  interval: number;
  timer: any = undefined;
  isStarted: boolean = false;
  board: Cell[][];
  life: Life;
  
  constructor() { 
    this.thumbs = [];
    this.interval = 300;
  }

  ngOnInit() {
    this.reset();
    this.life = new Life(initialSeed);
    this.board = this.life.board;
    console.log(this.life)
    console.log(this.board)
    this.togglePlay();

  }

  togglePlay(): void {
    if (!this.isStarted && this.timer) { 
      clearInterval(this.timer);
      this.isStarted = false;
      return;
    }
    this.isStarted = true;
    this.timer = setInterval(() => this.life.next(), this.interval);
  }

  save(): void{
    let board: IBoard = [...this.board];;
    console.log(board);
    this.thumbs.push(board);
  }

  load(seed: IBoard): void {
    this.reset();
    this.life = new Life(seed);
    this.board = this.life.board;
  }

  reset(): void {
    if (this.isStarted) this.togglePlay();
    let seed = Board.generate(15);
    this.life = new Life(seed);
    this.board = this.life.board;
    this.isStarted = false;
  }

}



