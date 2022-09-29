import React from 'react';

const Blog = () => {
    return (
        <div className='text-white mx-5 md:mx-10 lg:mx-24 text-center'>
            <h1 className='text-5xl font-bold mt-24 mb-12'>
                Blog
            </h1>
            <h1 className='my-6 text-3xl'>
                How react works?
            </h1>
            <p>
            React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
            </p>
            <div class="inline-flex justify-center items-center w-full">
                <hr className="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700"/>
                
            </div>
            <h1 className='my-6 text-3xl'>
                State Vs Props
            </h1>

            
            <p>
            The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.<br/>

            Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
            </p>
            <div class="inline-flex justify-center items-center w-full">
                <hr className="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700"/>
                
            </div>

            <h1 className='my-6 text-3xl'>
                What does useEffect do? 
            </h1>
            <p>
                By using useEffect Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
            </p>

        </div>
    );
};

export default Blog;