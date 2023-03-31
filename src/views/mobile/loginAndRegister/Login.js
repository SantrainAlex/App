import {Button, Form, FormGroup, Input} from "reactstrap";
import {Link} from "react-router-dom";
import {useState} from "react";

import * as User from "../../../servives/user";

const Login = () => {
    const [values, setValues] = useState({email: "", password: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    };

    const handleSubmit = () =>{
        console.log('handleSubmit')
        const getData =
        {
            "email": `${values.email}`,
            "password": `${values.password}`
        }
        User.connection(getData)
            .then(() => {
                alert('connecter')
            })
            .catch(error => {
                alert('Appeler Alexis')
            })
    }
    return(
        <div>
            <img src="img/drapeau-flandre.jpg" alt={'drapeau de la flandre'} className='m-5 mx-auto d-block' style={{borderRadius: 50}}/>
            <Form onSubmit={handleSubmit}>
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
                    <Button type="submit">go! <div className='arrow'>-></div></Button>
                </div>
            </Form>
        </div>

    )
}
export default Login;
