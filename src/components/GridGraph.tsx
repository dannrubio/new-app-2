// GridGraph.tsx
import React, { useMemo } from "react";
import type { GridCell } from "../utils/GridData";
import { getHeatColor } from "../utils/getHeatColor";

interface GridGraphProps {
    grid: GridCell[][];
}

const GridGraph: React.FC<GridGraphProps> = ({ grid }) => {
    const rows = grid.length;
    const columns = grid[0]?.length ?? 0;

    // find max count so we can scale colors
    const maxCount = useMemo(() => {
        let max = 0;
        for (const row of grid) {
            for (const cell of row) {
                if ((cell.count ?? 0) > max) {
                    max = cell.count ?? 0;
                }
            }
        }
        return max;
    }, [grid]);

    return (
        <div style={{ display: "inline-block", fontFamily: "sans-serif" }}>
            {/* X axis labels */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `40px repeat(${columns}, 1fr)`,
                    alignItems: "center",
                    marginBottom: 4,
                    columnGap: 2,
                }}
            >
                <div /> {/* empty corner for y-axis label space */}
                {Array.from({ length: columns }, (_, x) => (
                    <div
                        key={`x-${x}`}
                        style={{ textAlign: "center", fontSize: 12 }}
                    >
                        {x}
                    </div>
                ))}
            </div>

            {/* Y axis + heat grid */}
            <div>
                {grid.map((row, y) => (
                    <div
                        key={`row-${y}`}
                        style={{
                            display: "grid",
                            gridTemplateColumns: `40px repeat(${columns}, 1fr)`,
                            alignItems: "center",
                            columnGap: 2,
                            marginBottom: 2,
                        }}
                    >
                        {/* Y axis label */}
                        <div style={{ textAlign: "right", paddingRight: 4, fontSize: 12 }}>
                            {y}
                        </div>

                        {/* Cells */}
                        {row.map((cell, x) => (
                            <div
                                key={cell.name ?? `${y}-${x}`}
                                title={`(${x}, ${y}) count: ${cell.count ?? 0}`}
                                style={{
                                    width: 24,
                                    height: 24,
                                    backgroundColor: getHeatColor(cell.count ?? 0, maxCount),
                                    border: "1px solid #eee",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 10,
                                    color: "#fff",
                                }}
                            >
                                {cell.count ?? 0}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div style={{ marginTop: 8, fontSize: 12 }}>
                Max count: <strong>{maxCount}</strong>
            </div>
        </div>
    );
};

export default GridGraph;
