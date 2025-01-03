import styled from 'styled-components';

const S = {};

S.TeamMainWrapper = styled.div`
    padding-top:50px;
    background-color: #000;
`
S.TeamMainTitle = styled.h1`
    font-size: 30px;
    font-weight: 600;
    color: #ffd400;
    text-align: center;
    margin-bottom: 30px;
`
S.TeamCategoryWrapper = styled.div`
    position: relative;
    width: 1200px;
    margin: 0 auto;
    border-bottom: 1px solid #fff;
    padding: 15px 25px;
`
S.TeamCategorys = styled.div`
    display: flex;
    gap: 30px;

    select {
        display: block;
        background-color: transparent;
        padding: 14px 19px;
        border: 1px solid #ffd400;  
        border-radius: 50px;
        font-size: 17px;
        color: #ffd400;  
        font-weight: 400;

        option {
            background-color: #000;
        }
    }
`

S.TeamMakeButton = styled.div`
    position: absolute;
    right: 25px;
    bottom: 15px;
    width: 150px;
    height: 55px;
    border-radius: 50px;
    border: none;
    background-color: #ffd400;
    color: #000;
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    padding-top: 17px;
`
S.TeamListWrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
`

export default S;