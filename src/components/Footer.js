import React from 'react';
import styled from 'styled-components';


class Footer extends React.Component {

    render() {

        const StyledFooter = styled.div`
        background-color: white; 
        left:0;
        bottom: 0;
        width: 100%;        
        font-family: 'ETPA-Font';
        color: var(--regular-text-color);
        text-align: center;
        text-transform: uppercase;
        `

        return <StyledFooter> Nadine Thêry - {this.props.year} </StyledFooter>

    }
}

export default Footer