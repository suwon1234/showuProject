import styled from 'styled-components';

const S = {};

S.ShowuContainerHeadContent = styled.div`
    height: 70px;
    text-align: center;
    margin-top: 20px;
    h3 {
        font-size: 20px;
        color: #ffd400;
        font-weight: 700;
        margin-bottom: 10px;
    }
        
`

S.ButtonWrapper =styled.div`
    width: 400px;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    gap: 20px;
    font-size: 25px;
    font-weight: 500;

    button {
        width: 120px;
        height: 40px;
        background-color: #000;
        border: 1px solid #ffd400;
        border-radius: 55px;
    }

    button:hover {
        background-color: #ffd400;
        border: none;
        color: #000;
    }

`
export default S