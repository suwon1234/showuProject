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
  background-color: #FDDE39;
`
S.navbar=styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`
S.logo=styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
 

  & .logolink{
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    font-style: Pretendard;
  }
  & span {
    color: #FDDE39;
    
  }

`

S.searchinput=styled.input`
  margin-left: 10px;
  padding: 8px;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  width: 549px;
  height: 54px;
  border: 1px solid #ccc;

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

S.menubar=styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18px;
  gap: 84px;

  & .menuitem{
  text-decoration: none;
  color: white;
  font-size: 18px;
  & .active {
      & p {
        color : #917cf0 !important;
      }

      & path {
        color : #917cf0 !important;
      }
    }
  }
  & .menuitemhot{
    color: red;
  }
  & .menudivider{
    color: white;
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










export default S;