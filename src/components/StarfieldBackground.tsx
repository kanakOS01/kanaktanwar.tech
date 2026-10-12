import { useEffect, useMemo, useState } from "react";
import type { Piece } from "ascii.rest";
import AsciiPiece from "@/components/AsciiPiece";

const FONT_SIZE = 12;
const LINE_HEIGHT = 1.4;
const CHAR_WIDTH = 0.6; // monospace glyph width in em
const DENSITY = 1 / 90; // stars per cell

const mulberry32 = (a: number) => () => {
  a = (a + 0x6d2b79f5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// A still night sky sized to the viewport: each star fades slowly in and out on
// its own rhythm, and a few brighter ones swell from "." through "+" to "*".
const nightSky = (cols: number, rows: number): Piece => {
  const rand = mulberry32(42);
  const stars = Array.from({ length: Math.round(cols * rows * DENSITY) }, () => ({
    cell: Math.floor(rand() * rows) * cols + Math.floor(rand() * cols),
    phase: rand() * Math.PI * 2,
    rate: 0.3 + rand() * 0.7, // radians per second, so one twinkle every ~6-20s
    bright: rand() < 0.12,
  }));

  return {
    meta: { name: "night sky", category: "space", note: "faint stars twinkling", cols, rows, fps: 6 },
    default: () => (t) => {
      const grid = new Array<string>(cols * rows).fill(" ");
      for (const s of stars) {
        const b = 0.5 + 0.5 * Math.sin(t * s.rate + s.phase);
        if (s.bright) grid[s.cell] = b > 0.85 ? "*" : b > 0.5 ? "+" : ".";
        else if (b > 0.25) grid[s.cell] = b > 0.9 ? "·" : ".";
      }
      let out = "";
      for (let r = 0; r < rows; r++) out += grid.slice(r * cols, (r + 1) * cols).join("") + "\n";
      return out;
    },
  };
};

const gridSize = () => ({
  cols: Math.ceil(window.innerWidth / (FONT_SIZE * CHAR_WIDTH)),
  rows: Math.ceil(window.innerHeight / (FONT_SIZE * LINE_HEIGHT)),
});

export const StarfieldBackground = () => {
  const [size, setSize] = useState(gridSize);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setSize(gridSize()), 200);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const piece = useMemo(() => nightSky(size.cols, size.rows), [size.cols, size.rows]);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <AsciiPiece
        piece={piece}
        className="text-primary/25"
        style={{ margin: 0, fontSize: FONT_SIZE, lineHeight: LINE_HEIGHT }}
      />
    </div>
  );
};
