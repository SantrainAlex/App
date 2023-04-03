
import React, {useEffect, useState} from "react";
import { getStorage, ref,listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import Carousel from 'react-bootstrap/Carousel';


const HomePage = () => {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyD71AgDn-sSDNeKPKFQTMMklQMVfTsfXYQ",
            authDomain: "tirssc-aa2ef.firebaseapp.com",
            databaseURL: "https://tirssc-aa2ef-default-rtdb.firebaseio.com",
            projectId: "tirssc-aa2ef",
            storageBucket: "tirssc-aa2ef.appspot.com",
            messagingSenderId: "933761907600",
            appId: "1:933761907600:web:253052cf74faa960c1d115",
            measurementId: "G-ZVS40NSHJ5"
        };
        const app = initializeApp(firebaseConfig);

        // Récupérer une référence à votre bucket de stockage Firebase
        const storage = getStorage(app);

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
