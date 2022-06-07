import React, { FC } from 'react'
import { Cell } from '../models/Cell'

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({ cell,selected, click }) => {
    return (
        <div className={['cell', cell.color, selected? 'selected': 'null'].join(' ')} onClick={() => click(cell)}
            style={{background: cell.avaliable && cell.figure ? 'rgb(18, 221, 18)' : ''}}
        >
            {cell.avaliable && !cell.figure && <div className={'avaliable'}/>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
        </div>
    )
}

export default CellComponent