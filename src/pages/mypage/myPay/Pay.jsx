import React, { useEffect, useState } from 'react';
import S from './PayStyle';
import { useNavigate } from 'react-router-dom';

const Pay = () => {
  const [payData, setPayData] = useState([]);

  useEffect(() => {
    const getPay = async () => {
      try {
        const response = await fetch(`http://localhost:4000/pay`);
        const datas = await response.json();
        setPayData(datas);
      } catch (error) {
        console.log("PayError", error);
      }
    };

    getPay();
  }, []);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <S.Table>
        <S.Thead>
          <S.Tr>
            <th scope="col">No</th>
            <th scope="col">날짜</th>
            <th scope="col">상품명</th>
            <th scope="col">결제금액</th>
            <th scope="col">카테고리</th>
            <th scope="col">결제상태</th>
          </S.Tr>
        </S.Thead>
        <S.Tbody>
          {payData.map((item, i) => (
            <React.Fragment key={i}>
              <S.ContentTr>
                <th scope="row">{item.id}</th>
                <td>{item.date}</td>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.state}</td>
              </S.ContentTr>

              <tr>
                <td colSpan="6">
                  <S.Image>
                    {item.images.map((imgSrc, imgIndex) => (
                      <img
                        key={`${item.id}-${imgIndex}`}
                        onClick={() => handleNavigate('/shop/md/detail')}
                        src={process.env.PUBLIC_URL + imgSrc}
                        alt={`상품 이미지`}
                      />
                    ))}
                  </S.Image>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </S.Tbody>
      </S.Table>
    </div>
  );
};

export default Pay;
