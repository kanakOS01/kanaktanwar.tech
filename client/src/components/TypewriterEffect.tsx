import { useEffect, useState, useRef } from "react";

interface TypewriterEffectProps {
  text: string;
  typingSpeed?: number;
}

const TypewriterEffect = ({ text, typingSpeed = 100 }: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    let charIndex = 0;
    
    if (isTyping) {
      const typeInterval = setInterval(() => {
        if (!mounted.current) return;
        
        if (charIndex < text.length) {
          setDisplayText(prev => prev + text.charAt(charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, typingSpeed);
      
      return () => {
        clearInterval(typeInterval);
        mounted.current = false;
      };
    }
  }, [text, typingSpeed, isTyping]);

  return (
    <span className={isTyping ? "typewriter" : ""}>
      {displayText}
    </span>
  );
};

export default TypewriterEffect;
