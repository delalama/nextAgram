import { Container, Row, Col } from 'react-bootstrap';

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
    <Container className="separateBottom centered">
      <div>
        {linksName.map((name) => {
          return (
            <div className="floatLeft">
              <a
                className='avoidDefaultLinkColor'
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
      <h1> </h1>
      <div>
        <Col xs={10} className="floatCenter">
          Español (España) © 2021 Instagram from Facebook
        </Col>
      </div>
    </Container>
  );
}

export { linksName };

// -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif
