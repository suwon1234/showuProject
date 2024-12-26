import styled, {keyframes} from 'styled-components';

const upAnimation1 = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const upAnimation2 = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;


const S = {}; 

  S.ChatArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  `

  S.ChatBubble1 = styled.div`
    background-color: ${({ user }) => (user ? '#000' : 'none')};
    border: ${({ user }) => (user ? 'none' : '2px solid black')};
    color: ${({ user }) => (user ? '#fff' : '#000')};
    padding: 12px 16px;
    border-radius: 20px;
    font-size: 15px;
    max-width: 70%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    align-self: ${({ align }) => (align === 'right' ? 'flex-end' : 'flex-start')};
    position: relative;

    animation: ${upAnimation1} 0.5s ease-out;
    animation-delay: 0.5s; 
    animation-fill-mode: backwards; 
  `;

  S.ChatBubble2 = styled.div`
    background-color: ${({ user }) => (user ? '#000' : 'none')};
    border: ${({ user }) => (user ? 'none' : '2px solid black')};
    color: ${({ user }) => (user ? '#fff' : '#000')};
    padding: 12px 16px;
    border-radius: 20px;
    font-size: 15px;
    max-width: 70%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    align-self: ${({ align }) => (align === 'right' ? 'flex-end' : 'flex-start')};
    position: relative;

    animation: ${upAnimation2} 0.5s ease-out;
    animation-delay: 0.5s; 
    animation-fill-mode: backwards; 
  `;
  

  S.Wrapper = styled.div`
    gap: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 1080px;
    background-color: #ffd400;
    padding-top: 40px;
  `

  S.TopWrapper = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 40px; 
  `

  S.bottomWrapper = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    gap: 40px;
  `

  S.MainWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    width: 100%;
    max-width: 1200px;
    gap: 40px;  
  `;

  S.SectionWrapper1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 200px;
  `;

  S.SectionWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 20px;
  `;

  S.InfoBlock1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    text-align: left;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
    margin-bottom: 200px;
    word-wrap: break-word;
  `;

  S.InfoBlock2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    text-align: left;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
    word-wrap: break-word;
  `;

  S.bottomWrapper = styled.div`
    display: flex;
    /* flex-direction: column;  */
    gap: 20px; 
  `;

  S.InfoTitle = styled.div`
    font-size: 22px;
    font-weight: bold;
    color: #000;
    margin-bottom: 5px;
  `;

  S.InfoText = styled.div`
    font-size: 17px;
    color: #555;
  `;

  S.InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.75);
    padding: 8px 12px;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 100px;
  `;

  S.Input = styled.input`
    color: #000;
    flex: 1;
    padding: 12px;
    border: none;
    background-color: none !important; 
    /* border: 1px solid #ddd; */
    /* border-radius: 8px; */
    font-size: 17px;  

    &:focus {
      outline: none;
    }
  `;

  S.SendButton = styled.button`
    padding: 12px 18px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #333;
    }
  `;

export default S;
