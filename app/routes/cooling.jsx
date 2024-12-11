import PageTemplate from '../components/PageTemplate.jsx';

import coolingList from '../pillowLists/coolingList.jsx';
const pillowList = coolingList;
import coolingText from '../pageText/coolingText.jsx';
const pageText = coolingText;

const textA = pageText.shift();
const accordionList = pageText;

import chartImage from '../assets/cooling-chart.png';

const pageTitle = "The Best Cooling Pillows";


function Cooling() {

    return (
        <>
        <PageTemplate
            pageTitle={pageTitle}
            textA={textA}
            accordionList={accordionList}
            pillowList={pillowList}
            chartImage={chartImage}
        />

        </>
    )
}

export default Cooling;
