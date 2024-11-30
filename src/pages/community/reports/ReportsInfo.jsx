import React from 'react';
import { useParams } from 'react-router-dom';

const ReportsInfo = () => {
    const { id } = useParams(); // 라우터에서 전달된 id를 가져옴

    const reportData = {
        1: { title: "제보합니다.", content: "2025 상반기 예정 극은 무엇...", date: "2024.12.01 18:30" },
        2: { title: "제보합니다.", content: "지킬앤하이드 캐스팅 변경 정...", date: "2024.11.13 12:59" },
    };

    const report = reportData[id];

    return (
        <div>
            제보 내역 상세페이지
            <div>
                <h1>{report.title}</h1>
                <p>{report.content}</p>
                <p>{report.date}</p>
            </div>
        </div>
    );
};

export default ReportsInfo;
