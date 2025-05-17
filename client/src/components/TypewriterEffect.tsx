import { useEffect, useState, useRef } from "react";

interface TypewriterEffectProps {
  text: string;
  typingSpeed?: number;
}

const TypewriterEffect = ({ text, typingSpeed = 100 }: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const charIndexRef = useRef(0);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    charIndexRef.current = 0;
    setDisplayText("");
    setIsTyping(true);
    
    const typeInterval = setInterval(() => {
      if (!mounted.current) return;
      
      if (charIndexRef.current < text.length) {
        setDisplayText(text.substring(0, charIndexRef.current + 1));
        charIndexRef.current++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, typingSpeed);
    
    return () => {
      clearInterval(typeInterval);
      mounted.current = false;
    };
  }, [text, typingSpeed]);

  return (
    <span className={isTyping ? "typewriter" : ""}>
      {displayText}
    </span>
  );
};

export default TypewriterEffect;
