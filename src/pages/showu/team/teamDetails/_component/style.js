import styled from 'styled-components';

const S = {};

S.TeamDetailsWrapper = styled.div`
    width: 1080px;
    display: flex;
    gap: 36px;
    margin: 0 auto;
`

S.TeamDetailsLeftContentsWrapper = styled.div`
    padding: 30px 50px;
    width: 395px;
    height: 316px;
    border: 1px solid #ffd400;
    border-radius: 10px;
`

S.TeamDetailsRightContentsWrapper = styled.div`
    width: 638px;
    height: 811px;
    border: 1px solid #ffd400;
    border-radius: 10px;
    padding: 60px 30px;
    position: relative;
`
S.TeamDetails = styled.div`
   margin-bottom: 50px;
`
S.TeamDetailSummary = styled.div`
    display: flex;
    gap:20px;
    margin-bottom: 40px;
    img {
        width: 50px;
        height: 50px;
        display: block;
        background-color: #ccc;
        border-radius: 40px;
    }
`
S.TeamTitle =styled.h2`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
`

S.TeamInfomation =styled.div`
    display: flex;
    gap: 10px;

    span {
        font-size: 12px;
        font-weight: 300;
    }

`

S.TeamCharactersWrapper = styled.div`
    display: flex;
    gap: 60px;
    height: 50px;
    flex-wrap: wrap;
    .TeamCharacter {
        display: flex;
        gap:5px;
        margin-bottom: 15px;
        .starIcon {
            path {
                color: #ffd400;
            }
        }
        span {
            font-size: 12px;
            font-weight: 500;
        }
    }
`
S.ButtonWrapper =styled.div`
    display: flex;
    gap: 20px;
`

S.SubscriptionButton =styled.button`
    width: 140px;
    height: 55px;
    border: none;
    border-radius: 50px;
    background-color: #ffd400;
    color: #000;
    font-size: 17px;
    font-weight: 600;
`
S.ClosedButton = styled.div`
    width: 140px;
    height: 55px;
    border: none;
    border-radius: 50px;
    background-color: #797979;
    color: #ffffff;
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    padding-top: 15px;
`

S.TeamIntroduceContents = styled.div`
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    width: 500px;
    height: 600px;
`
S.TeamLikeButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    top: 60px;
    right: 30px;
    text-align: center;
    .likeButtonIcon {
        width: 30px;
        height: 30px;
        .active {
            path {
                color: #fb0505;
            }
        }

        path {
            color : #797979;
        }
    }

    span {
        font-size: 16px;
        color: #595959;    
    }
`



export default S; 