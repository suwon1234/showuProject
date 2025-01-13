import styled from 'styled-components';

const S = {};

S.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffd400; 
  min-height: 100vh;
  padding: 60px 20px;
`;

S.Header = styled.div`
  text-align: left; 
  width: 100%;
  max-width: 1200px; 
  margin-bottom: 50px;
`;

S.HeaderTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #000; 
  margin-bottom: 20px;
`;


S.HeaderDescription = styled.p`
  font-size: 18px;
  color: #333; 
  line-height: 1.8;
`;


S.ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;


S.Card = styled.div`
  background-color: #fff;
  border-radius: 20px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); 
  text-align: center;
  padding: 40px 30px; 
  width: 340px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px); 
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
  }
`;

S.CardIcon = styled.div`
  font-size: 60px;
  color: #333;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);

  /* .icon {
    margin: 10px;
    color: #ffd400; 
  } */
`;

S.CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 600; 
  color: #000; 
  margin-bottom: 5px;
`;


S.CardDescription = styled.p`
  font-size: 16px;
  color: #555; 
  line-height: 1.5;
`;

export default S;
