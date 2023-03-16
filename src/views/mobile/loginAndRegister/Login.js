import {Button, Form, FormGroup, Input} from "reactstrap";
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <div className="mobile">
            <img src="img/logo-archers.png" alt={'Archer'} className='m-5 mx-auto d-block'/>
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
                    <Button onClick={() => console.log('test')}>
                        Go ->
                    </Button>
                </FormGroup>
            </Form>
        </div>

    )
}
export default Login;
