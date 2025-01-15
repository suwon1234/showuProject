import styled from 'styled-components';

const S = {};

S.LessonMakeWrapper = styled.div`
    background-color: #000;
    position: relative;
`

S.LessonMakeTopBg = styled.div`
    width: 100vw;
    height: 150px;
    margin-bottom: 50px;
    background-color: #ccc;
`
S.LessonMakeThumbnail = styled.img`
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 20px;
    background-color: #eee;
    top:50px;
    left: 380px;
    `
S.LessonMakingFormWrapper = styled.div`
    border: 1px solid #fff;
    width: 1200px;
    margin: 0 auto;
    padding: 100px 115px;
`

S.LessonMakingTitle = styled.h1`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 100px;
`
S.MakeTitle = styled.h3`
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 30px;
`
S.ProfileRegistration = styled.div`
    display: flex;
    gap: 78px;
    margin-bottom: 70px;
    label {
        display: block;
        width: 180px;
        height: 180px;
        border: none;

        #tumbnailImage {
            display: none;
        }
    }
`
S.ProfileThumbnail = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: #ccc;
`

S.CategoryRegistration = styled.div`
    margin-bottom: 65px;
`
S.ProfileInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    input[type='text']{
        width: 600px;
        height: 50px;
        border-radius: 5px;
        background-color:transparent;
        border: 1px solid #ffd400;
        padding: 13px;
        font-size: 20px;
        box-sizing: border-box;
    }
    
`
S.LessonCategoryWrapper =styled.div`
    display: flex;
    gap: 30px;

    button {
        width: 200px;
        height: 55px;
        border: none;
        border-radius: 5px;
        font-size: 17px;
        font-weight: 600;
        background-color: #797979;

        &.active {
            background-color: #ffd400;
            color: #000;
        }
    }
`
// S.LessonCategory = styled.button`
//     width: 200px;
//     height: 55px;
//     border: none;
//     border-radius: 5px;
//     font-size: 17px;
//     font-weight: 600;
//     background-color: #797979;

//     &.active {
//         background-color: #ffd400;
//         color: #000;
//     }
// `

S.LocationRegistation =styled.div`
    margin-bottom: 65px;
`
S.LessonLocationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
S.LessonLocation = styled.input`
    width: 862px;
    height: 50px;
    border-radius: 5px;
    font-size: 20px;
    padding: 13px;
    border: 1px solid #fff;
    background-color: transparent;
`
S.DetailsRegistration = styled.div`
    margin-bottom: 65px;
`
S.LessonDetails = styled.textarea`
    width: 862px;
    height: 50px;
    border: 1px solid #fff;
    padding: 13px;
    background-color: transparent;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    line-height: 27px;
`
S.LessonEtcRegistration = styled.div`
    margin-bottom: 65px;
`
S.EtcWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

S.LessonRecord = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;

    .recordHistoryinput {
        width: 100%;
        height: 50px;
        border: 1px solid #fff;
        padding: 13px;
        background-color: transparent;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 500;
    }

`
S.Educations = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;

    .educationsInput {
        width: 100%;
        height: 50px;
        border: 1px solid #fff;
        padding: 13px;
        background-color: transparent;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 500;
    }

`

S.EtcDetails = styled.input`
    border: 1px solid #fff;
    width: 600px;
    height: 50px;
    border: 1px solid #fff;
    padding: 13px;
    background-color: transparent;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
`

S.PortfoilosRegistration =styled.div`
    width: 862px;
    margin-bottom: 65px;
    position: relative;

    h3 {
        margin-bottom: 80px;
    }
`
S.PortfoilosRegistrationButton = styled.button`
    position: absolute;
    top: 10px;
    right: 0;
    width: 200px;
    height: 55px;
    border-radius: 5px;
    border: none;
    background-color: #ffd400;
    color: #000;
    text-align: center;
    font-size: 17px;
    font-weight: 600;
`
S.PortfolioThumbnailWrapper = styled.div`
    display: flex;
    gap:20px;
`
S.PortfolioThumbnail = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 20px;
    background-color: #ccc;
`

S.MediasRegistration = styled.div`
    width: 862px;
    margin-bottom: 65px;
    position: relative;

    h3 {
        margin-bottom: 80px;
    }
`

S.MediasRegistrationButton = styled.button`
    position: absolute;
    top: 10px;
    right: 0;
    width: 200px;
    height: 55px;
    border-radius: 5px;
    border: none;
    background-color: #ffd400;
    color: #000;
    text-align: center;
    font-size: 17px;
    font-weight: 600;
`
S.MediasThumbnailWrapper = styled.div`
    display: flex;
    gap:20px;
`

S.MediasThumbnail = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 20px;
    background-color: #ccc;
`
S.LessonNoticeRegistration = styled.div`
    margin-bottom: 100px;
`
S.LessonNotice = styled.textarea`
    width: 862px;
    height: 250px;
    border-radius: 5px;
    border: 1px solid #fff;
    background-color: transparent;
    padding: 13px;
    font-size: 20px;
    font-weight: 500;
    font-size: 27px;
`
S.ButtonWrapper = styled.div`
    width: 630px;
    margin: 0 auto;
    display: flex;
    gap: 30px;
`
S.CancleButton = styled.button`
    width: 300px;
    height: 100px;
    border-radius: 50px;
    border: none;
    background-color: #797979;
    color: #444;
    font-size: 25px;
    font-weight: 600;
`

S.SubmitButton =styled.button`
    width: 300px;
    height: 100px;
    border-radius: 50px;
    border: none;
    background-color: #ffd400;
    color: #000;
    font-size: 25px;
    font-weight: 600;
`

export default S