import React from 'react'
import parse from 'html-react-parser';

const InfoRegiones = (props) => {
    return (
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 font-per-theme-default">
            <div className="flex justify-center -mt-16 md:justify-end">
                {/* <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" /> */}

            </div>

            <h2 className="mt-2 text-xl font-semibold md:mt-0">{props.region.title}</h2>

            <div>{parse(props.region.description)}</div>

            {/* <div className="flex justify-end mt-4">
                <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" tabindex="0" role="link">John Doe</a>
            </div> */}
        </div>
    )
}

export default InfoRegiones
