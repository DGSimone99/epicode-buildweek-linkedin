import { Card, Container, Image } from "react-bootstrap";

const Popular = () => {
  return (
    <>
      <Container className="cardBox rounded-3 px-0 mb-2">
        <Card className="nav-link">
          <Card.Img
            variant="top"
            src="https://www.reliant-rehab.com/wp-content/uploads/2019/02/reliant-generic-background-1.jpg"
            className="imgTeam2 position-relative"
          />
          <div className="userImg2">
            <Image
              src="https://consumersiteimages.trustpilot.net/business-units/62a6277627ee655c1226b624-198x149-1x.avif"
              fluid
              className="rounded-circle position-relative"
              style={{
                width: "68px",
                height: "68px",
                objectFit: "cover",
              }}
            ></Image>
          </div>
          <Card.Body className="mt-4 px-2">
            <Container>
              <Card.Title className="fs-3 mb-0"></Card.Title>
              <Card.Text className="mb-0"></Card.Text>
              <Card.Text className="text-secondary my-0"></Card.Text>
              <Card.Text className="my-1 pointer2">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&amp;v=beta&amp;t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                  width={32}
                ></img>
                EPICODE
              </Card.Text>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Popular;
