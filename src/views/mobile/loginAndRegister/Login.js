import {Form, FormGroup, Input} from "reactstrap";
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <div>
            <img src="img/drapeau-flandre.jpg" alt={'drapeau de la flandre'} className='m-5 mx-auto d-block' style={{borderRadius: 50}}/>
            <Form>
                <FormGroup>
                    <Input
                        name='email'
                        placeholder='Votre email'
                        type='email'
                    />
                    <Input
                        name='password'
                        placeholder='Votre mot de passe'
                        type='password'
                    />
                    <a href='google.fr'>
                        Mot de passe oublié
                    </a>
                    <Link to='/register'>
                        Inscription
                    </Link>
                    <div className="btnGo">
                        <Link to="/Login">go! <div className='arrow'>-></div></Link>
                    </div>
                </FormGroup>
            </Form>
        </div>

    )
}
export default Login;
