import React, { useEffect, useState } from 'react';
import S from './ReviewStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = () => {
  const [ reviews, setReviews ] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetch(`http://localhost:4000/review`);
        const datas = await response.json();
        setReviews(datas)
      } catch (error) {
        console.log("ReviewError", error)
      }
    }

    getReviews()

  }, [])

  // console.log(reviews)

  return (
    <S.Container className='Container'>
      { reviews && reviews.map((item, i) => (
        <S.Wrapper key={i} className='Wrapper'>
          <S.Title className='title'>
            <img src={item.profileImageUrl} alt="프로필 이미지" />
            <S.RightBox className='rightBox'>
              <p className='productName'>{item.productName}</p>
              <p className='writer'>{item.writer}</p>
            <S.Rating className='rating'>
              <FontAwesomeIcon className='star' icon={faStar} />
              <FontAwesomeIcon className='star' icon={faStar} />
              <FontAwesomeIcon className='star' icon={faStar} />
              <FontAwesomeIcon className='star' icon={faStar} />
              <FontAwesomeIcon className='star' icon={faStar} />
              <p className='date'>{item.date}</p>
            </S.Rating>
            </S.RightBox>
          </S.Title>
            <p className='content'>{item.content}</p>
        </S.Wrapper>
      ))}





      {/* <div>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <th scope='col'>No</th>
              <th scope='col'>상품명</th>
              <th scope='col'>후기내용</th>
              <th scope='col'>
              <S.Select name="category" id="category">
                  <option value="MD">전체</option>
                  <option value="MD">MD</option>
                  <option value="경매">경매</option>
                  <option value="경매">레슨</option>
                </S.Select>
              </th>
              <th scope='col'>별점</th>
              <th scope='col'>작성일</th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            <S.ContentTr>
              <th scope='row'>1</th>
              <td>연기 레슨</td>
              <td>좋아요! 다음 강의도 신청하고 싶어요</td>
              <td>레슨</td>
              <td>
                <FontAwesomeIcon icon={faStar} />
                <span>5.0</span>
              </td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>2</th>
              <td>연기 레슨</td>
              <td>좋아요! 다음 강의도 신청하고 싶어요</td>
              <td>레슨</td>
              <td>
                <FontAwesomeIcon icon={faStar} />
                <span>5.0</span>
              </td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>3</th>
              <td>연기 레슨</td>
              <td>좋아요! 다음 강의도 신청하고 싶어요</td>
              <td>레슨</td>
              <td>
                <FontAwesomeIcon icon={faStar} />
                <span>5.0</span>
              </td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>4</th>
              <td>연기 레슨</td>
              <td>좋아요! 다음 강의도 신청하고 싶어요</td>
              <td>레슨</td>
              <td>
                <FontAwesomeIcon icon={faStar} />
                <span>5.0</span>
              </td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>5</th>
              <td>연기 레슨</td>
              <td>좋아요! 다음 강의도 신청하고 싶어요</td>
              <td>레슨</td>
              <td>
                <FontAwesomeIcon icon={faStar} />
                <span>5.0</span>
              </td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>6</th>
              <td>연기 레슨</td>
              <td>좋아요! 다음 강의도 신청하고 싶어요</td>
              <td>레슨</td>
              <td>
                <FontAwesomeIcon icon={faStar} />
                <span>5.0</span>
              </td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>7</th>
              <td>연기 레슨</td>
              <td>좋아요 다음 강의도 신청하고 싶어요</td>
              <td>레슨</td>
              <td>
                <FontAwesomeIcon icon={faStar} />
                <span>5.0</span>
              </td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>8</th>
              <td>연기 레슨</td>
              <td>좋아요! 다음 강의도 신청하고 싶어요</td>
              <td>레슨</td>
              <td>
                <FontAwesomeIcon icon={faStar} />
                <span>5.0</span>
              </td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
          </S.Tbody>
        </S.Table>
      </div> */}
    </S.Container>
  );
};

export default Review;