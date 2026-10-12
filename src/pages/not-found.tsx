import AsciiPiece from "@/components/AsciiPiece";
import { Button } from "@/components/ui/button";
import * as notFound from "ascii.rest/pieces/not-found";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 px-4">
      <AsciiPiece
        piece={notFound}
        options={{
          code: "404",
          title: "page not found",
          message: "hey there!! this page doesn't exist",
        }}
        label="404, page not found"
        className="text-primary glow-subtle text-[9px] sm:text-xs md:text-sm"
        style={{ lineHeight: 1.2, margin: 0 }}
      />
      <Button variant="outline" asChild className="hover-neon">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
