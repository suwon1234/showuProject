import styled from "styled-components";

const S = {};

  S.NoneItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  `

  S.LinkToPath = styled.p`
    cursor: pointer;
    border: 1px solid #ffd400;
    background-color: #ffd400;
    color: #000;
    padding: 10px;
    border-radius: 5px;
  `

  S.Outer = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 30px;

    margin-top: 60px;
  `

  S.Container = styled.ul`
    width: 200px;
    height: 270px;
  `

  S.Wapper = styled.li`
    width: 200px;
    height: 270px;

  `

  S.Lesson = styled.div`
    width: 200px;
    height: 270px;

    position: relative;

    & img {
      width: 200px;
      height: 270px;
      border-radius: 10px;
      filter: brightness(70%);
      z-index: 1;
      object-fit: cover;
    }

    & .name {
      position: absolute;
      top: 13px;
      left: 13px;

      font-size: 17px;
      font-weight: 700;
      z-index: 2;
    }

    & .lessonTitle {
      position: absolute;
      bottom: 10px;
      left: 13px;

      font-size: 20px;
      font-weight: 800;
      z-index: 2;
    }

    & svg.heart{
      position: absolute;

      top: 13px;
      right: 13px;

      z-index: 2;
      cursor: pointer;

      &:hover path{
        fill: #ffd400;
      }
    }
  `

export default S;