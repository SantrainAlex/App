import {Button} from 'reactstrap';
import {Link} from "react-router-dom";

const Mobile = () => {
    return(
        <div className="mobile">
            <h1 className='m-3'>Saint Sebastien St Sylvestre Cappel</h1>
            <img src="img/Blason.png" alt={'Blason de Saint Sylvestre Cappel'} className='m-5 mx-auto d-block'/>
            <div className="btnGo">
                <Link to="/Login">go!</Link>
            </div>
            <img src="img/logo-archers.png" alt={'Archer'}  className='m-5 mx-auto d-block'/>
        </div>
        )
}

export default Mobile;
