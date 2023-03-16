import {Button, Form, FormGroup, Input} from "reactstrap";

const Register = () => {
    return(
        <div className='mobile'>
                <Form>
                        <FormGroup>
                                <Input
                                    name='FirstName'
                                    placeholder='Prénom'
                                    type='text'
                                />
                                <Input
                                    name='LastName'
                                    placeholder='Nom'
                                    type='text'
                                />
                                <Input
                                    name='DateOfBirth'
                                    placeholder='Date de Naissance'
                                    type='date'
                                />
                                <Input
                                    name='crew'
                                    placeholder='Tu es dans une équipe? si oui la quelle ?'
                                    type='select'
                                />
                                <Input
                                    name='email'
                                    placeholder='Ton adresse email'
                                    type='email'
                                />
                                <Input
                                    name='password'
                                    placeholder='Ton  mot de passe'
                                    type='password'
                                />
                                <Input
                                    name='ConfirmPassword'
                                    placeholder='Confirme ton  mot de passe'
                                    type='ConfirmPassword'
                                />
                                <Button onClick={() => console.log('test')}>
                                    Go ->
                                </Button>
                        </FormGroup>
                </Form>
        </div>
    )
}
export default Register;
