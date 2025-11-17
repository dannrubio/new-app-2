export interface GridCell {
    name: string;
    value: string;
    on: boolean;
}

export default class GridData {
    static generate(rows: number, columns: number): GridCell[][] {
        return Array.from({ length: rows }, (_, i) =>
            Array.from({ length: columns }, (_, j) => ({
                name: `row-${i} col-${j}`,
                value: `${i},${j}`,
                on: false,
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
                    ? { ...cell, on: !cell.on }
                    : cell
            )
        );
    }
}
