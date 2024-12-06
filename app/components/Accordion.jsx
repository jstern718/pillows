import React, { useState } from 'react';

const Accordion = ( {textA, accordionList} ) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="accordion">
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full mb-2 text-left text-gray-500 dark:text-gray-400 gap-3 focus:outline-0 focus:outline-indigo-200 shadow-none focus:shadow-none"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded={isOpen}
            aria-controls="accordion-flush-body-1"
            onClick={toggleAccordion}
          >
            <div>
                <h5 className="my-3 font-bold accordion-title">Some Helpful Info:</h5>
                <li className="accordion-bullet">
                    <p className="text-gray-500 dark:text-gray-400 text-pretty text-wrap accordion-text text-lg">
                        {textA}
                    </p>
                </li>
                <p className={`accordion-bullet text-center mt-3 ${isOpen ? 'hidden' : ''}`}>Read More</p>
            </div>
          </button>
        </h2>
        <div
          id="accordion-flush-body-1"
          className={`${isOpen ? '' : 'hidden'}`}
          aria-labelledby="accordion-flush-heading-1"
        >

            <button
                type="button"
                className="flex items-center justify-between w-full mb-2 text-left text-gray-500 dark:text-gray-400 gap-3 focus:outline-0 focus:outline-indigo-200 shadow-none focus:shadow-none"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded={isOpen}
                aria-controls="accordion-flush-body-1"
                onClick={toggleAccordion}
            >
                <div>
                    {accordionList.map((item, index) => (
                        <li key={`accordion-${index}`} className="w-full accordion-bullet">
                            <p className="mb-1 text-gray-500 dark:text-gray-400 text-pretty text-wrap accordion-text">
                                {item}
                            </p>
                        </li>
                    ))}


                    <p className="accordion-bullet text-center mt-3">Show Less</p>
                </div>
            </button>
        </div>
      </div>
    </>
  );
};

export default Accordion;
