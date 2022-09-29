
import './Activities.css'
const Activities = (props) => {
    const { name, time, picture } = props.activity;
    
    return (
        <div className='bg-gray-200 rounded-lg'>
            <div>
                <div className='flex flex-col justify-center'>
                    <div className='p-5'><img className='w-full rounded-lg' src={picture} alt="" srcset="" /></div>
                    <h1 className='px-5 font-semibold text-2xl'>{name}</h1>
                    <p className='px-5'>Time: {time} minutes</p>
                    <div className='flex justify-center my-3'>
                        <button onClick={()=>{props.addToInfo(props.activity)}} className='w-4/5 p-3 rounded-lg bg-rose-400 font-bold text-white hover:bg-rose-600'>Add to list <i class="fa-solid fa-circle-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;