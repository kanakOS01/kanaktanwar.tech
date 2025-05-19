import portfolioData from "@/data/portfolio";

const AsciiProfile = () => {
  const { about } = portfolioData;
  
  const asciiArt = `
                         .,,uod8B8bou,,.
              ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
         ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||
         !...:!TVBBBRPFT||||||||||!!^^""'   ||||
         !.......:!?|||||!!^^""'            ||||
         !.........||||                     ||||
         !.........||||  ##                 ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         \`.........||||                    ,||||
          .;.......||||               _.-!!|||||
   .,uodBBBb.....||||       _.-!!|||||||||!:'
!YBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....
!..YBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   \`.
!....YBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     \`.
!......YBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"\`;:::       \`.
!.......BBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.
\`........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.
  \`........:::::::::::::::::::::::;iof688888888888b.     \`YBBBP^'
    \`......::::::::::::::::;iof688888888888888888888b.     \`
      \`....:::::::::;iof688888888888888888888888888888b.
        \`..:::;iof688888888888888888888888888888888899fT!
          \`::!8888888888888888888888888888888899fT|!^"'
            \`' !!988888888888888888888888899fT|!^"'
                \`!!8888888888888888899fT|!^"'
                  \`!988888888899fT|!^"'
                    \`!9899fT|!^"'
                      \`!^"'`;

  return (
    <section className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
      <div className="ascii-container text-primary text-center md:text-left">
        <pre>{asciiArt}</pre>
      </div>
      <div className="mt-6 md:mt-0 md:ml-8 max-w-md">
        {about.map((paragraph, index) => (
          <p key={index} className="text-sm leading-relaxed mt-4 first:mt-0">
            {paragraph.split(/\b(backend dev|ai engineer|x\/twitter|dev.to|github|ai generated)\b/).map((part, i) => {
              if (part === "backend dev" || part === "ai engineer" || part === "x/twitter" || part === "dev.to" || part === "github" || part === "ai generated") {
                return <span key={i} className="text-primary">{part}</span>;
              }
              return part;
            })}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AsciiProfile;
