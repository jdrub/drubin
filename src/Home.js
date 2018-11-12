import React from 'react';
import styled, { css } from 'styled-components';
import MainPhoto from './mainPhoto.jpg';

export default () => {
    return (
        <AppContainer>
            <Row>
                <Tile />
                <Tile />
                <Tile />
            </Row>
            <Row>
                <Tile />
                <Tile imgSrc={MainPhoto} />
                <Tile />
            </Row>
            <Row>
                <Tile />
                <Tile />
                <Tile />
            </Row>
        </AppContainer>
    );
}

const AppContainer = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;
`;

const Tile = styled.div`
    height: 150px;
    width: 150px;

    margin: 10px;

    border-radius: 2px;
    border-width: 1px;
    border-color: black;
    border-style: solid;

    ${p => p.imgSrc
        ? css`
            background-image: url(${p.imgSrc});
            background-size: 660px;
            background-position: 65% 35%;
            `
        : ''
    }
`;

const Row = styled.div``;