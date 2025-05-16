import portfolioData from "@/data/portfolio";

const Footer = () => {
  const { name } = portfolioData;
  
  const asciiArt = `
   _________  ____  __._____________________ ____ 
  /   _____/ |    |/ _|\\_   _____/\\______   \\    |
  \\_____  \\  |      <   |    __)_  |       _/    |
  /        \\ |    |  \\  |        \\ |    |   \\    |___
 /_______  / |____|__ \\/_______  / |____|_  /_______ \\
         \\/          \\/        \\/         \\/        \\/`;

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="container mx-auto px-4 py-8 mt-8 border-t border-border">
      <div className="text-center">
        <div className="ascii-container text-primary text-center mx-auto">
          <pre>{asciiArt}</pre>
        </div>
        <p className="text-sm mt-4">
          <span className="text-primary">&copy;</span> {currentYear} {name}. Built with 
          <span className="text-primary"> ❤</span> and a lot of 
          <span className="text-primary"> coffee</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
