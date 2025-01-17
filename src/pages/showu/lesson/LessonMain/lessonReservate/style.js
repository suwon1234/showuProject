import styled from 'styled-components';

const S = {};

S.ContentsWrapper = styled.form`
    width: 900px;
`
S.LeftContent = styled.div`
float: left;
    width: 440px;
    display: flex;
    flex-direction: column;
    gap: 50px;
`
S.ContentsWrapper = styled.div`

    p{
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    input {
        font-size: 14px;
        font-weight: 400;
        width: 100%;
        height: 55px;
        border: 1px solid #fff;
        background-color: transparent;
        border-radius: 5px;
        padding: 25px;
    }

    textarea {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        width: 100%;
        height: 210px;
        border: 1px solid #fff;
        background-color: transparent;
        border-radius: 5px;
        padding: 25px;
        

    }
`
S.RightContent = styled.div`

    position: relative;
    float: right;
    width: 400px;
    height: 696px;

`
S.SubmitButton = styled.button `
    position:absolute;
    bottom: 0px;
    right: 100px;
`



export default S