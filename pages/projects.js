import Head from 'next/head';
import Image from 'next/image';
import { Container, Col, Row, Card, Badge } from 'react-bootstrap';
import { FiLink2, FiGithub } from 'react-icons/fi';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';

const Projects = () => (
  <>
    <Head>
      <title>Nokz | Projects</title>
      <meta
        name="Description"
        content="Portfolio that showcases what I can do."
      />
      <meta
        name="viewport"
        content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
      />
    </Head>

    <PageHeader title={'Projects'} description={'Works that I have made'} />

    <Container className="py-3 page-content">
      <h2 id="web-apps" className="text-center">
        Web Apps
      </h2>
      <Row className="mx-1">
        <Col sm className="my-2">
          <Card className="projects__entry bg-dark">
            <Image
              src="/projects-screenshot/hysc-webpage-screenshot.png"
              alt="hysc-screenshot"
              width={1354}
              height={674}
            />
            <Card.Body>
              <Card.Title>Hololive Youtube Subscriber Count</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Badge variant="secondary">JavaScript</Badge>&nbsp;
                <Badge variant="secondary">NextJS</Badge>&nbsp;
                <Badge variant="secondary">SASS</Badge>&nbsp;
                <Badge variant="secondary">ChartJS</Badge>&nbsp;
                <Badge variant="secondary">Bootstrap</Badge>&nbsp;
                <Badge variant="secondary">PWA</Badge>&nbsp;
                <Badge variant="secondary">Styled Components</Badge>&nbsp;
                <Badge variant="secondary">Youtube Data API</Badge>&nbsp;
              </Card.Subtitle>
              <Card.Text>
                A web app that shows a graph for the number of subscribers of
                each of the Hololive members.
              </Card.Text>
              <Card.Link
                className="projects--links"
                href="https://hysc.vercel.app"
                target="_blank"
              >
                App <FiLink2 />
              </Card.Link>
              <Card.Link
                className="projects--links"
                href="https://github.com/DreamWithNokz/hololive-youtube-subscriber-count"
                target="_blank"
              >
                Github <FiGithub />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm className="my-2">
          <Card className="projects__entry bg-dark">
            <Image
              src="/projects-screenshot/vtuberms-webpage-screenshot.png"
              alt="vtuberms-screenshot"
              width={1354}
              height={674}
            />
            <Card.Body>
              <Card.Title>VTuber Minecraft Skin</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Badge variant="secondary">JavaScript</Badge>&nbsp;
                <Badge variant="secondary">NextJS</Badge>&nbsp;
                <Badge variant="secondary">SASS</Badge>&nbsp;
                <Badge variant="secondary">Bootstrap</Badge>&nbsp;
                <Badge variant="secondary">Styled Components</Badge>&nbsp;
              </Card.Subtitle>
              <Card.Text>
                A web app that lets you see the current skin that VTubers use in
                Minecraft.
              </Card.Text>
              <Card.Link
                className="projects--links"
                href="https://vtuberms.vercel.app"
                target="_blank"
              >
                App <FiLink2 />
              </Card.Link>
              <Card.Link
                className="projects--links"
                href="https://github.com/DreamWithNokz/vtuber-minecraft-skins"
                target="_blank"
              >
                Github <FiGithub />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <PageFooter />
  </>
);

export default Projects;
