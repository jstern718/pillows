import Accordion from './Accordion';
import Hero from './Hero';
import Pillow from './Pillow';
import PropTypes from 'prop-types';

function PageTemplate( props ) {

    const pageTitle = props.pageTitle;
    const textA = props.textA;
    const accordionList = props.accordionList;
    const pillowList = props.pillowList;
    let chartImage = props.chartImage ?? null;


    return (
        <>
            <div className="divA justify-end">
                <article>
                    <Hero />
                    <div className="w-full">
                        <h2 className="text-2xl font-bold mb-4 mt-4 p-3 page-title text-center">{pageTitle}</h2>
                        <Accordion textA={textA} accordionList={accordionList}/>
                        {chartImage &&
                             <img src={chartImage} alt="Chart showing you what pillows are best for you to buy" />
                        }

                    </div>
                    <ul className="space-y-4">
                        {pillowList.map((pillow, index) => (
                                <li key={index} className="w-full">
                                    <Pillow
                                        intro={pillow.intro}
                                        name={pillow.title}
                                        num={index + 1}
                                        link={pillow.link}
                                        description={pillow.description}
                                        pillowImage={pillow.image}
                                        className="w-full bg-white p-4 rounded shadow"/>
                                </li>
                        ))}
                    </ul>
                </article>
            </div>
        </>
    )
}
PageTemplate.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    textA: PropTypes.string.isRequired,
    accordionList: PropTypes.arrayOf(PropTypes.object).isRequired,
    chartImage: PropTypes.string,
    pillowList: PropTypes.arrayOf(PropTypes.shape({
        intro: PropTypes.string,
        title: PropTypes.string,
        link: PropTypes.string,
        description: PropTypes.string
    })).isRequired
};

export default PageTemplate;
