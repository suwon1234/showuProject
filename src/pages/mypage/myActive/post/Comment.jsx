import React from 'react';
import S from './CommentStyle';

const Comment = () => {
  return (
    <div>
      <div>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <th scope='col'></th>
              <th scope='col'>댓글 내용</th>
              <th scope='col'>카테고리</th>
              <th scope='col'>작성일</th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            <S.ContentTr>
              <th scope='row'>1</th>
              <td>커뮤니티의 댓글의 내용이 들어가요</td>
              <td>MD</td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>2</th>
              <td>커뮤니티의 댓글의 내용이 들어가요</td>
              <td>MD</td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>3</th>
              <td>커뮤니티의 댓글의 내용이 들어가요</td>
              <td>MD</td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>4</th>
              <td>커뮤니티의 댓글의 내용이 들어가요</td>
              <td>MD</td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>5</th>
              <td>커뮤니티의 댓글의 내용이 들어가요</td>
              <td>MD</td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>6</th>
              <td>커뮤니티의 댓글의 내용이 들어가요</td>
              <td>MD</td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>7</th>
              <td>커뮤니티의 댓글의 내용이 들어가요</td>
              <td>MD</td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>8</th>
              <td>커뮤니티의 댓글의 내용이 들어가요</td>
              <td>MD</td>
              <td>2024.11.29 17:00</td>
            </S.ContentTr>
          </S.Tbody>
        </S.Table>
      </div>
    </div>
  );
};

export default Comment;