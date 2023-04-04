
import React, {useEffect, useState} from "react";
import { ref,listAll, getDownloadURL } from "firebase/storage";
import Carousel from 'react-bootstrap/Carousel';
import {storage} from "../../../firebase";


const HomePage = () => {
    const [imageUrls, setImageUrls] = useState([]);




    useEffect(() => {

        const imagesRef = ref(storage,'gs://tirssc-aa2ef.appspot.com/2023/04/');
        listAll(imagesRef)
            .then((res) => {
            const urls = res.items.map((itemRef) => {
                return getDownloadURL(itemRef)
            });

            Promise.all(urls).then((results) => {
                setImageUrls(results.filter((url) => typeof url === "string"));
            });
        }).catch((error) => {
            console.log(error)
        })
    }, []);




    return (
        <>
            <div>
                <h1>Tir du jour</h1>
                <p>carousel</p>
            </div>
            <div>
                <h1>Fête et anniversaire du jour</h1>
                <p>caroussel</p>
            </div>
            <div>
                <h1>Photo du mois</h1>
                <div>
                    <Carousel className='text-center' controls={false} indicators={false}>
                        {imageUrls.map(( url ) => (
                            <Carousel.Item key={url}>
                                <img
                                    src={url}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>

        </>

    )

}
export default HomePage;
