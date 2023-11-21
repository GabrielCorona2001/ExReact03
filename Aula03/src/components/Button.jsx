import styled from 'styled-components'

const ButtonTest = styled.button`
background-color: red;
font-size: 4rem;
width:100%
`

const Testado = styled.p`
font-size: 4rem;
color:black;
background-color: blue;
`

export function Button() {
    return (
        <ButtonTest>

            <Testado>testado</Testado>
        </ButtonTest>
    )
}