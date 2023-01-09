import Nav from 'react-bootstrap/Nav';

function JustifiedExample() {
  return (
    <nav>
        <div className='text-center'>
            <img src="../../../public/logo192.png" alt="sdsadsa" />
        </div>

        <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link eventKey="link-1">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Sobre mí</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-3">Proyectos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-4">Contacto</Nav.Link>
        </Nav.Item>
        
        </Nav>
    </nav>
  );
}

export default JustifiedExample;