import { useEffect, useRef } from "react";
import { mount, type MountOptions, type Piece } from "ascii.rest";

interface AsciiPieceProps {
  piece: Piece;
  options?: MountOptions;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Plays an ascii.rest piece in a <pre>. Uses mount() directly rather than
// ascii.rest/react, whose load-by-name code makes Vite emit every piece as a chunk.
const AsciiPiece = ({ piece, options, label, className, style }: AsciiPieceProps) => {
  const ref = useRef<HTMLPreElement>(null);
  const optionsKey = JSON.stringify(options ?? {});

  useEffect(() => {
    if (!ref.current) return;
    return mount(ref.current, piece, JSON.parse(optionsKey));
  }, [piece, optionsKey]);

  return (
    <pre
      ref={ref}
      role="img"
      aria-label={label ?? piece.meta.name}
      className={className}
      style={style}
    />
  );
};

export default AsciiPiece;
