import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePagination from '../../../hooks/usePagination';
import Paging from '../_component/Paging';
import PayComponent from './PayComponent';

const PAGINATION = {
  pageRange: 2,
  btnRange: 3,
};

const Pay = () => {
  const [payData, setPayData] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");

  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: payData || [],
  });

  useEffect(() => {
    const getPay = async () => {
      try {
        const response = await fetch(`http://localhost:8000/my/payment/all`, {
          method : "GET",
          headers : {
            'Authorization': `Bearer ${jwtToken}`
          }
        })
        .then((res) => res.json())
        .then((res) => {
          if(!res.paymentSuccess){
            console.log(res.message)
          }
          setPayData(res.allPaymentList)
          console.log(res.allPaymentList)
          console.log(res.message)
        })
      } catch (error) {
        console.log("PayError", error);
      }
    };

    getPay();
  }, [jwtToken]);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <PayComponent 
        currentList={currentList} 
      />
      <Paging 
          page={page}
          setPage={setPage}
          totalPost={totalPost}
          btnRange={PAGINATION.btnRange}
          pageRange={PAGINATION.pageRange}
      />
    </div>
  );
};

export default Pay;
