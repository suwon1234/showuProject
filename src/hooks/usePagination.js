import { useState } from "react";

const usePagination = ({ pageRange, list }) => {
  const [page, setPage] = useState(1); // 현재 페이지

  const startPost = (page - 1) * pageRange; // 시작 인덱스
  const endPost = startPost + pageRange; // 끝 인덱스
  const currentList = list.slice(startPost, endPost); // 현재 페이지에 해당하는 항목들
  const totalPost = list.length; // 총 게시물 수
  const totalPage = Math.ceil(totalPost / pageRange); // 총 페이지 수

  return { currentList, setPage, page, totalPost, totalPage };
};

export default usePagination;
