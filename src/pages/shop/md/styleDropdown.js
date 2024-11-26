import styled from 'styled-components';

const S = {
    DetailWrapper: styled.div`
        padding: 20px;
        background-color: black;
        color: white;
    `,
    Dropdown: styled.div`
        margin-bottom: 20px;
    `,
    DropdownContainer: styled.div`
        position: relative;
        display: inline-block;
    `,
    DropdownButton: styled.button` // 옵션 선택 박스
        /* min-width: 160px; */
        width: 400px;
        height: 55px;
        border-radius: 5px;
        background-color: #000;
        /* padding: 10px 20px; */
        border: 0.5px solid white;
        cursor: pointer;

        & p {
          text-align: left;
          font-size: 17px;
        }
    `,
    DropdownContent: styled.div` // 옵션1, 옵션2, 옵션3
        display: block;
        position: absolute;
        background-color: #000;
        border: 0.5px solid white;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        width: 400px;
        border-radius: 5px;

    `,
    DropdownItem: styled.div`
        padding: 12px 16px;
        color: white;
        cursor: pointer;
        font-size: 17px;

        &:hover {
            background-color: #ffd400;
            color: #000;
        }
    `
};


export default S;