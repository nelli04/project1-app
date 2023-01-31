import React from "react";
import u from './user.module.css'

export const Users = (props) => {
    return <div>
        {
            props.user.map(el => <div key={el.id}>
            <span>
                <div className={u.photo}>
                    <img src={el.photo}/>
                </div>
                <div>
                    {el.follow ? <button onClick={() => {
                            props.unfollow(el.id)
                        }}>Unfollow</button>
                        : <button onClick={ () => {props.follow(el.id)}}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{el.name}</div>
                    <div>{el.status}</div>
                </span>
                <span>
                    <div>{el.location.country}</div>
                    <div>{el.location.city}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}