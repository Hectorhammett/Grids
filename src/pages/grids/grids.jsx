import './grids.scss';
import React from 'react';

import { Container, FullContainer, FlexibleContainer, GutterContainer } from '../../components/container/container.jsx';
import Column from '../../components/column/column.jsx';
import Row from '../../components/row/row.jsx';

const TwelveColumnRow = ({ gutters = false }) => {
    return (
        <Row gutter={gutters}>
            <Column xlarge={1} large={1} medium={1} small={1} xsmall={1} className='red'>
                This is column 1
            </Column>
            <Column xlarge={1} large={1} medium={1} small={1} xsmall={1} className='red'>
                This is column 2
            </Column>
            <Column xlarge={1} large={1} medium={1} small={1} xsmall={1} className='red'>
                This is column 3
            </Column>
            <Column xlarge={1} large={1} medium={1} small={1} xsmall={1} className='red'>
                This is column 4
            </Column>
            <Column xlarge={1} large={1} medium={1} small={1} xsmall={1} className='red'>
                This is column 5
            </Column>
            <Column xlarge={1} large={1} medium={1} small={1} xsmall={1} className='red'>
                This is column 6
            </Column>
            <Column xlarge={1} large={1} medium={1} small={1} xsmall={1} className='red'>
                This is column 7
            </Column>
            <Column xlarge={1} large={1} medium={1} small={1} xsmall={1} className='red'>
                This is column 8
            </Column>
            <Column xlarge={1} large={1} medium={1} small={1} xsmall={1} className='red'>
                This is column 9
            </Column>
            <Column xlarge={1} large={1} medium={1} small={1} xsmall={1} className='red'>
                This is column 10
            </Column>
            <Column xlarge={1} large={1} medium={1} small={1} xsmall={1} className='red'>
                This is column 11
            </Column>
            <Column xlarge={1} large={1} medium={1} small={1} xsmall={1} className='red'>
                This is column 12
            </Column>
        </Row>
    )
}

const Grids = () => {
    return (
        <div className='grids'>
            <Container>
                <Column>
                    <h1> This is a fixed grid </h1>
                </Column>
            </Container>
            <Container className='fixed blue'>
                <TwelveColumnRow />
                <Column className='red' xlarge={8} large={6} medium={7} small={3} xsmall={2}>
                    <p>
                        This is a 8 columns width column on xlarge screen
                    </p>
                    <p>
                        This is a 6 columns width column on large screen
                    </p>
                    <p>
                        This is a 7 columns width column on medium screen
                    </p>
                    <p>
                        This is a 3 columns width column on small screen
                    </p>
                    <p>
                        This is a 2 columns width column on large screen
                    </p>
                </Column>
                <Row>
                    <Column className='red'>
                        This is in another row
                    </Column>
                </Row>                
            </Container>
            <Container>
                <Column>
                    <h1> This is a container withouth paddings </h1>
                </Column>
            </Container>
            <FullContainer className='blue'>
                <TwelveColumnRow />
                <Column className='red' xlarge={8} large={6} medium={7} small={3} xsmall={2}>
                    <p>
                        This is a 8 columns width column on xlarge screen
                    </p>
                    <p>
                        This is a 6 columns width column on large screen
                    </p>
                    <p>
                        This is a 7 columns width column on medium screen
                    </p>
                    <p>
                        This is a 3 columns width column on small screen
                    </p>
                    <p>
                        This is a 2 columns width column on large screen
                    </p>
                </Column>
                <Row>
                    <Column className='red'>
                        This is in another row
                    </Column>
                </Row>  
            </FullContainer>
            <Container>
                <Column>
                    <h1> This is a container with variable padding </h1>
                </Column>
            </Container>
            <FlexibleContainer className='flexible blue'>
                <TwelveColumnRow />
                <Column className='red' xlarge={8} large={6} medium={7} small={3} xsmall={2}>
                    <p>
                        This is a 8 columns width column on xlarge screen
                    </p>
                    <p>
                        This is a 6 columns width column on large screen
                    </p>
                    <p>
                        This is a 7 columns width column on medium screen
                    </p>
                    <p>
                        This is a 3 columns width column on small screen
                    </p>
                    <p>
                        This is a 2 columns width column on large screen
                    </p>
                </Column>
                <Row>
                    <Column className='red'>
                        This is in another row
                    </Column>
                </Row>  
            </FlexibleContainer>

            <Container>
                <Column>
                    <h1> This is a container with gutters </h1>
                </Column>
            </Container>
            <Container className='fixed'>
                <TwelveColumnRow gutters={true}/>
                <Row gutter={true}>
                    <Column className='red' xlarge={8} large={6} medium={7} small={3} xsmall={2}>
                        <p>
                            This is a 8 columns width column on xlarge screen
                        </p>
                        <p>
                            This is a 6 columns width column on large screen
                        </p>
                        <p>
                            This is a 7 columns width column on medium screen
                        </p>
                        <p>
                            This is a 3 columns width column on small screen
                        </p>
                        <p>
                            This is a 2 columns width column on large screen
                        </p>
                    </Column>
                </Row>
                <Row gutter={true}>
                    <Column className='red'>
                        This is in another row
                    </Column>
                </Row>  
            </Container>
        </div>
    )
};

export default Grids;