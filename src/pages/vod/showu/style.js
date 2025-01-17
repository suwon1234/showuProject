import styled from "styled-components";

const S = {};

S.DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

S.Dropdown = styled.select`
  background-color: #fdde39;
  color: black;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  width: 180px;
  margin-right: 10px;
`;

S.showumain = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1240px;
  margin: 0 auto;
  color: white;
  position: relative;
`;

S.button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left: auto;
  background-color: #fdde39;
  border-radius: 50%;
  color: black;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fcca00;
  }

  .icon {
    color: black;
  }
`;

S.createOption = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 60px;
  padding: 10px;
  background-color: #fdde39;
  border-radius: 5px;
  color: black;
  right: 0px;
  z-index: 10;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 110px;
  height: 34px;

  &:hover {
    background-color: #fcca00;
  }
`;

S.uploadOption = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 60px;
  right: 0;
  padding: 10px;
  background-color: #fdde39;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 150px;

  &:hover {
    background-color: #fcca00;
  }
`;

S.Card = styled.div`
  display: flex;
  min-width: 200px;
  max-width: 200px;
  height: 100%; 
  flex-shrink: 0;
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin: 10px;
  flex-direction: column;

  .videotitle{
margin-top: 8px;
font-size: 16px;
font-weight: bold;
text-align: center;
word-wrap: break-word; 
white-space: normal;
color: white;
text-overflow: ellipsis;

  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    position: relative;
    transition: transform 0.5s ease;
    
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

S.Videolist = styled.div`
  width: 1240px;
  height: 100%;
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  margin: auto;
  padding-top: 43px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

S.ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

S.ModalContent = styled.div`
  background-color: black;
  border-radius: 10px;
  padding: 20px;
  width: 960px;
  height: 786px;
  color: #FFD400;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto; 
  max-height: 90vh; 
  overflow-x: hidden; 
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);

  h2 {
    color: #FFD400;
    margin-right: 500px;
  }

  p {
    color: #FFD400;
    margin-top: 200px;
  }
`;

S.ModalTitle = styled.h2`
  position: absolute;
  top: 20px;
  left: 20px;
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #fdde39;
  text-align: left;
`;

S.ModalDescription = styled.p`
  margin: 100px auto 20px;
  font-size: 16px;
  line-height: 1.5;
  color: #fdde39;
  text-align: center;
`;

S.CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: yellow;
`;

S.UploadButton = styled.button`
  background-color: #FFD400;
  border: none;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  color: black;
  transition: background-color 0.3s;
  margin-top: 200px;

  &:hover {
    background-color: #FFD400;
  }
`;

S.HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: gray;
  margin: 20px 0;
`;

S.container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 199px;
  flex-wrap: wrap;
  width: 912px;
  height: 80px;
`;

S.Sequence = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  p {
    margin: 0%;
  }

  .circle {
    width: 21.33px;
    height: 21.33px;
    background-color: gray;
    border-radius: 50%;
    transition: background-color 0.3s;
  }

  .Emphasis {
    color: white;
    margin-top: 0%;
  }

  &.active .circle {
    background-color: #FFD400;
  }
`;

S.Divider = styled.div`
  position: absolute;
  top: 115px;
  left: 65px;
  width: 270px;
  height: 1px;
  background-color: gray;
`;

S.Divider2 = styled.div`
  position: absolute;
  top: 115px;
  left: 360px;
  width: 260px;
  height: 1px;
  background-color: gray;
`;

S.Divider3 = styled.div`
  position: absolute;
  top: 115px;
  right: 62px;
  width: 255px;
  height: 1px;
  background-color: gray;
`;

S.StyledUploadButton = styled.label`
  display: inline-block;
  background-color: #e5e5e5;
  color: black;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 15px;
  border: none;
  margin-top: 100px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #d5d5d5;
  }
`;

S.HiddenInput = styled.input`
  display: none;
`;

S.NextButton = styled.button`
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #FFD400;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  & :hover {
    background-color: #FFD400;
  }
`;



S.InputWrapper = styled.div`
  margin-top: 20px;
  max-width: 536px;
  min-height: 103px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: black;
    textarea {
    width: 100%;
    color: white;
    height: 120px;
    padding: 10px;
    border: none;
    background-color: transparent;
    resize: none;
  }
  select{
    margin-left: 10px;
    color: black;

    option{
      color: black;
    }
  }
`;


S.FileInputWrapper = styled(S.InputWrapper)`
  input[type="file"] {
    width: 100%;
  }
`;

S.SelectWrapper = styled(S.InputWrapper)`
  select {
    width: 100%;
    padding: 8px;
    border: none;
    background-color: transparent;
  }
`;
S.buttonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: sticky;
  bottom: 0; 
  left: 0;
  background-color: black;
  z-index: 10; 
  
`;

S.PreviousButton = styled.button`
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #FFD400;
  color: black;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #FFD400;
  }
`;
S.detailWrapper=styled.div`
width: 100%;
height: 100%;

`

S.videaddowrapper=styled.div`
width: 100%;
height: 100%;
.circle {
    width: 21.33px;
    height: 21.33px;
    background-color: gray;
    border-radius: 50%;
    transition: background-color 0.3s;
    cursor: pointer;
  }
  &.select .circle {
    background-color: #FFD400; 
  }

button {
      background-color: #FFD400;
      border: none;
      color: black;
      width: 80px;
      height: 35px;
      border-radius: 5px;
      padding: 8px 16px;
      font-size: 16px;
      margin-left: auto;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #fcca00;
      }
    }

P{
  margin: 0px;
  padding-bottom: 103px;
  color: white;
}
h1{
  font-size: 25px;
  color: #FFD400;
}
.subtitle{
  display: flex;
  align-items: center; 
  max-width: 864px;
  height : 88px;
  border: 1px solid gray;
  .subtitleadd{
    display: flex;
    flex-direction: column;
  }
  p{
    margin: 0px;
    color: #AAAAAA;
    padding-bottom: 0px;
  }
  span{
    font-size: 15px;
    color: white;
  }

  img {
      width: 24px; 
      height: 24px;
      margin: 24px;
    }
}
.openvideo{
    display: flex;
    align-items: center; 
    max-width: 534px;
    height : 283px;
    border: 1px solid gray;
    margin-top: 20px;
    p{
    margin-bottom: 50px;
    color: #AAAAAA;
    padding-bottom: 0px;
  }
  span{
    font-size: 15px;
    color: #FFD400;
  }

  img {
      width: 24px; 
      height: 24px;
      margin: 24px;
    }
}
.addscreen{
    display: flex;
    align-items: center; 
    max-width: 864px;
    height : 88px;
    border: 1px solid gray;
    margin-top: 83px;
    p{
    margin: 0px;
    color: #AAAAAA;
    padding-bottom: 0px;
  }
  span{
    font-size: 15px;
    color: white;
  }

  img {
      width: 24px; 
      height: 24px;
      margin: 24px;
    }
  }

`


export default S;
