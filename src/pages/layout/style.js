import styled from 'styled-components';

const S = {}

  S.Background=styled.div`
    width: 100%;
    position: relative;
    min-height: 100%;
    background-color: black;
  `

  S.header=styled.header`
    min-width: 1240px;
    background-color: black;
    padding: 10px 20px;
    position: sticky;
  `

  S.topbar=styled.div`
    width: 100%;
    height: 48px;
    background-color: #FDDE40;
  `

  S.navbar=styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    gap: 100px;
  `

  S.LogoBox = styled.div`
    display: flex;
    align-items: center;
    gap: 90px;
  `

  S.logo=styled.div`
    color: white;
    font-size: 24px;
    font-weight: bold;
  

    & .logolink{
      font-size: 1.5rem;
      color: white;
      text-decoration: none;
    }

    & span {
      color: #FDDE40;
      
    }

  `

  S.SearchBox = styled.div`
    width: 549px;
    height: 54px;
    position: relative;
    
    & input {
      width: 100%;
      height: 100%;
      border-radius: 50px;
      border: 1px solid #444444;
      padding: 10px 8px 8px 15px;
      position: relative;

      &::placeholder {
        font-size: 20px;
      }
    }

    & svg.search {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 20px;
      height: 20px;

      & path {
        color: #000;
      }
    }
  `

  S.authlinks=styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;

    & .highlight{
      color: #FDDE39;
    }

    & .showUlink{
      color: #717171;
    }
    & span {
      color: #FDDE39;
      
    }

  `

  S.menubar = styled.div`
    display: flex;
    justify-content: center;
    margin: 18px 0;
    gap: 84px;

    & .menuitem{
      text-decoration: none;
      color: white;
      font-size: 18px;
    }
  `

    S.HotBox = styled.div`
      display: flex;
      align-items: center;
      gap: 5px;

      & p {
        color: #FB0505;
        font-size: 18px;
      }

      & svg.fire {

        & path {
          color : #FB0505;
        }
      }
    `

  S.main=styled.main`
    width: 100%;
    z-index: 10;
    margin: 0 auto;
    padding-bottom: 50px;
    height: 100%;
    min-height: 1080px;
    overflow: hidden;
    min-width: 1240px;
    background-color: black;

    & .slider{

    }
  `


  /* 커뮤니티 메뉴 스타일 */

  S.dropdown = styled.div`
    position: absolute;
    background-color: black;
    border: 1px solid #ccc;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    z-index: 10;
    display: block;
  `;

  S.dropdownItem = styled.div`
    padding: 10px 20px;

      a {
        color: white;
        text-decoration: none;
        display: block;
        padding: 5px 0;
      }

      a:hover {
        color: #FDDE39;
        font-weight: bold;
        text-decoration: underline;
        }
  `;

  S.AfterLogin = styled.div`
    & button {
      background-color: #000;
      border: none;
    }
  `


export default S;