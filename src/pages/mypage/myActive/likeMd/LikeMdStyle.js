import styled from 'styled-components';

const S = {};

  S.Container = styled.div`
    width: 900px;
    height: 100vh;
  `

  S.Wrapper = styled.div`
    width: 373px;
    height: 390px;
  `

  S.Image = styled.div`
    & img {
      width: 373px;
      height: 269px;
    }
  `

    

export default S;