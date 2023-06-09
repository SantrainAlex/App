import {Link} from "react-router-dom";

const Index = () => {
    const isAuthenticated = localStorage.getItem('currentUser');
    return(
        <div className="mobile">
            <img src="img/Saint-Sébastien_Saint_Sylvestre_Cappel.png" alt={'Blason Saint-Sébastien Saint_Sylvestre_Cappel'} className='m-5 mx-auto d-block'/>
            <div className="btnGo">
                <Link to={isAuthenticated ? "HomePage": "/Login"}>go! <div className='arrow'>-></div></Link>
            </div>
            <img src="img/Blason.png" alt={'Blason de Saint Sylvestre Cappel'}  className='m-5 mx-auto d-block'/>
        </div>
        )
}

export default Index;
