import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Pillow(props) {

    const { intro, name, num, link, description, image } = props;

    const [width, setWidth] = useState(0);

    useEffect(() => {

        const root = document.documentElement;
        const updateWidth = () => {

            let divisor = getComputedStyle(root).getPropertyValue('--divisor');

            let photoArea = document.querySelector('.photoArea');
            if (photoArea) {
                let availableWidth = photoArea.offsetWidth;
                setWidth((availableWidth - 30) / divisor);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };

    }, []);


    return (
        <>
            <a href={link} className="focus:outline-none card-div flex bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-blue-300 shadow-lg shadow-gray-600/65">
                <div className="pillow-list-item">
                    <div className="pillow-num flex items-center">
                        <p className="text-left ml-4 mr-0 justify-self-center font-bold text-lg text-blue-800 underline">{num}</p>
                    </div>
                    <div className="m-4 border-l border-gray-200 shadow-x dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="mb-4 px-16 text-md text-center font-semibold tracking-tighter text-indigo-400 dark:text-white text-pretty text-balance">{intro}:</h3>
                        <div className="flex items-center row p-2 photoArea">

                            <img src={image} alt={"the pillow described on this card"} style={{ height: width, width: width}} className="ml-2 mr-2 photo1" />
                            <img src={image} alt="another pic of the pillow described on this card" style={{ height: width, width: width}} className="ml-2 photo2" />
                            <h5 className="item-title my-0 mx-3 font-semibold tracking-tighter text-gray-900 dark:text-white text-pretty text-balance">{name}</h5>
                        </div>
                        <div className="flex flex-col items-stretch py-5 px-4 bg-white  w-full rounded-r-md">
                            <p className="flex mb-5 font-normal text-gray-500 dark:text-gray-400 text-pretty text-start">{description}</p>
                            <div className="flex justify-center">
                                    <button href={link} className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-56">Shop now at Amazon.com</button>
                            </div>
                        </div>
                    </div>

                </div>

            </a>
        </>
    )
}
Pillow.propTypes = {
    intro: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Pillow;


