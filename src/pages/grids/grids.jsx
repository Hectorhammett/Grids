import './grids.scss';
import React from 'react';

import { Container, FlexibleContainer, FullContainer } from '../../components/container/container.jsx';
import Row from '../../components/row/row.jsx';
import Column from '../../components/column/column.jsx';

const TwelveColumns = () => {
    const columns = [];

    for (let i = 1; i <= 12; i++) {
        const column = (
            <Column xsmall={1} small={1} medium={1} large={1} xlarge={1} key={i} className='red'>
                This is column number {i}
            </Column>
        )

        columns.push(column);
    }

    return columns;
}

const Grids = () => {
    return (
        <div className='grids'>
            <Container>
                <Row>
                    <Column>
                        <h1>
                            This is a static container with padding on the sides
                        </h1>
                    </Column>
                </Row>
            </Container>
            <Container className='blue fixed'>
                <Row>
                    <TwelveColumns />
                </Row>
                <Row>
                    <Column xlarge={10} large={8} medium={6} small={1} xsmall={2} className='red'>
                        <p>This column will span 10 columns on xlarge</p>
                        <p>This column will span 8 columns on large</p>
                        <p>This column will span 6 columns on medium</p>
                        <p>This column will span 1 columns on small</p>
                        <p>This column will span 2 columns on xsmall</p>
                    </Column>
                </Row>
                <Row>
                    <Column className='red'>
                        This will always be full width
                    </Column>
                </Row>
                <Row>
                    <Column xlarge={6} large={6} medium={4} small={2} xsmall={2} className='red'>
                        This will be always half of the screen
                    </Column>
                </Row>
                <Row>
                    <Column className='centered red'>
                        This will be always centered.
                    </Column>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Column>
                        <h1> This is a flexible container </h1>
                    </Column>
                </Row>
            </Container>
            <FlexibleContainer className='blue flexible' flex={8} gutters={50}>
                <Row>
                    <TwelveColumns />
                </Row>
                <Row>
                    <Column xlarge={10} large={8} medium={6} small={1} xsmall={2} className='red'>
                        <p>This column will span 10 columns on xlarge</p>
                        <p>This column will span 8 columns on large</p>
                        <p>This column will span 6 columns on medium</p>
                        <p>This column will span 1 columns on small</p>
                        <p>This column will span 2 columns on xsmall</p>
                    </Column>
                </Row>
                <Row>
                    <Column className='red'>
                        This will always be full width
                    </Column>
                </Row>
                <Row>
                    <Column xlarge={6} large={6} medium={4} small={2} xsmall={2} className='red'>
                        This will be always half of the screen
                    </Column>
                </Row>
                <Row>
                    <Column className='centered red'>
                        This will be always centered.
                    </Column>
                </Row>
            </FlexibleContainer>

            <Container>
                <Row>
                    <Column>
                        <h1> This is a full screen container </h1>
                    </Column>
                </Row>
            </Container>
            <FullContainer className='blue'>
                <Row>
                    <TwelveColumns />
                </Row>
                <Row>
                    <Column xlarge={10} large={8} medium={6} small={1} xsmall={2} className='red'>
                        <p>This column will span 10 columns on xlarge</p>
                        <p>This column will span 8 columns on large</p>
                        <p>This column will span 6 columns on medium</p>
                        <p>This column will span 1 columns on small</p>
                        <p>This column will span 2 columns on xsmall</p>
                    </Column>
                </Row>
                <Row>
                    <Column className='red'>
                        This will always be full width
                    </Column>
                </Row>
                <Row>
                    <Column xlarge={6} large={6} medium={4} small={2} xsmall={2} className='red'>
                        This will be always half of the screen
                    </Column>
                </Row>
                <Row>
                    <Column className='centered red'>
                        This will be always centered.
                    </Column>
                </Row>
            </FullContainer>

            <Container>
                <Row>
                    <Column>
                        <h1> This is a flexible container with gutters </h1>
                    </Column>
                </Row>
            </Container>
            <FullContainer className='blue flexible' flex={8} gutters={15}>
                <Row>
                    <TwelveColumns />
                </Row>
                <Row>
                    <Column xlarge={10} large={8} medium={6} small={1} xsmall={2} className='red'>
                        <p>This column will span 10 columns on xlarge</p>
                        <p>This column will span 8 columns on large</p>
                        <p>This column will span 6 columns on medium</p>
                        <p>This column will span 1 columns on small</p>
                        <p>This column will span 2 columns on xsmall</p>
                    </Column>
                </Row>
                <Row>
                    <Column className='red'>
                        This will always be full width
                    </Column>
                </Row>
                <Row>
                    <Column xlarge={6} large={6} medium={4} small={2} xsmall={2} className='red'>
                        This will be always half of the screen
                    </Column>
                </Row>
                <Row>
                    <Column className='centered red'>
                        This will be always centered.
                    </Column>
                </Row>
            </FullContainer>
        </div>
    )
};

export default Grids;