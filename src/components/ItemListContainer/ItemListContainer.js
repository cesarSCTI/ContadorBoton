import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './itemlistcontainer.css';
import ItemCount from "../IItemCount/ItemCount";

const ItemListContainer = ({getting}) =>{
    return(
        <>
        <Container fluid className="listContainer">
            <Row>
                <Col>
                    <h3>{getting}</h3>
                    
                </Col>
                <Col>
                    <ItemCount stock={10} initial={1}/>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default ItemListContainer;