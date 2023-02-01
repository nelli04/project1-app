import React from "react";
import u from './user.module.css'

const User = (props) => {
    if (props.user.length === 0) {
        props.setUser([
                {
                    id: 1,
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_BQOnSIsrT787voKtwIyCQv1xUMU_C1Jig&usqp=CAU',
                    follow: false,
                    name: 'Nelli',
                    status: 'good',
                    location: {city: 'Msk', country: 'Russia'}
                },
                {
                    id: 2,
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_BQOnSIsrT787voKtwIyCQv1xUMU_C1Jig&usqp=CAU',
                    follow: true,
                    name: 'Vik',
                    status: 'good',
                    location: {city: 'Msk', country: 'Russia'}
                }
            ]
        )
    }
    return <div className={u.user}>
        {
            props.user.map(el => <div key={el.id}>
            <span>
                <div>
                    <img src={el.photo} className={u.photo} alt='i'/>
                </div>
                <div>
                    {el.follow ? <button className={u.button} onClick={() => {
                            props.unfollow(el.id)
                        }}>Unfollow</button>
                        : <button className={u.button} onClick={() => {
                            props.follow(el.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div className={u.arr}>{el.name}</div>
                    <div className={u.arr}>{el.status}</div>
                </span>
                <span>
                    <div className={u.arr}>{el.location.country}</div>
                    <div className={u.arr}>{el.location.city}</div>
                </span>
            </span>
            </div>)
        }
    </div>;
}

export default User