import {Button} from 'reactstrap';

const Mobile = () => {
    return(
        <div className="mobile">
            <h1 className='m-3'>Saint Sebastien St Sylvestre Cappel</h1>
            <img src="img/Blason.png" alt={'Blason de Saint Sylvestre Cappel'} className='m-5 mx-auto d-block'/>
            <Button className='mx-auto d-block'>GO!</Button>
            <img src="img/logo-archers.png" alt={'Archer'}  className='m-5 mx-auto d-block'/>
        </div>
        )
}

export default Mobile;
