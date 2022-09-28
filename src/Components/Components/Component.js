import React from 'react';
import { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Info from '../Info/Info';
import './Component.css'


const Component = () => {
    const [activities, setActivities] = useState([]);
    useEffect( () =>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])
    return (
        <div className='flex '>
            <div className='w-4/5'>
                <div className='mx-5 lg:mx-24 '>
                    <h1 className='font-bold text-3xl my-8 text-white'>
                        Diuranal <span className='text-rose-400	'>Activity</span>
                    </h1>
                    <h2 className='font-semibold text-1xl mb-5 text-white'>
                        Select Today's Activity
                    </h2>
                    <div className='border-5  grid grid-cols-3 gap-5'>
                        {
                            activities.map(activity =>(<Activities
                                key={activity.id}
                                activity={activity}
                                ></Activities>
                                ))
                        }
                    </div>
                </div>           
            </div>
            <div className='w-1/5'>
                <Info></Info>
            </div>
        </div>
    );
};

export default Component;