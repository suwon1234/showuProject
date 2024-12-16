import styled from 'styled-components';

const S = {};
S.TeamList = styled.li`
    width: 820px;
    margin:  0 auto;
    font-size: 16px;
    font-weight: 300;
    list-style: none;
    padding: 25px 50px;
    border-bottom: 1px solid #ffd400;
    display: flex;
    justify-content: space-between;
`
S.TeamListWrapper =styled.div`
`

S.TeamTitleWrapper =styled.div`
    font-size: 18px;
    display: flex;
    gap: 10px;
    margin-bottom: 5px;

    .teamTitle {
        font-weight: 700;
    }

    .teamLocation {
        font-weight: 500;
        color: #777;
    }
`
S.TeamLocationWrapper =styled.p`
    display: flex;
    gap: 5px;
    margin-bottom: 5px;

    .teamLicationAddress {
        color: #777;
    }

`
S.DivideDot = styled.span`
    display: block;
    width: 2px;
    height: 2px;
    border-radius: 2px;
    background-color: #fff;
    margin-top: 10px;
`
S.TeamSummaryWrapper =styled.p`
    display: flex;
    gap: 5px;
    margin-bottom: 15px;
`
S.TeamEtc = styled.p`
    display: flex;
    gap: 5px;
`
S.TeamThumbnailWrapper =styled.div`
    .teamThumbnail {
        width: 110px;
        height: 110px;
        border-radius: 10px;
        background-color: #ffd400;
    }
`

export default S