import React from 'react';
import styled, { css } from 'styled-components';
import MainPhoto from './mainPhoto.jpg';

export default () => {
    return (
        <AppContainer>
                <Row>
                    <Tile color="#FCD4E4" />
                    <Tile color="#CFF6F4" />
                    <Tile color="#FFFCD7" />
                </Row>
                <Row>
                    <Tile color="#F4ADCA" />
                    <PhotoTile color="#9FE0DD" imgSrc={MainPhoto} />
                    <Tile color="#FFFAB5" />
                </Row>
                <Row>
                    <Tile color="#E593B4" />
                    <Tile color="#75B6B4" />
                    <Tile color="#FFF9A4" />
                </Row>
        </AppContainer>
    );
}


const AppContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    display: flex;
    flex-direction: row;
`;

const Tile = styled.div`
    display: inline-block;

    height: 150px;
    width: 150px;

    margin: 10px;

    background-color: ${p => p.color};
    ${p => p.imgSrc
        ? css`
            background-image: url(${p.imgSrc});
            background-size: 290px;
            background-position: 49% 31%;
            `
        : ''
    }
`;

const PhotoTile = styled(Tile)`
    position: relative;

    &:before {
        position: absolute;
        display: block;

        top:0;
        left:0;
        width:100%;
        height:100%;

        content:" ";

        background-color: ${p => p.color};
        opacity: 0.4;
    }
`;

const Row = styled.div``;