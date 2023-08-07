import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClassifiedAds,delClassifiedAd } from '../Redux/action';
import FilterBar from './FilterBar';

const BrowseClassified = () => {
    console.log("yesssssssss")
    const dispatch = useDispatch();
    const classifiedAds = useSelector((state) => state.classifiedAds);
    const [currentPage, setCurrentPage] = useState(1);
    const adsPerPage = 4;

    useEffect(() => {
        dispatch(fetchClassifiedAds());
    }, [dispatch]);

    const indexOfLastAd = currentPage * adsPerPage;
    const indexOfFirstAd = indexOfLastAd - adsPerPage;
    const currentAds = classifiedAds.slice(indexOfFirstAd, indexOfLastAd);
console.log("currentAds",currentAds);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleBuy=(id)=>{
        dispatch(delClassifiedAd(id));
        alert("Product is deleted from frontend and backend");

        dispatch(fetchClassifiedAds());

    }
    return (
        <div>
            <h2>Browse Classifieds</h2>
            <FilterBar />
            <div className="classifieds-container">
                {currentAds.map((ad) => (
                    <div key={ad._id} className="classified-card">
                        <img src={ad.image} alt={ad.name} width={200} height={200} />
                        <h3>{ad.name}</h3>
                        <p>{ad.description}</p>
                        <p>Category: {ad.category}</p>
                        <p>Location: {ad.location}</p>
                        <p>Posted At: {new Date(ad.postedAt).toLocaleDateString()}</p>
                        <p>Price: ${ad.price}</p>
                        <button onClick={()=>handleBuy(ad._id)}>Buy</button>
                    </div>
                ))}

            </div>
            <div className="pagination">
                {Array.from({ length: Math.ceil(classifiedAds.length / adsPerPage) }, (_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
                ))}
            </div>
        </div>
    );
};

export default BrowseClassified;


