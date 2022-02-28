import { Card, ListGroup, ListGroupItem, Container, Row, Col } from "react-bootstrap"
import Icon from "@mdi/react"
import TestImage from "../imgs/ikusei_main_37.png"
import { mdiChartBubble } from "@mdi/js"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Container>
            <Row>
                <div className="border-bottom mb-3">
                    <h1 style={{color:"orange"}}>
                        <Icon
                            size="100"
                            path={mdiChartBubble} />
                        エリアから探す
                    </h1>
                </div>
            </Row>
            <Row>
                <Col md="auto">
                    <Link
                        to="/list?area=1">
                        <Card
                            style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={TestImage} />
                            <Card.Body>
                                <Card.Title>大岡山北エリア</Card.Title>
                                <Card.Text>
                                    説明を書く
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={TestImage} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <div className="border-bottom mb-3">
                    <div>
                        <h1>
                            <Icon
                                size="100"
                                path={mdiChartBubble} />
                            ジャンルから探す
                        </h1>
                    </div>

                </div>
            </Row>

        </Container>
    );
}