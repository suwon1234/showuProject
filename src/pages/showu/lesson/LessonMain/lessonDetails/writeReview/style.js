import styled from 'styled-components';

const S = {};
    S.ReviewWrapper =styled.div`
        width: 585px;
        height: 639px;
        border: 1px solid #ffd400;
        margin: 35px auto;
        padding: 30px;
        border-radius: 20px;
    `
    S.ReviweTitle =styled.h3`
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 25px;
    `
    S.ReviewNotice = styled.div`
        p {
            font-size: 17px;
            font-weight: 300;
            margin-bottom: 10px;
        }

        textarea {
            width: 525px;
            height: 269px;
            border: 1px solid #fff;
            background-color: transparent;
            padding: 15px;
            font-size: 17px;
            line-height: 22px;
            border-radius: 5px;
            margin-bottom: 70px;
        }

    `
    S.ButtonWrapper =styled.div`
        display: flex;
        gap: 20px;

        button {
            width: 250px;
            height: 55px;
            border: none;
            border-radius: 50px;
            font-size: 17px;
            font-weight: 600;
        }

        .submitButton {
            background-color: #ffd400;
            color: #000;
        }

        .backButton {
            background-color: #595959;
            color: #fff;
        }

    `




export default S