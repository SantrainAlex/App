import {Form, FormGroup, Input} from "reactstrap";
import {Link} from "react-router-dom";

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
                                    type="text"
                                    onChange={(e) => console.log(e.target.value)}
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                />
                                <Input
                                    name='crew'
                                    placeholder='Tu es dans une équipe? si oui la quelle ?'
                                    type='select'
                                >

                                    <option disabled>Tu es dans une équipe?</option>
                                    <option>Non</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                </Input>
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
                                <div className="btnGo">
                                    <Link to="/Login">go! <div className='arrow'>-></div></Link>
                                </div>
                        </FormGroup>
                </Form>
        </div>
    )
}
export default Register;
