import React from "react";
import {Container, Inner, Item, Pane, Title, SubTitle, Image} from './styles/jumbotron'

export default function Jumbotron({children, direction = 'row', ...restProps}) {
    return (
        <Item direction={direction} {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotroContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotroPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title = function JumbotroTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotroSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotroImage({...restProps}) {
    return <Image {...restProps}/>
}