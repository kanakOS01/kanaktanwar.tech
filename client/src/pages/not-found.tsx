import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4 border border-dashed border-primary/50 relative hover-neon transition-all duration-300 group">
        <div className="absolute top-[-5px] left-[10px] bg-background text-primary px-1 text-sm glow group-hover:bg-background">404 Page Not Found</div>
        <CardContent className="pt-10 space-y-4">
          <p className="text-muted-foreground">
            Hey there!! You've stumbled upon a page that doesn't exist.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
