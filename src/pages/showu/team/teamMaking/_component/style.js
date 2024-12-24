import styled from 'styled-components';

const S = {};

S.TeamMakingNameWrapper =styled.div`

    /* display: none; */
    
`

S.MakingDetailsTitle = styled.h3`
    display: flex;
    flex-direction: column;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
`
S.TeamMakingName = styled.div`
    width: 512px;
    margin-bottom: 35px;
`
S.DetailsTitle =styled.span`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
`
S.TeamNameInput = styled.input`
    width: 500px;
    height: 55px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    margin: 10px 12px 0px 12px;
    padding: 15px;
`
S.TeamMakingCode = styled.div`
    width: 512px;
    margin-bottom: 35px;
`

S.TeamCodeInput = styled.input`
    width: 500px;
    height: 55px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    margin: 10px 12px 0px 12px;
    padding: 15px;
`

S.TeamMakingNameGuide = styled.div`
    margin-bottom: 55px;
    p{
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px;
    }
`
S.TeamMakingSubmibuttonWrapper = styled.div`
    button {
        border: none;
        width: 525px;
        height: 55px;
        border-radius: 50px;
        background-color: #ffd400;
        color: #000;
        font-size: 17px;
        font-weight: 600;

    }

`

S.TeamMakingProfileWrapper = styled.div`
    /* display: none; */

`

S.MakingDetailsTitle = styled.h3`
    display: flex;
    flex-direction: column;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
`

S.TeamCategoryWrapper = styled.div`
    width: 525px;
    display: flex;
    gap: 15px;
    margin-bottom: 15px;

    button {
        width: 165px;
        height: 50px;
        border-radius: 50px;
        border: none;
        background-color:#797979;
        color: #fff;

    }

    .active {
        background-color: #ffd400;
        color: #000;
    }

`
S.TeamMakingSubmibuttonWrapperTwo = styled.div`
    display: flex;
    gap: 15px;
    button {
        width: 255px;
        height: 50px;
        border-radius: 50px;
        border: none;
    }

     .backButton{
        background-color: #797979;
        color: #fff;
     }

     .nextButton {
        background-color: #ffd400;
        color: #000;
     }
`

S.TeamMakingDateWrapper = styled.div`
/* display: none; */
    p {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 40px;
    }
`
S.TeamMakingDate = styled.div`
    span{
        font-size: 14px;
        font-weight: 700;
    }
`
S.TeamDateWrapper = styled.div`
    display: flex;
    gap: 10px;
    width: 522px;
    margin-bottom: 40px;
    button {
        margin-top: 15px;
        width: 66px;
        height: 55px;
        border: none;
        border-radius: 5px;
        background-color: #797979;
        color: #fff;
    }

    .active {
        background-color: #ffd400;
        color: #000;
    }

`

S.TeamMakingTime = styled.div`
    span{
        font-size: 14px;
        font-weight: 700;
    }

`

S.TeamTimeWrapper =styled.div`
    display: flex;
    gap: 10px;
    width: 522px;
    margin-bottom: 40px;
    button {
        margin-top: 15px;
        width: 123px;
        height: 55px;
        border: none;
        border-radius: 5px;
        background-color: #797979;
        color: #fff;
        padding: 9px;

        span {
            font-size: 17px;
            font-weight: 600;
        }

        p{
            font-size: 12px;
            font-weight: 300;
        }
    }
    .active {
        background-color: #ffd400;
        color: #000;
    }
`

S.TeamMakingMemberWrapper = styled.div`
/* display: none; */

    p {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 40px;
    }
`
S.TeamMakingAge =styled.div`
    margin-bottom: 30px;
     span{
        font-size: 14px;
        font-weight: 700;
    }
`
S.TeamAgeWrapper =styled.div`
    display: flex;
    width: 524px;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 15px;
    button {
        width: 168px;
        height: 55px;
        border: none;
        border-radius: 5px;
        background-color: #797979;
        color: #fff;
        padding: 17px;
        font-size: 17px;
        font-weight: 600;
    }

    .active {
        background-color: #ffd400;
        color: #000;
    }
`

S.TeamMakingGender = styled.div`
    margin-bottom: 75px;
  span{
        font-size: 14px;
        font-weight: 700;
    }


`
S.TeamGenderWrapper = styled.div`
    display: flex;
    width: 524px;
    gap: 10px;
    margin-top: 15px;

    button {
        width: 168px;
        height: 55px;
        border: none;
        border-radius: 5px;
        background-color: #797979;
        color: #fff;
        padding: 17px;
        font-size: 17px;
        font-weight: 600;
    }

    .active {
        background-color: #ffd400;
        color: #000;
    }
`

S.TeamMakingSkillWrapper =styled.div`
/* display: none; */
    p {
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 40px;
        }

`

S.TeamMakingSkill = styled.div`
    margin-bottom: 40px;
    span{
            font-size: 14px;
            font-weight: 700;
        }

`
S.TeamSkillWrapper = styled.div`
    display: flex;
    width: 524px;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 15px;

    button {
        width: 168px;
        height: 55px;
        border: none;
        border-radius: 5px;
        background-color: #797979;
        color: #fff;
        padding: 17px;
        font-size: 17px;
        font-weight: 600;
    }

    .active {
        background-color: #ffd400;
        color: #000;
    }

`

S.TeamMaKingAnnouncementWrapper = styled.div`
    textarea {
        width: 525px;
        height: 325px;
        border: 1px solid #fff;
        border-radius: 5px;
        margin-bottom: 40px;
        background-color: transparent;
        padding: 20px;
    }
`

export default S;