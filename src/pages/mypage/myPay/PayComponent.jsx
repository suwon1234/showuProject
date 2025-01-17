import React from 'react';
import S from './PayStyle';


const PayComponent = ({ currentList }) => {

  return (
    <div>
      <S.Table>
        <S.Thead>
          <S.Tr>
            {/* <th scope="col">No</th> */}
            <th scope="col">날짜</th>
            <th scope="col">상품명</th>
            <th scope="col">결제금액</th>
            <th scope="col">카테고리</th>
            <th scope="col">결제상태</th>
          </S.Tr>
        </S.Thead>
        <S.Tbody>
          {currentList && currentList.map((item, i) => (
            <React.Fragment key={i}>
              <S.ContentTr>
                {/* <th scope="row">{item.id}</th> */}
                <th scope="row">{item.paymentAt}</th>
                {/* <td>{item.paymentAt}</td> */}
                <td>{
                  (item.type === "MD" ? item.productName.mdName : item.productName.auctionName)
                }</td>
                <td>{item.totalAmount}</td>
                <td>{item.type}</td>
                <td>{item.status}</td>
              </S.ContentTr>

              <tr>
                <td colSpan="6">
                  <S.Image>
                    {/* {item.image?.map((imgSrc, imgIndex) => ( */}
                      <img
                        // key={`${item.id}-${imgIndex}`}
                        // onClick={() => handleNavigate('/shop/md/detail/:id')}
                        src={item.productName.image}
                        alt={`상품 이미지`}
                      />
                    {/* ))} */}
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

export default PayComponent;