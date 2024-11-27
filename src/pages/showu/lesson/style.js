import styled from 'styled-components';

const S = {};

S.LessonMainWrapper = styled.div`
 background-color: #000;
 width: 1200px;
 margin: 0 auto;
`

S.LessonTitle = styled.h1 `
    color : #ffd400;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
    padding: 50px 0;
    height: 140px;
`
S.LessonMainTop =styled.div`
    margin:  0 auto;
    display: flex;
    justify-content: space-between;
`
S.LessonCategoryWrapper = styled.div`
    width: 275px;
    display: flex;
    justify-content: space-between;
    padding: 0 25px 25px 25px;
    border-bottom:  1px solid #fff;

& .lessonCategory {
    background-color: #000;
    width: 100px;
    height: 55px;
    border: 1px solid #ffd400;
    border-radius: 50px;
    color: #ffd400;
    padding: 16px 20px;
    font-size: 18px;
}
`

S.LessonButtonWrapper = styled.div`
    width: 820px;
    display: flex;
    justify-content: end;
    padding:  0 20px 25px 0;
    border-bottom: 1px solid #fff;

    & .lessonCreate {
        background-color: #ffd400;
        width: 150px;
        height: 55px;
        border-radius: 50px;
        color: #000;
        padding: 16px;
        font-size: 18px;
        font-weight: 600;
    }
`

S.LessonListWrapper = styled.ul`
  
`



export default S;