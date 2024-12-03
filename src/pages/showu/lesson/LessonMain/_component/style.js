import styled from "styled-components";
import { faStar } from'@fortawesome/free-solid-svg-icons';
const S = {};

S.LessonList = styled.li`
    float: right;
    width: 820px;
    padding: 40px 50px 30px 50px;
    border-bottom: 1px solid #ffd400;  

`
S.LessonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


S.LessonName = styled.p`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
`
S.LessonLikeWrapper = styled.div`
    display: flex;
`

S.LessonLikeWrapper = styled.p`
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
    .lessonStarIcon {
        font-size: 16px;
        color: #ffd400;

        path {
            color: #ffd400;
        }

        
    }
    
    .lessonLikeWrapper {
        font-size: 14px;
        font-weight: 600;
        line-height: 16px;
    }

    .centerDot {
        width: 2px;
        height: 2px;
        border-radius: 2px;
        background-color: #fff;
        margin-top: 8px; 
    }

    .careerYear {
        font-size: 12px;
        font-weight: 300;
        line-height: 16px;
    }

`

S.LessonSummary = styled.p`
    font-size: 10px;
    font-weight: 300;

`

S.LessonThumbnailWrapper = styled.div`
    display: block;
    width: 73px;
    height: 73px;
    background-color: #555;
    border-radius: 10px;
`

export default S;