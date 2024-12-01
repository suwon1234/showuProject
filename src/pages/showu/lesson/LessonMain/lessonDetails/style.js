import styled from 'styled-components';

const S = {};

S.LessonDetailsWrapper = styled.div`
    margin: 0 auto;
    background-color: #000;

`
S.LessonDetailContentsWrapper = styled.div`
    width: 1200px;
    position: relative;
    margin:  0 auto;
    padding-left: 20px;
`


S.LessonDetailsTopBg = styled.div`
    background-color: #ccc;
    width: 100%;
    height: 150px;
`
S.LessonDetailsThunbnail = styled.img`
    display:block;
    position: absolute;
    top: -100px;
    background-color: #fff;
    border-radius: 20px;
    width: 150px;
    height: 150px;
`
S.LessonName = styled.h2`
    display: block;
    padding-top: 100px;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 20px;
`

S.LessonDetailsSummary = styled.div`
    margin-bottom: 100px;
`

S.LessonClassAndLocation = styled.p`
    display: flex;
    gap: 25px;
    font-size: 18px;
    font-weight:500;
    margin-bottom: 30px;
`
S.LessonSummary = styled.p`
    font-size: 18px;
    font-weight: 300;
`

S.LessonDetailsLink = styled.div`
    width:385px ;
    display: flex;
    gap: 20px;
    margin-bottom: 70px;
    a:hover  span{
        font-size: 18px;
        font-weight: 400;
        display: block;
        color: #ffd400;
        border-bottom: 1px solid #ffd400;
    }

`
S.Title = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
`

S.Infomation = styled.div`
    margin-bottom: 50px;

    p{
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 15px;
        display: flex;
        gap: 10px;
    }

`



S.ServiceDetails =styled.div`
    position: relative;
    width: 640px;
    height: 215px;
    margin-bottom: 70px;

`

S.Details =styled.div`
   

    p{
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 20px;
    }
`
S.MoreDetails = styled.span`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    gap: 10px;
`
S.PersonalHistory = styled.div`
    width: 620px;
    height: 420px;
    position: relative;
    margin-bottom: 70px;

`
S.DayOfExperience = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #ffd400;
    margin-bottom: 20px;
`

S.PersonalHistoryTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 25px;
`
S.PersonalHistoryTitle = styled.p`
    font-size: 16px;
    font-weight: 400;
`
S.PersonalHistoryPeriod = styled.div`
    display: flex;
    gap: 10px;
    font-size: 12px;
    font-weight: 400;
`

S.PersonalHistorySummary = styled.p`
    font-size: 14px;
    color: #5a5a5a;
`

S.Education = styled.div`
    margin-bottom: 120px;
`
S.EducationsDetailBox =styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
S.EducationDetailSpace = styled.p`
    font-size: 16px;
    font-weight: 400;
`
S.EducationDetailPeriod = styled.p`
    font-size: 12px;
    font-weight: 400;
`
S.EducationDetailSubjects = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #5a5a5a;
`

export default S;