const linksName = [
  'Información',
  'Blog',
  'Empleo',
  'Ayuda',
  'API',
  'Privacidad',
  'Condiciones',
  'Cuentas destacadas',
  'Hashtags',
  'Ubicaciones',
  'Instagram Lite',
  'Belleza',
  'Danza',
  'Actividad física',
  'Comida y bebida',
  'Hogar y jardinería',
  'Música',
  'Artes visuales',
];

export default function InstaFooter() {
  return (
    <div className="separateTop">
      <div className="linksContainer">
        {linksName.map((name) => {
          return (
            <div className="floatLeft ">
              <a
                className="avoidDefaultLinkColor"
                href="https://github.com/delalama"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <div>{name}</div>
              </a>
            </div>
          );
        })}
      </div>
        <div className="footerCredits ">
          Español (España) © 2021 Instagram from Facebook
        </div>
      
    </div>
  );
}

export { linksName };

// -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif
