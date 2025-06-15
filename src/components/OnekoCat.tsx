import { useEffect } from 'react';

declare global {
  interface Window {
    oneko: any;
  }
}

export function OnekoCat() {
  useEffect(() => {
    console.log('OnekoCat component mounted');
    
    // Load the oneko.js script
    const script = document.createElement('script');
    script.src = '/oneko/oneko.js';
    script.dataset.cat = '/oneko/oneko.gif'; // Set the cat image path
    script.async = true;
    script.onload = () => {
      console.log('oneko.js script loaded successfully');
    };
    script.onerror = (error) => {
      console.error('Error loading oneko.js:', error);
    };
    document.body.appendChild(script);
    console.log('Script element created and added to body');

    // Cleanup function to remove the script and cat when component unmounts
    return () => {
      console.log('OnekoCat component unmounting');
      document.body.removeChild(script);
      const cat = document.getElementById('oneko');
      if (cat) {
        cat.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything directly
} 