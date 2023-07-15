import React, { useEffect, useState } from 'react';

import ProductsCard from '../components/ProductsCard';
import axios from 'axios'

const Home = () => {
    const URL = "https://backendambula.onrender.com/aproducts"
    const[data, setData] = useState([]);

    const getData = async() =>{
    const response = await axios.get(URL);
    console.log("data",response.data);
    setData(response.data)
    }

    useEffect(()=>{
        getData()
    },[])
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            data.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;