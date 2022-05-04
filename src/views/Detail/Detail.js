import React, {Suspense} from 'react';
import "./Detail.css"
import RecommendationList from "../../components/RecommendationList/RecommendationList";
import DetailCard from "../../components/DetailCard/DetailCard";
import Spinner from "../../components/Spinner/Spinner";

const Detail = () => {
    return (
        <Suspense fallback={<Spinner/>}>
        <div className="container">
            <Suspense fallback={<Spinner/>}>
                <DetailCard/>
            </Suspense>
           <Suspense fallback={<Spinner/>}>
               <RecommendationList/>
           </Suspense>
        </div>
        </Suspense>
    );
};

export default Detail;