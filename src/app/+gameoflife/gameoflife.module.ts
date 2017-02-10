import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gameoflifeRouting } from './gameoflife.routing';
import { GameOfLifeComponent } from './gameoflife.component';

@NgModule({
  imports: [
    CommonModule,
    gameoflifeRouting
  ],
  declarations: [GameOfLifeComponent]
})
export class GameOfLifeModule { }
