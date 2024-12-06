/* eslint-disable react/prop-types */

import Accordion from './Accordion.jsx';
// import catHeroWide from "../assets/hero6.jpeg"

import { affiliateText } from '../../utils-text.jsx';
let affiliateWording = affiliateText();


function TopOfPage({textA, accordionList}) {

  return (
    <>
      <div>
        <p className = "affiliate-desktop text-sm">{affiliateWording}</p>
        {/* <img src={catHeroWide} alt="cat hero" className="hero-img w-full"/> */}
      </div>
      <div>
        <article>
            <div className="w-full">
                <p className = "affiliate-mobile">{affiliateWording}</p>
                <h2 className="text-2xl font-bold mb-4 mt-4 p-3 page-title">The Best Pillowcases</h2>
                <div className="divC mt-0 mb-5 p-2 pb-1 bg-indigo-200 rounded-lg border-solid border-1 border-gray-300 shadow-lg shadow-gray-600/65">
                    <ul className="text-md text-left m-3 ml-5 font-light list-disc">
                        <Accordion textA={textA} accordionList={accordionList}/>
                    </ul>
                </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default TopOfPage;
