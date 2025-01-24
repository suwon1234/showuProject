import styled from "styled-components";

const S = {};

S.app = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1240px;
  min-height: 590px;
  gap: 20px;
  padding: 20px;
  background-color: black;
  position: relative; 
  margin: 0 auto;
`;

S.header = styled.header`
  width: 100%;
  font-size: 32px;
  text-align: left;
`;

S.logo = styled.h1`
  display: inline-flex;
  margin: 0;
  font-size: 2rem;
  gap: 5px;
  .back{
    color: #FFD400;
  }
`;

S.mainContent = styled.div`
  display: flex;
  width: 90%;
  margin-top: 1rem;
`;

S.videoSection = styled.div`
  flex: 3;
  margin-right: 1rem;
`;

S.videoPlaceholder = styled.div`
  width: 795px;
  height: 447px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

S.videoTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

S.videoMeta = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  p{
    margin-right : 16px;
  }
`;

S.profile = styled.div`
  width: 50px;
  height: 50px;
  background-color: #555;
  border-radius: 50%;
  margin-right: 1rem;
`;

S.subscribeButton = styled.button`
  background-color:#FFD400;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  .icon.filled {
    padding:  0.5rem 1rem;
    cursor: pointer;
    path {
      fill: gray; 
      transition: fill 0.3s ease;
    }
  }
  .icon.outlined {
    padding: 0.5rem 1rem;
    cursor: pointer;
    path {
      fill: #FFD400; 
      transition: fill 0.3s ease;
    }
  }
`;

S.commentsSection = styled.div`
  margin-top: 2rem;
`;

S.commentInput = styled.input`
  width: 100%;
  background-color: black;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  color: white;
  border-bottom: 2px solid gray;

  &:focus {
    border-color: #FFD400; 
    outline: none; 
  }
`;

S.commentsList = styled.ul`
  margin-top: 1rem;
  border-top: 2px solid gray;
  .comment-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid gray;
}

.comment-buttons {
  display: flex;

}
`;

S.comment = styled.li`
  margin-bottom: 1rem;
`;

S.commentText = styled.p`
  margin: 0.5rem 0;
  width: 100%;


`;

S.replyButton = styled.button`
  background-color: #FFD400;
  border: none;
  color: black;
  padding: 0.3rem 0.5rem;
  border-radius: 3px;
  cursor: pointer;
`;

S.replies = styled.div`
  margin-left: 1rem;
  margin-top: 0.5rem;
`;

S.sidebar = styled.div`
  flex: 1;
  background-color: #111;
  padding: 1rem;
  border-radius: 5px;
`;

S.suggestedVideos = styled.div`
  display: flex;
  flex-direction: column;
`;

S.videoPoster = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

S.posterPlaceholder = styled.div`
  width: 100%;
  height: 100px;
  background-color: #555;
  margin-bottom: 0.5rem;
`;
S.buttonstyle=styled.div`
display: inline-flex;
width: 100%;
justify-content: flex-end;

.comment-options {
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin-top: 5px;
}

.comment-options button {
  font-size: 0.8rem;
  color: #555;
  background: none;
  border: none;
  cursor: pointer;
}

.comment-options button:hover {
  color: #000;
}


.point{
  background-color: black;
    color: white;
    font-size: 24px;
    border: none;
    &:hover{
      background-color: black;
    }
}
button{
    border-radius : 5px;
    color: black;
    background-color: gray;

    &:hover{
      background-color: #FFD400;
    }
  }

`
S.detail=styled.div`
width: 795px;
height: 111px;
position: relative;
background-color: #222222;
`
S.more=styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute; 
  bottom: 10px; 
  right: 10px; 
  align-items: center; 

  p{
    color: #FFD400;
  }

  .icon{
    color: #FFD400 !important;
  }
`

S.ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

S.ModalContent = styled.div`
  background-color: black;
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  height: 502px;
  color: #FFD400;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);

  h2 {
    font-size: 20px;
    color: #FFD400;
    margin-right: 300px;
   
  }

  p {
    color: #FFD400;
    font-size: 18px;
    padding-top: 20px;
    margin-right: 240px;
  }

  .finish{
    background-color: gray;
    font-size: 17px;
    width: 60px;
    height: 36px;
    color: black;
    border: none;
    border-radius: 50px;
    &:hover{
      background-color: #FFD400;
    }
  }

  .finishbutton{
    display: flex;
    width: 100%;
    margin-top: 50px;
    text-align: right;
    justify-content: space-between;
  }

`;

S.checklist=styled.div`
display:flex;
flex-direction: column;
width: 100%;
gap: 13px;
margin-top: 40px;
.checklist-item {
  display: flex;
  align-items: center;
  .empty-circle {
    width: 20px;
    height: 20px;
    border: 2px solid white; 
    border-radius: 50%;
    margin-right: 10px;
    background-color: transparent;
  }

  &.selected .empty-circle {
    background-color: #FFD400; 
  }
}
span{
  margin-left: 12px;
}
`

S.reportbutton=styled.div`
display: flex;
button{
  background-color: black;
  border: none;
  color: #FFD400;
}

`

export default S;
