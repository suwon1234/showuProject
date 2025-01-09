import styled  from "styled-components";
import { backgroundBlack } from "../../../global/common";



const S = {};
  S.Wrapper = styled.div`
     background-color: #444444; 
  `;

  S.SubWrapper = styled.div` // 전체 배경 black
    ${backgroundBlack}  
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 140px;
    margin-right: 140px;
  `;

S.Button = styled.button`
  background-color: ${(props) =>
    props.liked ? "#ffd400" : ({ theme }) => theme.PALLETE.gray["300"]};
  color: ${(props) => (props.liked ? "black" : "white")};
  border: none;
  border-radius: 50px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.liked ? "#e6c700" : "#d6d6d6"}; 
    color: ${(props) => (props.liked ? "black" : "white")};
  }
`;






S.Buttons = styled.div`
display: flex;
gap: 4px;
`;

S.CommentInput = styled.div`
display: flex;
gap: 8px;
margin-bottom: 16px;

textarea {
  flex: 1;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  color: #000;
  resize: none;
}
`;

  S.TopTitle = styled.h1`
    font-size: 20px;
    display: flex;
    margin-left: 20px;
    margin-top: 50px;
    
  `;

  S.TopTitle2 = styled.div` 
        font-size: 30px;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        color: #ffd400;
        justify-content: center;
        display: flex;
        padding-top: 30px;
    `

    

S.IconWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5px;
height: 100%;

.icon{
    font-size: 20px;
    padding-bottom: 50px;

path {
    color : #ffd400;
}
}
`

  S.Img = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    object-fit: cover;

    img {
      width: 100%;
      max-width: 400px;
      margin-bottom: 15px;
    }

    p {
      margin-top: 10px;
    }
  `

  S.Line1 = styled.div`
    border-bottom: 2px solid #ffd400;
    margin-left: 20px;
    margin-right: 1000px;
  `

  S.Group = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;

    button {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      background-color: ${({ theme }) => theme.PALLETE.gray["300"]};
      border: none;
      border-radius: 50px;
      cursor: pointer;
      padding: 12px 20px;

        &:hover {
          background-color: #ffd400; 
          color: black; 
          }
      }
  `




S.CommentWrapper = styled.div`
  margin-top: 40px;
  background-color: #222; 
  padding: 20px;
`;

S.CommentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;    
    margin-top: 20px;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #555;
    border-radius: 4px;
    resize: none;
    background-color: #333;
    color: #fff;
  }

  div {
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    button {
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 20px;
      cursor: pointer;
      background-color: #555; 

      &:hover{
        background-color: #ffd400;
        color: #000;
      }
    }
  }
`;

S.CommentList = styled.div`
  margin-top: 20px;
`;

S.Line2 = styled.div`
    border-bottom: 1px solid #555;
  `

S.CommentItem = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  color: #fff;

  .user {
    font-size: 14px;
    font-weight: bold;


    span {
      margin-left: 8px;
      font-size: 12px;
      font-weight: bold;
      color: #ffd400;
    }
  }

  .content {
    margin-top: 5px;
    font-size: 14px;
    font-weight: medium;
  }

  .date {
    margin-top: 5px;
    font-size: 12px;
    font-weight: thin;
    color: #aaa;
  }

  textarea {
    color: black;
  }

`;


// S.Button = styled.button`
//   background-color: ${({ theme }) => theme.PALLETE.gray["300"]};
//   color: white;
//   border: none;
//   border-radius: 4px;
//   padding: 8px 16px;
//   font-size: 14px;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   margin: 0 4px;

//   &:hover {
//     background-color: #d6d6d6;
//   }

//   &:disabled {
//     background-color: #d6d6d6;
//     cursor: not-allowed;
//   }
// `;








export default S;