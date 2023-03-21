import {Form, FormGroup, Input, Button} from "reactstrap";
import {useState} from "react";

import * as User from "../../../servives/user";

const Register = () => {
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

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    };

    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setPasswordNotIdentical(false);
        setTooShort(false);

        if (values.password.length <= 9 || confirmPassword.length <= 9) {
            setPasswordNotIdentical(true);
            event.stopPropagation();
        } else if( !values.password.startsWith(confirmPassword) && !confirmPassword.endsWith(values.password)){
            setTooShort(true);
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
            User.create(getData)
                .then(() => {
                    alert('Enregistrement Ok')
                })
                .catch(error => {
                    alert(error)
                })
        }
        form.classList.add('was-validated');
    };

    return(
        <div className='mobile'>
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
                                <Input
                                    name='dateOfBirth'
                                    placeholder='Date de Naissance'
                                    type="text"
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    value={values.dateOfBirth}
                                    onChange={handleChange}
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

                                    <option disabled>Tu es dans une équipe?</option>
                                    <option>Non</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
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
