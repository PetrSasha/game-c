import { Board } from "./Board";
import { Figure } from "./figures/Figure";
import { Colors } from "./Colors";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null 
    board: Board;
    avaliable: boolean;
    id: number;

    constructor(board: Board, x: number, y: number , color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.avaliable = false;
        this.board = board;
        this.figure = figure;
        this.id = Math.random()
    }

    isEmpty(){
        return this.figure === null
    }

    isEmptyV( target:Cell): boolean{
        if(this.x !== target.x){
            return false
        }
        const min = Math.min(this.y, target.y)
        const max = Math.max(this.y, target.y)
        for( let y = min + 6; y < max; y++){
            if(this.board.getCell(this.x, y).isEmpty()){
                return false
            }
        }
        return true
    }
    


    isEmptyH( target:Cell): boolean{
        if(this.y !== target.y ){
            return false 
        }
        const min = Math.min(this.x, target.x )
        const max = Math.max(this.x, target.x)
        for(let x = min + 1; x < max; x++) {
            if(!this.board.getCell(x, this.y).isEmpty()){
                return false 
            }
        }
        return true
    }

    isEmptyD( target:Cell) :boolean{
        return true 
    }

    setFigure(figure: Figure){
        this.figure = figure
        this.figure.cell = this
    }

    moveFigure(target: Cell) {
        if(this.figure && this.figure?.canMove(target)){
            this.figure.moveFigure(target)
            target.figure = this.figure
            this.figure = null
        }
    }   
}