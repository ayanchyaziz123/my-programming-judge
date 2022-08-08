import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MultiSelect from 'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';


const options = [
    { label: 'Python', value: 'Python' },
    { label: 'Java', value: 'Java' },
    { label: 'Express js', value: 'Express js' },
    { label: 'Mysql', value: 'mySql' },
    { label: 'C++', value: 'C++' },
    { label: 'Node js', value: 'Node js' },
    { label: 'Django', value: 'Django' },
]


const Jumbotron = () => {
     
    const [languageAndTool, setLanguageAndTool] = useState('');

    const handleOnchange = val => {
        setLanguageAndTool(val)
    }

   
    return (
        <>
            <div class="shadow-2xl rounded-sm mx-auto  py-12 mt-4 p-2">
                <div class="grid grid-cols-3 gap-4">
                    <div className='col-span-2'>
                    <h2 class="text-3xl leading-9 font-bold tracking-tight  sm:text-4xl sm:leading-10">
                    Sofyverse.store
                </h2>
                </div>
              
            </div>
               
            </div>
        </>
    );
}
export default Jumbotron;    