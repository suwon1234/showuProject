import styled  from "styled-components";



const S = {};
S.Wrapper = styled.div`
background-color: #000;
color: #fff;
min-height: 100vh;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
`;

S.TopTitle = styled.h1`
font-size: 2.5rem;
margin-bottom: 20px;
font-weight: bold;
text-align: center;
`;

S.Img = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  width: 80%;
  text-align: center;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.5rem;
    margin: 10px 0;
  }

  p {
    font-size: 1rem;
    color: #ccc;
  }
`;

export default S;