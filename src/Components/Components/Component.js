import React from 'react';
import { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Info from '../Info/Info';
import './Component.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from '../Blog/Blog';



const Component = () => {
    const [activities, setActivities] = useState([]);
    const [info, setInfo] = useState([]);
    useEffect( () =>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[]);

    
    
    const addToInfo = (selectedInfo) =>{
        const newInfo = [...info, selectedInfo]
        setInfo(newInfo);
        toast.success('Activity time added successfully');   
    };
    
    
    return (
        <div className='flex flex-col md:flex-row poppins-fonts'>

            <div className='w-full md:w-3/5 lg:w-3/4 '>
                <div className='mx-5 lg:mx-24 '>
                    <h1 className='font-bold text-3xl my-8 text-white'>
                    <i class="fa-solid fa-list-check"></i> Diuranal <span className='text-rose-400	'>Activity</span>
                    </h1>
                    <h2 className='font-semibold text-1xl mb-5 text-white'>
                        Select Today's Activity
                    </h2>
                    <div className='border-5  grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1  gap-5'>
                        {
                            activities.map(activity =>(<Activities
                                key={activity.id}
                                activity={activity}
                                addToInfo ={addToInfo}
                                ></Activities>
                                ))
                        }
                    </div>
                </div>           
            </div>

            <div className='w-full md:w-2/5 lg:w-1/4 bg-gray-200 mt-5 md:mt-0'>
                <Info 
                info ={info}
                ></Info>
            </div>
            <div>
                <Blog></Blog>
            </div>

        </div>
    );
};

export default Component;