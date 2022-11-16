import { Accordion, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  const links = [
    {
      name: "DASHBOARD",
      menu: [{ name: "HOME", to: "/" }],
      role: ["ADMIN", "STAFF"],
    },
    {
      name: "SETTINGS",
      menu: [{ name: "SIGN-OUT" }],
      role: ["ADMIN", "STAFF"],
    },
  ];
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  return (
    <Accordion flush>
      {links.map((el, index) => (
        <Accordion.Item key={index} eventKey={index}>
          <Accordion.Header>{el.name}</Accordion.Header>
          <Accordion.Body>
            <ListGroup as='ul' variant='flush'>
              {el.menu.map((menu, i) => {
                return menu.name === "SIGN-OUT" ? (
                  <ListGroup.Item
                    key={i}
                    onClick={() => logout()}
                    className='menu-link'
                    as='a'>
                    {menu.name}
                  </ListGroup.Item>
                ) : (
                  <LinkContainer key={i} to={menu.to}>
                    <ListGroup.Item className='menu-link' as='a'>
                      {menu.name}
                    </ListGroup.Item>
                  </LinkContainer>
                );
              })}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default Navigation;
