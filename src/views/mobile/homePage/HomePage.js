
import React from "react";
import { ref,listAll,uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Carousel from 'react-bootstrap/Carousel';
import {storage} from "../../../firebase";
import {Col, Row} from "reactstrap";
import moment from 'moment';
import SpinnerIcon from "../../../components/Loading/Spiner";
import * as celebrationAndBirthday from "../../../servives/celebration";
import * as User from "../../../servives/user";


class HomePage extends React.Component{
    constructor(props) {
        super();
        this.state = {
            imageUrls: [],
            file: false,
            percent: 0,
            loaded: false,
            dataCelebration: []
        }
    }

    componentDidMount(){
        this.onLoad();
        this.getDataCelebration();
    }
    getDataCelebration = async () => {
        try {
            //Celebration
            const currentData = []
            const response =  await (await celebrationAndBirthday.celebration('2023')).json();
            const currentCelebration = response[moment().format('YYYY-MM-DD').toString()];
            if (currentCelebration){
                currentData.push(currentCelebration)
            }
            //BirthDay
            const BirthDay = await (await User.getBirthDayCustomer()).json().catch(e => console.log(e));

            if(BirthDay){
                BirthDay.map(el => {
                    return currentData.push(`Joyeux Anniversaire : ${el.firstName}`)
                })
            }
            this.setState({dataCelebration: currentData})
        } catch (e) {
            console.log(e)
        }


    }
    onLoad = () => {
        const currentMonth = moment().format('MM');
        const currentYear = moment().format('YYYY');
        const imagesRef = ref(storage,`gs://tirssc-aa2ef.appspot.com/${currentYear}/${currentMonth}/`);
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
        this.setState({loaded: true})
        const input = document.createElement("input");
        const currentMonth = moment().format('MM');
        const currentYear = moment().format('YYYY');
        input.type = 'file';
        input.accept = 'image/*';
        input.capture = 'camera';
        input.onchange = event =>{
            const photo = event.target.files[0];
            const storageRef = ref(storage, `gs://tirssc-aa2ef.appspot.com/${currentYear}/${currentMonth}/${photo.name}`);
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
                        this.setState({loaded: false})
                        this.onLoad();
                    });
                }
            );
        }
        input.click();
    }
    FileUploader = (e) => {
            this.setState({loaded: true})
            const newFiles = Array.from(e.target.files);
            console.log(newFiles)

            for (let i = 0; i < newFiles.length; i++) {
                console.log(i);
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
                            this.setState({loaded: false})
                            this.onLoad();
                        });
                    }
                );
        }
    };



    render() {
        return (
            <div className='homePage'>
                {this.state.loaded && (
                    <div>
                        <SpinnerIcon text='Chargement en cours' />
                    </div>
                )}
                <div>
                    <h1>Tir du jour</h1>
                    <p>carousel</p>
                </div>
                <div>
                    {this.state.dataCelebration && <>
                        <h1>Fête et anniversaire du jour</h1>
                        <Carousel className='text-center' controls={false} indicators={false}>
                            {this.state.dataCelebration.map(( text ) => (
                                <Carousel.Item key={text}>
                                    <p>{text}</p>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </>}
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
                                multiple
                                type="file"
                                multiple
                                accept=".jpg"
                                onChange={this.FileUploader}
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
