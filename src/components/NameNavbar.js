import React from "react";
import { Container } from 'react-bootstrap';

function NameNavbar() {
    return(
        <Container>
            <div>
                <h1 style={{padding: 10, textAlign: 'center'}}>Joshua Illg</h1>
            </div>
            <div>
                <div class="row">
                    <div class="col-4">
                        <h4>About</h4>
                    </div>
                    <div class="col-4">
                        <h4>Projects</h4>
                    </div>
                    <div class="col-4">
                        <h4>Contact</h4>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default NameNavbar;