import React, { useEffect, useState } from 'react';
import './Info.css'
import image from '../../img/Capture.JPG'

const Info = ({info}) => {
    const [breakTime, setBreakTime] = useState([]);

    useEffect(()=>{
        
        const items = JSON.parse(localStorage.getItem("Key"));
        setBreakTime(items);
    } ,[]);

    const timeHandle =(props)=>{
        localStorage.setItem("Key" , JSON.stringify(props));
        setBreakTime(props);
    };

    let totalTime = 0;
    for (const selectedInfo of info){
        totalTime = totalTime + parseInt(selectedInfo.time);
        
    }
    return (
        <div className='px-3'>
            <div className='flex items-center'>
                <img className='rounded-full w-1/4' src={image} alt="" srcset="" />
                <div className='ml-3'>
                    <h3 className='font-bold'>Light Yagami</h3>
                    <h4 className='font-light'><i class="fa-solid fa-location-dot"></i> Tokyo, Japan </h4>
                </div>
            </div>
                <div className='flex justify-between m-3 bg-rose-200 p-3 rounded-lg'>
                    <div>
                        <h1 className='text-slate-700'><span className='text-3xl font-semibold'>56</span> kg</h1>
                        <p className='font-semibold text-slate-700'>Weight</p>
                    </div>
                    <div>
                        <h1 className='text-slate-700'><span className='text-3xl font-semibold'>5.4</span> ft</h1>
                        <p className='font-semibold text-slate-700'>Height</p>
                    </div>
                    <div>
                        <h1 className='text-slate-700'><span className='text-3xl font-semibold'>22</span> yrs</h1>
                        <p className='font-semibold text-slate-700'>Age</p>
                    </div>
                </div>
                
            <h1 className='font-bold text-2xl text-slate-700'>Add A Break</h1>
            <div className='py-4 flex justify-between font-bold ' >
                
                <button className='bg-rose-200 rounded-full p-4 px-5 text-rose-400 hover:text-white hover:bg-rose-700'
                        onClick={(e)=>{timeHandle(e.target.innerText)} }>
                    10
                </button> 
                <button className='bg-rose-200 rounded-full p-4 px-5 text-rose-400 hover:text-white hover:bg-rose-700'
                        onClick={(e)=>{timeHandle(e.target.innerText)} }>
                    15
                </button> 
                <button className='bg-rose-200 rounded-full p-4 px-5 text-rose-400 hover:text-white hover:bg-rose-700'
                        onClick={(e)=>{timeHandle(e.target.innerText)} }>
                    20
                </button> 
                <button className='bg-rose-200 rounded-full p-4 px-5 text-rose-400 hover:text-white hover:bg-rose-700'
                        onClick={(e)=>{timeHandle(e.target.innerText)} }>
                    30
                </button> 
                <button className='bg-rose-200 rounded-full p-4 px-5 text-rose-400 hover:text-white hover:bg-rose-700'
                        onClick={(e)=>{timeHandle(e.target.innerText)} }>
                    60
                </button> 
                 
                
            </div>
            <div>
                <h1 className='font-bold text-2xl text-slate-700'>
                    Activity Details
                </h1>
                <div className='font-bold text-1xl mt-4 p-5 bg-rose-200 rounded-lg text-slate-700 flex justify-between'>
                    <h1 className=''>
                        Activity Time 
                    </h1>
                    <span className='font-light'>{totalTime} minutes</span> 
                </div>
                <div className='font-bold text-1xl mt-4 p-5 bg-rose-200 rounded-lg text-slate-700 flex justify-between'>
                    <h1 className=''>
                        Break Time
                    </h1>
                    <span className='font-light'>{breakTime} minutes</span>
                </div>
            </div>
            <div className='flex justify-center my-3'>
                <button className='w-4/5 p-3 rounded-lg bg-rose-500 font-bold text-white hover:bg-rose-600'>Activity Completed <i class="fa-solid fa-circle-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Info;