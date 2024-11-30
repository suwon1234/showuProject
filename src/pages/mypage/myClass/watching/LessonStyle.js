import styled from "styled-components";

const S = {};

  S.Outer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  `

  S.Container = styled.ul`
    width: 200px;
    height: 200px;
  `

  S.Wapper = styled.li`
    width: 800px;
    height: 200px;

  `

  S.Lesson = styled.div`
    width: 200px;
    height: 200px;

    position: relative;

    & img {
      border-radius: 20px;
      filter: brightness(70%);
      z-index: 1;
    }

    & .name {
      position: absolute;
      top: 13px;
      left: 13px;

      font-size: 12px;
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