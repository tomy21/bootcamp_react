import { Nav, Container, Navbar, Button, NavDropdown, Form } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";

const Navigation = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand className="text-white">Logo</Navbar.Brand>
        <Navbar.Toggle className="text-white" aria-controls="navbarScroll" />
        <Nav style={{ maxHeight: "100px", fontSize: "14px" }} navbarScroll>
          <Nav.Link
            className="text-white ms-3 text-bold"
            style={{ fontWeight: "600" }}
          >
            Program{" "}
            <span>
              <FaChevronDown />
            </span>
          </Nav.Link>
          <Nav.Link className="text-white ms-3" style={{ fontWeight: "600" }}>
            Bidang Ilmu{" "}
            <span>
              <FaChevronDown />
            </span>
          </Nav.Link>
          <Nav.Link className="text-white ms-3" style={{ fontWeight: "600" }}>
            Tentang edspert{" "}
          </Nav.Link>
          <Button variant="danger" className="rounded-pill ms-5 fs-6">
            Masuk/Daftar
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
