'use client';
import React, { useState, useEffect, useMemo } from 'react';
import '../styles/main.scss';
import Header from './Header';
import RangeField from './RangeField';
import Card from './Card';
import Pictogram from './Pictogram';
import GridData, { GridCell } from '../utils/GridData';

const Main: React.FC = () => {
    const [rows, setRows] = useState(1);
    const [columns, setColumns] = useState(1);
    const [grid, setGrid] = useState<GridCell[][]>(() => GridData.generate(rows, columns));    

    useEffect(() => {
        setGrid(GridData.generate(rows, columns));
    }, [rows, columns]);

    const handleCardClick = (rowIndex: number, colIndex: number) => {
        setGrid(prevGrid => GridData.toggle(prevGrid, rowIndex, colIndex));
    };

    return (
        <div>
            <main className="Main">
                <div id="leftHandNav" className='leftHandNav' />
                <div id="mainBody" className='mainBody'>
                    <div className="input">
                        <RangeField min={1} max={10} title='Rows' onChange={(value) => setRows(value)} />
                        <RangeField min={1} max={10} title='Columns' onChange={(value) => setColumns(value)} />
                    </div>
                    <div className="output roundedBox topAligned padding">
                        <div className="container cardGrid"> 
                            {grid.map((row, i) => (
                                <div key={`row-${i}`}>
                                    { row.map((cell, j) => (
                                        <span key={`row-${i} col-${j}`}>
                                            <Card
                                                name={cell.name}
                                                value={cell.value}
                                                on={cell.on}
                                                onClick={() => handleCardClick(i, j)}
                                            />
                                        </span>
                                    )) }
                                </div>
                            ))}
                        </div>
                        <div className="container pictogramGrid"> 
                            {grid.map((row, i) => (
                                <div key={`pict-row-${i}`}>
                                    {row.map(cell => (
                                        <span key={`pict-${cell.name}`}>
                                            <Pictogram 
                                                darkened={cell.on}
                                            />
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Main;