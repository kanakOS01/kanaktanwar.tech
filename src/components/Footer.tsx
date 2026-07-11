import portfolioData from "@/data/portfolio";

const Footer = () => {
  const { name } = portfolioData;
  
  const asciiArt = `
___________.__             ___________           .___
\\__    ___/|  |__   ____   \\_   _____/ ____    __| _/
  |    |   |  |  \\_/ __ \\   |    __)_ /    \\  / __ | 
  |    |   |   Y  \\  ___/   |        \\   |  \\/ /_/ | 
  |____|   |___|  /\\___  > /_______  /___|  /\\____ | 
                \\/     \\/          \\/     \\/      \\/`;

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full px-4 py-4 border-t border-primary/50">
      <div className="text-center">
        <div className="ascii-container text-primary text-center mx-auto">
          <pre>{asciiArt}</pre>
        </div>
        <p className="text-sm mt-4">
          <span className="text-primary">&copy;</span> {currentYear} {name}. built with 
          <span className="text-primary"> ❤</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
