import styled from "styled-components";

const S = {};

  S.Outer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;

    margin-top: 60px;
  `

  S.Container = styled.ul`
    width: 400px;
    height: 220px;
  `

  S.Wapper = styled.li`
    width: 400px;
    height: 220px;

  `

  S.Lesson = styled.div`
    width: 400px;
    height: 220px;

    position: relative;

    & img {
      width: 400px;
      height: 220px;
      border-radius: 20px;
      filter: brightness(70%);
      z-index: 1;
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

      font-size: 17px;
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