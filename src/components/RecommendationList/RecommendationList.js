import React, {Suspense, useEffect, useState} from 'react';

import api, {api_key} from "../../api";
import {useParams} from "react-router";
import MovieCard from "../MovieCard/MovieCard";
import Spinner from "../Spinner/Spinner";

const RecommendationList = () => {
    const {movie_id} = useParams()
    const [recommendation, setRecommendation] = useState([])

    useEffect(() => {
        api.get(`/movie/${movie_id}/recommendations?api_key=${api_key}`)
            .then((response) => {
                setRecommendation(response.data.results)
            }).catch((error) => {
            setRecommendation(error)
        })
    }, [movie_id])

    return (
        <Suspense fallback={<Spinner/>}>
            <h1 className="title">Похожие фильмы</h1>
            <div className="movie-list">
                {recommendation && recommendation.map((movie, key) => {
                    return (<MovieCard key={key} movie={movie}/>)
                })}
            </div>
        </Suspense>
    );
};

export default RecommendationList;