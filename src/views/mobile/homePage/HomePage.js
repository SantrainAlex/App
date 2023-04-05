
import React from "react";
import { ref,listAll,uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Carousel from 'react-bootstrap/Carousel';
import {storage} from "../../../firebase";
import {Col, Row} from "reactstrap";


class HomePage extends React.Component{
    constructor(props) {
        super();
        this.state = {
            imageUrls: [],
            file: false,
            percent: 0,
        }
    }

    componentDidMount(){
        this.onLoad();
    }
    onLoad = () => {
        const imagesRef = ref(storage,'gs://tirssc-aa2ef.appspot.com/2023/04/');
        listAll(imagesRef)
            .then((res) => {
                const urls = res.items.map((itemRef) => {
                    return getDownloadURL(itemRef)
                });

                Promise.all(urls).then((results) => {
                    this.setState({imageUrls: results.filter((url) => typeof url === "string")})
                });
            }).catch((error) => {
            console.log(error)
        })

    }

    capturePhoto = () => {
        const input = document.createElement("input");
        input.type = 'file';
        input.accept = 'image/*';
        input.capture = 'camera';
        input.onchange = event =>{
            const photo = event.target.files[0];
            const storageRef = ref(storage, `gs://tirssc-aa2ef.appspot.com/2023/04/${photo.name}`);
            const uploadTask = uploadBytesResumable(storageRef, photo);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );

                    // update progress
                    this.setState({percent: percent})
                },
                (err) => console.log(err),
                () => {
                    // download url
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        console.log(url);
                        this.onLoad();
                    });
                }
            );
        }
        input.click();
    }
    FileUploader = (e) => {
            const newFiles = Array.from(e.target.files);

            for (let i = 0; i < newFiles.length; i++) {
                const storageRef = ref(storage,`gs://tirssc-aa2ef.appspot.com/2023/04/${newFiles[i].name}`);
                const uploadTask = uploadBytesResumable(storageRef, newFiles[i]);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const percent = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );

                        // update progress
                        this.setState({percent: percent})
                    },
                    (err) => console.log(err),
                    () => {
                        // download url
                        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                            console.log(url);
                            this.onLoad();
                        });
                    }
                );
        }
    };



    render() {
        return (
            <div className='homePage'>
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
                        <Carousel className='text-center' controls={false} indicators={false}>
                            {this.state.imageUrls.map(( url ) => (
                                <Carousel.Item key={url}>
                                    <img
                                        src={url}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                </div>
                <div  className='allBtn '>
                    <Row >
                        <Col className='col-6'>
                            <input
                                id="file-input"
                                type="file"
                                multiple
                                accept=".jpg"
                                onClick={this.FileUploader}
                                style={{ display: 'none' }}
                            />
                            <button onClick={() => document.getElementById('file-input').click()}>
                                Sélectionner une photo de ta galery
                            </button>
                        </Col>
                        <Col className='col-6'>
                            <button onClick={this.capturePhoto}>prend une photo</button>
                        </Col>
                    </Row>


                </div>

            </div>

        )
    }



}
export default HomePage;
