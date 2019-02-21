import React, { Component } from 'react';
import FilterBar from '../Components/FilterBar';
 function getJson() {
        return [{ "buildingName": "Heart", "apartmentName": "2101", "roomNumber": "2", "fullName": "Husnan Sultan",  }];
    }
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            json: []
        }
    }

   
    componentDidMount() {
        this.setState((prevState) => {
            return {
                json: getJson()
            }
        })
    }

    render() {
        return (
            <div className="table">
                <div className="filterbar">
                    <FilterBar />
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Building Name</th>
                            <th scope="col">Apartment Number</th>
                            <th scope="col">Room Number</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Intake (Month)</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.json.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>{data.firstname}</td>
                                    <td>{data.lastname}</td>
                                    <td>{data.lastname}</td>
                                    <td>{data.lastname}</td>
                                    <td>{data.lastname}</td>
                                    <td>{data.lastname}</td>
                                    <td>{data.lastname}</td>
                                </tr>
                            )
                        })}
                    </tbody >
                </table >
            </div >
        );
    }
}

export default Home;






