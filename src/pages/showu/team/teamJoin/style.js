import styled from 'styled-components';

const S = {};

S.TeamjoinWrapper =styled.div`
    width: 585px;
    height: 800px;
    margin: 0 auto;
    border: 1px solid #ffd400;
    border-radius: 20px;
    padding: 35px 30px;
`

S.TeamJoinTopContent =styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 55px;

    h3 {
        font-size: 30px;
        font-weight: 700;
    }

    .closeButtonicon {
        width: 30px;
        height: 30px;
    }

`

S.TeamJoinMiddleContent = styled.div`
        font-size: 16px;
    h3{
        font-weight: 600;
    }  
    
    p{
        font-weight: 400;
        margin-bottom: 20px;
    }

    textarea {
        width: 525px;
        height: 215px;
        border: 1px solid #fff;
        border-radius: 5px;
        background-color: transparent;
        font-size: 18px;
        padding: 13px;
        margin-bottom: 25px;
    }
`
S.TeamJoinAdvice = styled.div`
    width: 525px;
    height: 130px;
    background-color: #fffae1;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 30px;
    
    h4 {
        color: #000;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    ul{
        padding-left: 20px;
    }

    li {
        color: #000;
        list-style: circle;
        font-size: 16px;
        font-weight: 400;
    }

`

S.TeamJoinEtcWrapper = styled.div`
    margin-bottom: 50px;
    p{
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    span {
        text-decoration: dashed;
    }
`
S.SubmitButton = styled.button`
    width: 525px;
    height: 55px;
    border-radius: 55px;
    background-color: #ffd400;
    border: none;
    font-size: 17px;
    font-weight: 600;
    color: #000;
`


export default S