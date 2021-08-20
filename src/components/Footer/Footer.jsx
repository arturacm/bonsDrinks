import React from 'react'
import styled from 'styled-components'

const Rodape = styled.footer`
    background-color: #cccccc;
`

class Footer extends React.Component {
    render() {
        return (
        <Rodape>
            <p>
                Todos os direitos reservados
            </p>
            <p>
                Criado por Artur Moreira
            </p>
        </Rodape>)
    }
}

export default Footer;