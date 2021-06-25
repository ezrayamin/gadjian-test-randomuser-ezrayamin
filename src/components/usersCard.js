import React from 'react'
import { Image } from 'react-bootstrap'
import { setDOB, setID } from '../helper/query'

const UsersCard = ({ data, loading }) => {
    const MapCards = () => {
        return (
            data.map((user, index) => {
                return (
                    <div key={index} className="user-card" >
                        <div style={{ backgroundColor: 'white', display: 'flex', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', marginBottom: '0.3125em', paddingTop: '1em', justifyContent: 'space-between', paddingLeft: '0.75em', paddingRight: '0.75em' }}>
                            <div className="id-container">
                                <p>Personnel ID: </p>
                                <p className="p-tosca">{setID(user.id.value)}</p>
                            </div>
                            <i className="fas fa-ellipsis-h" style={{ marginTop: '-3px' }}></i>
                        </div>
                        {/* <hr className="card-divider"></hr> */}
                        <div className="card-body">
                            <div className="cardAva-container">
                                <Image src={user.picture.medium} className="user-avatar" roundedCircle />
                            </div>
                            <div>
                                <p className="p-bold">Name</p>
                                <p className="p-detail">{user.name.first} {user.name.last}</p>
                                <p className="p-bold">Telephone</p>
                                <p className="p-detail">{user.phone}</p>
                                <div className="birthday-container">
                                    <p className="p-bold">Birthday</p>
                                    <p className="p-detail">{setDOB(user.dob.date)}</p>
                                </div>
                                <div className="email-container">
                                    <p className="p-bold">Email</p>
                                    <p className="p-detail">{user.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
    return (
        <div>
            <div className="list-wrapper">
                {loading
                    ?
                    <div style={{ width: '100%' }}>
                        <i className="fas fa-spinner" id="spinner"></i>
                    </div>
                    :
                    <MapCards />
                }
            </div>
        </div>
    )
}
export default UsersCard

