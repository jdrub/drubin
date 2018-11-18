import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import MainPhoto from './mainPhoto.jpg';
import SpriteSheet from './combined.png';

import BezierEasing from 'bezier-easing';
import { range } from 'lodash';
const ANIMATION_DRUATION_SECONDS = 2;
const ANIMATION_DELAY_INTERVAL = 200;
const ROTATION_AMOUNT = 180;

const handleClick = (shouldAnimate, setShouldAnimate) => {
    if (!shouldAnimate) {
        setShouldAnimate(true);
        setTimeout(() => setShouldAnimate(false), ANIMATION_DRUATION_SECONDS*1000 + 1050 + 3000);
    }
}

export default () => {
    const [shouldAnimate, seShouldAnimate] = useState(false);

    return (
        <AppContainer>
            <Row>
                <Tile shouldAnimate={shouldAnimate} animationPosition={0} color="#FCD4E4" />
                <Tile shouldAnimate={shouldAnimate} animationPosition={1} color="#CFF6F4" />
                <Tile shouldAnimate={shouldAnimate} animationPosition={2} color="#FFFCD7" />
            </Row>
            <Row>
                <Tile shouldAnimate={shouldAnimate} animationPosition={1} color="#F4ADCA" />
                <PhotoTile shouldAnimate={shouldAnimate} animationPosition={2} onClick={() => handleClick(shouldAnimate, seShouldAnimate)} color="#9FE0DD" imgSrc={MainPhoto}>
                    <WalkingAnimation />
                </PhotoTile>
                <Tile shouldAnimate={shouldAnimate} animationPosition={3} color="#FFFAB5" />
            </Row>
            <Row>
                <Tile shouldAnimate={shouldAnimate} animationPosition={2} color="#E593B4" />
                <Tile shouldAnimate={shouldAnimate} animationPosition={3} color="#75B6B4" />
                <Tile shouldAnimate={shouldAnimate} animationPosition={4} color="#FFF9A4" />
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
    flex-direction: column;

    white-space: nowrap;
`;

const rotationCurve = BezierEasing(0.455, 0.03, 0.515, 0.955);
const rotationEasingFunc = (step) => rotationCurve(step/100)*ROTATION_AMOUNT;

const scaleCurve = BezierEasing(0.645, 0.045, 0.355, 1);
const scaleEasingFunc = (step) => {
    // return 1;
    // if (step < 50) {
    //     return 1 - scaleCurve(step/100)
    // } else {
    //     return 1 - scaleCurve((100-step)/100)
    // }

    return 1 - scaleCurve(step/100)*.2
}

const radiusCurve = BezierEasing(0.165, 0.84, 0.44, 1);
const radiusEasingFunc = (step) => radiusCurve(step/100)*50;

const rotateSteps =
    range(1,101)
    .reduce(
        (str, step) => `
        ${str}
        ${step}% {
            transform: rotate(${rotationEasingFunc(step)}deg) scale(${scaleEasingFunc(step)});
            border-radius: ${radiusEasingFunc(step)}%;
        }`, '');

const photoShrinkRadiusSteps =
range(1,101)
.reduce(
    (str, step) => `
    ${str}
    ${step}% {
        border-radius: ${radiusEasingFunc(step)}%;
    }`, '');

const photoShrinkRadius = keyframes`
    ${photoShrinkRadiusSteps}
`;

const rotate = keyframes`
    ${rotateSteps}
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

    ${p => p.shouldAnimate
        ? css`animation: ${rotate} ${ANIMATION_DRUATION_SECONDS}s linear ${p.animationPosition * ANIMATION_DELAY_INTERVAL}ms forwards;`
        : ''
    }
`;

const PhotoTile = styled(Tile)`
    position: relative;

    overflow: hidden;

    &:hover {
        cursor: pointer;
    }

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

    ${p => p.shouldAnimate
        ? css`animation: ${photoShrinkRadius} ${ANIMATION_DRUATION_SECONDS}s linear ${p.animationPosition * ANIMATION_DELAY_INTERVAL}ms forwards;`
        : ''
    }
`;

const spriteAnim = keyframes`
    from {
        background-position-x: 0;
    }

    to {
        background-position-x: -1650px;
    }
`;

const WalkingAnimation = styled.div`
    background-image: url(${SpriteSheet});
    background-repeat: no-repeat;
    background-size: cover;
    width: 150px;
    height: 150px;
    animation: ${spriteAnim} 1s steps(11) infinite;
`;

const Row = styled.div``;