export interface ICoordinate {
    x: number;
    y: number;
}

export interface ICell {
	position: ICoordinate;
	isAlive?: boolean;
}


