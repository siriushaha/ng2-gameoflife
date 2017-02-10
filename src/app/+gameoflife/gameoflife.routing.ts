import { Routes, RouterModule } from '@angular/router';
import { GameOfLifeComponent } from './gameoflife.component';

export const gameoflifeRoutes: Routes = [
    {
        path: '',
        component: GameOfLifeComponent,
        data: {
            pageTitle: 'Game of Life'
        }
    }
];

export const gameoflifeRouting = RouterModule.forChild(gameoflifeRoutes);

