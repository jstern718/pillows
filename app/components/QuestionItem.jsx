import { useState } from 'react';

function QuestionItem(props) {

    const { question, answer, num, link, name, description } = props

return (
    <>
        <a href={link} className="focus:outline-none">
            <div className="flex pl-6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-blue-300 shadow-lg shadow-gray-600/65">
                    <div className="flex items-center">
                            <p className="text-left -ml-3 mr-3 justify-self-center font-bold text-lg text-blue-500 underline">{num}</p>
                    </div>
                    <div className="flex flex-col items-stretch m-0 py-5 px-4 bg-white border-l border-gray-200 shadow-x dark:bg-gray-800 dark:border-gray-700 w-full rounded-r-md">
                            <h5 className="question-text mb-4 ml-5 mr-8 text font-semibold tracking-tighter text-gray-900 dark:text-white text-pretty text-balance text-start">{question}</h5>
                            <p className="flex mb-5 font-normal text-gray-500 dark:text-gray-400 text-pretty text-start">{answer}</p>
                            <p className="flex mb-5 font-normal text-gray-500 dark:text-gray-400 text-pretty text-start">{name}</p>
                            <p className="flex mb-5 font-normal text-gray-500 dark:text-gray-400 text-pretty text-start">{description}</p>
                            <div className="flex justify-center">
                                    <button href={link} className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-56">Shop now at Amazon.com</button>
                            </div>
                    </div>
                </div>
        </a>
    </>
)
}

export default QuestionItem

