import { count } from "console";

export interface GridCell {
    name: string;
    value: string;
    on: boolean;
    count?: number;
}

export default class GridData {
    static generate(rows: number, columns: number): GridCell[][] {
        return Array.from({ length: rows }, (_, i) =>
            Array.from({ length: columns }, (_, j) => ({
                name: `row-${i} col-${j}`,
                value: `${i},${j}`,
                on: false,
                count: 0,
            }))
        );
    }

    static toggle(
        grid: GridCell[][],
        rowIndex: number,
        colIndex: number
    ): GridCell[][] {
        return grid.map((row, i) =>
            row.map((cell, j) =>
                i === rowIndex && j === colIndex
                    ? { ...cell, on: !cell.on, count: (cell.count || 0) + 1 }
                    : cell
            )
        );
    }
}
