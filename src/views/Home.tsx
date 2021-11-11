import React, {useEffect, useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Logout from '../components/Logout';
import {Context} from "../store/Store"
import "./Home.css"

interface data{
    status: string,
    message: string,
    data: Array<APIObject>
     
}
interface APIObject{
    _id: string,
    id: string,
    name: string,
    username: string,
    email: string,
    company: orgObject,
    phone: string,
    website: string,
    address: adressObject

}
interface adressObject{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geoObject,
}


interface geoObject{
    lat: string,
    lng: string
}

interface orgObject{
    bs: string,
    catchPhrase: string,
    name: string
}

function Home() {
    const {state} = useContext(Context)
    const [data, setData] = useState<data>() || undefined

    const navigate = useNavigate();
    useEffect(() => {
        if(!state.token){
            navigate("/Login")
        }
        (async()=> {
    
            const response = await fetch("https://api.axeljonsson.tech/authorized/api/all_users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({token: state.token})
            })
            setData(await response.json())
        })()

    }, [])
   
    if(data?.data.length === 0){
        return <div>loading</div>
    }else {
        return (
            <div>
                {state.token && <Logout/>}
                {data?.data.map((arrayItem: APIObject)=> {
                    return (
                        <div id="apiContainer" key={arrayItem._id}>
                            <div className="rowContainer">
                                <p className="label">Id: </p>
                                <p className="info">{arrayItem.id.toString()}</p>
                            </div>
                            <div className="rowContainer">
                                <p className="label">name: </p>
                                <p className="info">{arrayItem.name}</p>
                            </div>
                            <div className="rowContainer">
                                <p className="label">username: </p>
                                <p className="info">{arrayItem.username}</p>
                            </div>
                            <div className="rowContainer">
                                <p className="label">Email: </p>
                                <p className="info">{arrayItem.email}</p>
                            </div>
                            <div className="rowContainer">
                                <p className="label">Phone: </p>
                                <p className="info">{arrayItem.phone}</p>
                            </div>
                            <div className="rowContainer">
                                <p className="label">Website: </p>
                                <p className="info">{arrayItem.website}</p>
                            </div>
                            <div className="rowContainer">
                                <p className="label">Address: </p>
                                <div className="colContainer">
                                    <div className="rowContainer">
                                        <p className='label secondaryLabel secondaryLabelTitle'>City: </p>
                                        <p className='label secondaryLabel'>{arrayItem.address.city} </p>
                                    </div>
                                    <div className="rowContainer">
                                        <p className='label secondaryLabel'>Street: </p>
                                        <p className='label secondaryLabel'>{arrayItem.address.street} </p>
                                    </div>
                                    <div className="rowContainer">
                                        <p className='label secondaryLabel'>ZipCode: </p>
                                        <p className='label secondaryLabel'>{arrayItem.address.zipcode} </p>
                                    </div>
                                    <div className="rowContainer">
                                        <p className='label secondaryLabel'>Suite: </p>
                                        <p className='label secondaryLabel'>{arrayItem.address.suite} </p>
                                    </div>
                                    <div className="rowContainer">
                                        <p className='label secondaryLabel secondaryLabelTitle'>Geo: </p>
                                        <div className="colContainer">
                                            <div className="rowContainer">
                                        <p className='label secondaryLabel'>Longitude: </p>
                                        <p className='label secondaryLabel'>{arrayItem.address.geo.lng} </p>
                                            </div>
                                            <div className="rowContainer">
                                        <p className='label secondaryLabel'>Latitude: </p>
                                        <p className='label secondaryLabel'>{arrayItem.address.geo.lat} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rowContainer">
                                <p className="label" >Company: </p>
                                <div className="colContainer">
                                <div className="rowContainer">
                                    <p className='label secondaryLabel'>Name: </p>
                                    <p className='label secondaryLabel'>{arrayItem.company.name} </p>
                                </div>
                                <div className="rowContainer">
                                    <p className='label secondaryLabel '>Catch-phrase: </p>
                                    <p className='label secondaryLabel'>"{arrayItem.company.catchPhrase}" </p>
                                </div>
                                <div className="rowContainer">
                                    <p className='label secondaryLabel'>BS: </p>
                                    <p className='label secondaryLabel'>"{arrayItem.company.bs}" </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )

    }

}

export default Home