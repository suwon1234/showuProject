import React from 'react';
import S from './style';

const Community = () => {
  const commuData = [
    {
      id: 1,
      title: "타이틀1",
      description: "설명1",
      imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/kingkyboots-musical-ko-008-06.jpg?v=1732526131",
    },
    {
      id: 2,
      title: "타이틀2",
      description: "설명2",
      imageUrl: "https://www.sac.or.kr//site/main/file/thumbnail/uu/d5eb6904359c4b5d8eae72d44160e40d",
    },
    {
      id: 3,
      title: "타이틀3",
      description: "설명3",
      imageUrl: "https://lv2-cdn.azureedge.net/day6/42990251ca404e40bb4fcf81f7be9680-[%ED%81%B4%EB%A6%B0]%200830_%20Concept%20Photo_%20Group%201-2.jpg",
    },
    {
      id: 4,
      title: "타이틀4",
      description: "설명4",
      imageUrl: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20241015_196%2F1728982918695jsvLp_JPEG%2Fmovie_image.jpg"
    },
    {
      id: 5,
      title: "타이틀5",
      description: "설명5",
      imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/42ndstreetonbroadway-musical-ko-003-07.jpg?v=1676454555"
    },
    {
      id: 6,
      title: "타이틀6",
      description: "설명6",
      imageUrl: "https://www.sejongpac.or.kr/cmmn/file/imageSrc.do?fileStreCours=faec0c25744c22e99776405c0fa72802b034c11453522f543494e84872ada102&streFileNm=4be0a06b6afe2f47cbcd2948ad228dbf52e2f1440befb29c34155b70a7ef77fe"
    },
    {
      id: 7,
      title: "타이틀7",
      description: "설명7",
      imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/gwangwhamunlovesong-musical-ko-004-03.jpg?v=1727398714"
    },
    {
      id: 8,
      title: "타이틀8",
      description: "설명8",
      imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/maybe-a-happy-ending-musical-ko-007-05.jpg?v=1728331267"
    },
    {
      id: 9,
      title: "타이틀9",
      description: "설명",
      imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/contents-detail-image-moulin-rouge-the-musical-10.jpg?v=1678248215"
    },
  ];

  return (
    <S.Wrapper>
        <S.TopTitle>커뮤니티</S.TopTitle>

      <S.SubWrapper>
          <S.Buttons>
            <button>둘러보기</button>
            <button>글쓰기</button>
          </S.Buttons>

        <S.Info>
          {commuData.map((item) => (
            <S.Img key={item.id}>
              <img src={item.imageUrl} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </S.Img>
          ))}
        </S.Info>
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default Community;