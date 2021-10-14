const linksName = [
  "Información",
  "Blog",
  "Empleo",
  "Ayuda",
  "API",
  "Privacidad",
  "Condiciones",
  "Cuentas destacadas",
  "Hashtags",
  "Ubicaciones",
  "Instagram Lite",
  "Belleza",
  "Danza",
  "Actividad física",
  "Comida y bebida",
  "Hogar y jardinería",
  "Música",
  "Artes visuales",
];

export default function InstaFooter() {
  return (
    <>
      <footer>
        <div className="links">
          {linksName.map((name) => {
            return (
              <a
                key={name}
                className="avoidDefaultLinkColor"
                href="https://github.com/delalama"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <div>{name}</div>
              </a>
            );
          })}
        </div>
        <div className="footerCredits ">
          Español (España) © 2021 Instagram from Facebook
        </div>
      </footer>
      <style jsx>{`
        footer {
          margin: auto;
          margin-top: 2rem;
          padding: 2rem;
          max-width: 800px;
          font-size: 0.75em;
        }

        .links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
      `}</style>
    </>
  );
}

export { linksName };

// -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif
