import React from "react";
import * as Event from '../../../servives/event'
class LstEvent extends React.Component{

    constructor(props) {
        super();
        this.state = {
            dataLstEvent: []
        }
    }

    componentDidMount() {
        this.getEvent();
    }
    getEvent = async () => {
        let lstEvent = await (await Event.getLstEvent()).json()
        lstEvent.map((el) =>
            el.Date = new Date(el.Date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'  })
        )
        this.setState({dataLstEvent: lstEvent})
    }

    render() {
        return(
            <div className='lstEvent'>
                {this.state.dataLstEvent.map((data) => (
                    <div className='text-center event'>
                        <h1>{data.nameCity}</h1>
                        <p>{data.Date}</p>
                    </div>
                ))}
            </div>


        )
    }

}

export default LstEvent
