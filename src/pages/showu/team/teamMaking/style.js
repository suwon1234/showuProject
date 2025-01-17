import styled from 'styled-components';

const S = {};

S.TeamMakingBg =styled.div`
    background-color: #000;
`

S.TeamMakingWrapper = styled.div`
    width: 585px;
    margin: 0 auto;
    border: 1px solid #ffd400;
    border-radius: 20px;
    padding: 30px;
    position: relative;

    & p {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 22px;
    }
 
    `
S.WrapperClosedButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 30px;
    right: 30px;
    
    .closeButtonIcon {
       width: 30px;
       height: 30px;
    }


`




export default S