import { useEffect, useState, useRef, suspense } from "react";
import Sidebar from "../../admin_components/Sidebar";
import React from 'react'
import MultiSelect from 'react-multiple-select-dropdown-lite'
import 'react-multiple-select-dropdown-lite/dist/index.css'
import { createProduct, clearStatus } from "../../redux-toolkit-state/slices/ProductSlice";
import { createProblem } from "../../redux-toolkit-state/slices/ProblemSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import dynamic from 'next/dynamic'


const DynamicDescription = dynamic(() => import('../../components/DescriptionRichTextField'), {
    ssr: false,
})

const DynamicEditorial = dynamic(() => import('../../components/EditorialRichTextField'), {
    ssr: false,
})

const options = [
    { label: 'Sliding window', value: 'Sliding window' },
    { label: 'Two Pointer', value: 'Two Pointer' },
    { label: 'Express js', value: 'Express js' },
    { label: 'Mysql', value: 'mySql' },
    { label: 'C++', value: 'C++' },
    { label: 'Node js', value: 'Node js' },
    { label: 'Django', value: 'Django' },
]

const adminAddProblemPage = () => {

    const dispatch = useDispatch();
    const router = useRouter();
 

    const [prb_tags, setPrb_tags] = useState('');
    const [prb_name, setPrb_name] = useState('');
    const [prb_description, setPrb_description] = useState('');
    const [prb_difficultyLevel, setPrb_difficultyLevel] = useState('');
    const [prb_points, setPrb_points] = useState(0);
    const [prb_editorial, setPrb_editorial] = useState('');
    const [prb_inputTestCase, setPrb_inputTestCase] = useState('');
    const [prb_outputTestCase, setPrb_outputTestCase] = useState('');



    const handleProblemSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('prb_tags', prb_tags);
        formData.append('prb_name', prb_name);
        formData.append('prb_inputTestCase', prb_inputTestCase);
        formData.append('prb_outputTestCase', prb_outputTestCase);
        formData.append('prb_difficultyLevel', prb_difficultyLevel);
        formData.append('prb_description', prb_description);
        formData.append('prb_points', prb_points);
        formData.append('prb_editorial', prb_editorial);
        dispatch(createProblem(formData));
    }


    const handleTagchange = val => {
        setPrb_tags(val);
    }

    return (
        <>
            <form onSubmit={handleProblemSubmit}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 gap-1 mt-3 p-2">


                    <div className="col-span-1">


                        {/* error is here */}

                        {/* {error && <>
                            <div class="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 mt-3 mb-3 rounded-t-md rounded-b-md" role="alert">
                                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                <p>{error}</p>
                            </div>
                        </>} */}

                        {/* error is here */}


                        <div class="w-full max-w-lg">


                            <div className="mb-10">

                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Tags
                                </label>
                                <div className="app">
                                    <div className="preview-values">
                                        {prb_tags}
                                    </div>

                                    <MultiSelect
                                        onChange={handleTagchange}
                                        defaultValue={prb_tags}
                                        options={options}
                                    />
                                </div>

                            </div>

                            <div class="flex flex-wrap -mx-3 mb-6 mx-auto">
                                <div class="w-full  px-3 mb-6 md:mb-0">
                                    <label class="block mt-1 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name" >
                                        Name
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="name" onChange={(e) => { setPrb_name(e.target.value) }} />
                                </div>

                                <div class="w-full md:w-1/2 px-3 mt-3">
                                    <label class="block mt-1 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Level
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="0" onChange={(e) => setPrb_difficultyLevel(e.target.value)} />
                                </div>
                                <div class="w-full md:w-1/2 px-3 mt-3">
                                    <label class="block mt-1 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Points
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="0" onChange={(e) => setPrb_points(e.target.value)} />
                                </div>
                                <div class="w-full md:w-1/2 px-3 mt-5">
                                    <label class="block mt-1 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Input Test Case File
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="file" placeholder="0" onChange={(e) => setPrb_inputTestCase(e.target.files[0])} />
                                </div>
                                <hr></hr>
                                <div class="w-full md:w-1/2 px-3 mt-5">
                                    <label class="block mt-1 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Output Test Case File
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="file" placeholder="0" onChange={(e) => { setPrb_outputTestCase(e.target.files[0]) }} />
                                </div>
                            </div>



                        </div>
                    </div>
                    <div >
                        <div>
                            <div>
                                <DynamicDescription
                                    name="description"
                                    onChange={(data) => {
                                        setPrb_description(data);
                                        console.log("data")
                                    }} />
                            </div>
                            {ReactHtmlParser(prb_description)}
                            <hr className="mt-10"></hr>
                            <div>
                                <DynamicEditorial 
                                 name="editorial"
                                 onChange={(data) => {
                                     setPrb_editorial(data);
                                     console.log("data")
                                 }} />
                            </div>
                            {ReactHtmlParser(prb_editorial)}

                        </div>
                    </div>


                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 mt-3 p-2">


                </div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Add Problem
                </button>


            </form>

        </>
    )
}
export default adminAddProblemPage;