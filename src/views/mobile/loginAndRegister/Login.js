import React, {useState} from "react";
import {Button, Form, FormGroup, Input} from "reactstrap";
import {Link, useNavigate} from "react-router-dom";

import * as User from "../../../servives/user";
import SpinnerIcon from "../../../components/Loading/Spiner";

const Login = (props) => {
    const navigate = useNavigate();
    const [values, setValues] = useState({email: '',password: ''});
    const [loaded, setLoaded] = useState(false)


    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    };


    const handleSubmit = async(e) =>{
        if(values.email && values.password){
            
            setLoaded(true);
            e.preventDefault()
            const getData =
            {
                "email": `${values.email}`,
                "password": `${values.password}`
            }
            try{
                const response = await User.connection(getData);
                const data = await response.json();

                if(response.ok){
                    props.isConnected();
                    setLoaded(false);
                   
                    // Après l'authentification réussie
                    localStorage.setItem('currentUser', JSON.stringify(data));
                    navigate('/HomePage')
                }else if(!response.ok){
                    setLoaded(false);
                    alert(data)
                }
            }
            catch (error) {
                console.error(error)
            }
        }else{alert('email ou mot de passe pas remplie')}
    }
        return(
            <div>
                {loaded && (
                    <div>
                        <SpinnerIcon text='Chargement en cours' />
                    </div>
                )}
                <img src="img/drapeau-flandre.jpg" alt={'drapeau de la flandre'} className='m-5 mx-auto d-block' style={{borderRadius: 50}}/>
                <Form>
                    <FormGroup>
                        <Input
                            name='email'
                            placeholder='Votre email'
                            value={values.email}
                            onChange={handleChange}
                            type='email'
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            name='password'
                            placeholder='Votre mot de passe'
                            type='password'
                            value={values.password}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <a href='google.fr'>
                        Mot de passe oublié
                    </a>
                    <Link to='/register'>
                        Inscription
                    </Link>
                    <div className="btnGo">
                        <Button type="submit" onClick={handleSubmit}>go! <div className='arrow'>-></div></Button>
                    </div>
                </Form>
            </div>

        )
}
export default Login;
