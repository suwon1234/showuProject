import styled from 'styled-components';

const S = {};

S.TeamMakingNameWrapper =styled.div`
`

S.MakingDetailsTitle = styled.h3`
    display: flex;
    flex-direction: column;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
`
S.TeamMakingName = styled.div`
    width: 512px;
    margin-bottom: 35px;
`
S.DetailsTitle =styled.span`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
`
S.TeamNameInput = styled.input`
    width: 500px;
    height: 55px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    margin: 10px 12px 0px 12px;
    padding: 15px;
`


export default S;