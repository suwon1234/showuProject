import React, { useEffect, useRef, useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import S from './style'; 
import AOS from 'aos';
import 'aos/dist/aos.css';


const MainChat = () => {
  const [messages1, setMessages1] = useState([
    { send: 'user', 
      text: '레슨은 초보자도 가능한가요?' 
    },
    { send: 'bot', 
      text: '물론입니다.' 
    },
    { send: 'bot', 
      text: '초보자부터 고급자까지, 레벨에 맞춘 수업을 제공하고 있습니다.' 
    },
  ]);

  const [messages2, setMessages2] = useState([
    { 
      send: 'user', 
      text: '새로운 도전을 해보고 싶어요!' 
    },
    { 
      send: 'bot', 
      text: '그럼 팀원과 함께 도전하는 건 어때요?' 
    },
    { 
      send: 'user', 
      text: '팀원과 함께 시작할 수 있나요?' 
    },
    { 
      send: 'bot', 
      text: '네, 팀원과 함께 참여할 수 있는 레슨이 준비되어 있습니다.' 
    },
  ]);


  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-out', 
      once: true, 
    });
  }, []);

  

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');


  const handleSendMessage1 = () => {
    if (inputValue1) {
      setMessages1([
        ...messages1, { send: 'user', text: inputValue1 }
      ]);
      setInputValue1('');
    }
  };

  const handleSendMessage2 = () => {
    if (inputValue2) {
      setMessages2([
        ...messages2, { send: 'user', text: inputValue2 }
      ]);
      setInputValue2('');
    }
  };



    

  return (
    <S.Wrapper>
      <S.MainWrapper>

        <S.TopWrapper>

          <S.SectionWrapper1 
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <S.ChatArea>
              {messages1.map((msg, i) => (
                <S.ChatBubble1
                  key={i}
                  user={msg.send == 'user'}
                  align={msg.send == 'user' ? 'right' : 'left'}
                  style={{ animationDelay: `${i * 0.75}s` }}
                  // data-aos="fade-up" 
                  // data-aos-delay={i * 200} 
                >
                  {msg.text}
                </S.ChatBubble1>
              ))}
            </S.ChatArea>

            <S.InputWrapper>
              <S.Input
                type="text"
                value={inputValue1}
                onChange={(e) => setInputValue1(e.target.value)}
                placeholder="메시지를 입력하세요..."
              />
              <S.SendButton onClick={handleSendMessage1}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </S.SendButton>
            </S.InputWrapper>
          </S.SectionWrapper1>

          <S.InfoBlock1 
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            >
            <div className='text-container'>
            <S.InfoTitle>누구나 레슨 가능</S.InfoTitle>
            <S.InfoText>참여하고 싶은 레슨이 있다면 지금 바로 시작해보세요!</S.InfoText>
            </div>
          </S.InfoBlock1>

        </S.TopWrapper>


        <S.bottomWrapper>

        <S.InfoBlock2 data-aos="fade-right">
            <div className='text-container'>
            <S.InfoTitle>새로운 동료와 도전</S.InfoTitle>
            <S.InfoText>같은 꿈을 가진 팀원을 만나 함께 성장해보세요!</S.InfoText>
            </div>
        </S.InfoBlock2>

        <S.SectionWrapper2 data-aos="fade-up">
          <S.ChatArea>
            {messages2.map((message, i) => (
              <S.ChatBubble2
                key={i}
                user={message.send == 'user'}
                align={message.send == 'user' ? 'right' : 'left'}
                style={{ animationDelay: `${i * 0.75}s` }}           
              >
                {message.text}
              </S.ChatBubble2>
            ))}
          </S.ChatArea>

          <S.InputWrapper>
            <S.Input 
              type="text"
              value={inputValue2}
              onChange={(e) => setInputValue2(e.target.value)}
              placeholder="메시지를 입력하세요..."
            />
            <S.SendButton onClick={handleSendMessage2}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </S.SendButton>
          </S.InputWrapper>
          
        </S.SectionWrapper2>  

        </S.bottomWrapper>

      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default MainChat;
