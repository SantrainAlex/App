import {Form, FormGroup, Input, Button} from "reactstrap";
import React, {useState} from "react";

import * as User from "../../../servives/user";
import {useNavigate} from "react-router-dom";
import SpinnerIcon from "../../../components/Loading/Spiner";

const Register = (props) => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        crew: '',
        email: '',
        password: '',
    });

    const [confirmPassword , setConfirmPassword] = useState('');
    const [passwordNotIdentical, setPasswordNotIdentical] = useState(false);
    const [tooShort , setTooShort] = useState(false);
    const [loaded, setLoaded] = useState(false)


    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    };

    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleSubmit = async(event) => {
        setLoaded(true);
        event.preventDefault();
        const form = event.currentTarget;
        setPasswordNotIdentical(false);
        setTooShort(false);

        if (values.password.length <= 9 || confirmPassword.length <= 9) {
            setLoaded(false)
            setTooShort(true);
            setPasswordNotIdentical(true);
            event.stopPropagation();
        } else if( !values.password.startsWith(confirmPassword) && !confirmPassword.endsWith(values.password)){
            setLoaded(false);
            setPasswordNotIdentical(true);
            event.stopPropagation();
        }else if(form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const getData = {
                "firstName": `${values.firstName}`,
                "lastName": `${values.lastName}`,
                "dateOfBirth": `${values.dateOfBirth}`,
                "crew": `${values.crew}`,
                "email": `${values.email}`,
                "password": `${values.password}`,
            }
            const response = await User.create(getData)
            const data = await response.json()

            if(response.ok){
                setLoaded(false);
                
                // Après l'authentification réussie
                localStorage.setItem('currentUser', JSON.stringify(data));
                navigate('/HomePage')
            }else if(!response.ok){
                setLoaded(false);
                alert(data)
            }
        }
        form.classList.add('was-validated');
    };

    return(
        <div className='mobile'>
            {loaded && (
                <div>
                    <SpinnerIcon text='Chargement en cours' />
                </div>
            )}
                <Form onSubmit={handleSubmit} noValidate>
                        <FormGroup>
                                <Input
                                    name='firstName'
                                    placeholder='Prénom'
                                    type='text'
                                    value={values.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="invalid-feedback">Veuillez saisir votre Prénom.</div>
                                </FormGroup>
                                <FormGroup>
                                <Input
                                    name='lastName'
                                    placeholder='Nom'
                                    type='text'
                                    value={values.lastName}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="invalid-feedback">Veuillez saisir votre Nom.</div>
                                </FormGroup>
                                <FormGroup>
                                <label for='dateOfBirth' style={{color: "white"}}>Date de Naissance</label>
                                <Input
                                    id='dateOfBirth'
                                    name='dateOfBirth'
                                    type='date'
                                    value={values.dateOfBirth}
                                    onChange={handleChange}
                                    style={{marginTop: 0}}
                                    required
                                />
                                <div className="invalid-feedback">Veuillez saisir votre Date de Naissance.</div>
                                </FormGroup>
                                <FormGroup>
                                <Input
                                    name='crew'
                                    placeholder='Tu es dans une équipe? si oui la quelle ?'
                                    type='select'
                                    value={values.crew}
                                    onChange={handleChange}
                                    required
                                >

                                    <option>Tu es dans une équipe?</option>
                                    <option value='Non'>Non</option>
                                    <option value='A'>A</option>
                                    <option value='B'>B</option>
                                    <option value='C'>C</option>
                                </Input>
                                </FormGroup>
                                <FormGroup>
                                <Input
                                    name='email'
                                    placeholder='Ton adresse email'
                                    type='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="invalid-feedback">Veuillez saisir votre email.</div>
                                </FormGroup>
                                <FormGroup>
                                <Input
                                    name='password'
                                    placeholder='Ton  mot de passe'
                                    type='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    autoComplete='on'
                                    required
                                    className={passwordNotIdentical || tooShort  ? 'errorInput' : ''}
                                />
                                    {tooShort && <div className='invalid-feedback'>Mot de passe trop court</div> }
                                <div className="invalid-feedback">Veuillez créer votre mot de passe.</div>
                                </FormGroup>
                                <FormGroup>
                                        <Input
                                            name='confirmPassword'
                                            placeholder='Confirme ton  mot de passe'
                                            type='password'
                                            value={confirmPassword}
                                            onChange={handleChangeConfirmPassword}
                                            autoComplete='on'
                                            required
                                            className={passwordNotIdentical || tooShort  ? 'errorInput' : ''}
                                            invalid={passwordNotIdentical}
                                        />
                                        {tooShort && <div className='invalid-feedback'>Mot de passe trop court</div> }
                                <div className="invalid-feedback">Les mot de passe ne sont pas identique</div>
                                </FormGroup>
                                <div className="btnGo">
                                    <Button type="submit">go! <div className='arrow'>-></div></Button>
                                </div>
                </Form>
        </div>
    )
}
export default Register;
