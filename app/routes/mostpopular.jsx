
import PageTemplate from '../components/PageTemplate.jsx';

import mostPopularList from '../pillowLists/mostPopularList.jsx';
const pillowList = mostPopularList;
import mostPopularText from '../pageText/mostPopularText.jsx';
const pageText = mostPopularText;

const textA = pageText.shift();
const accordionList = pageText;

const pageTitle = "The Most Popular Pillows";

function MostPopular() {

    return (
        <>
            <PageTemplate
                pageTitle={pageTitle}
                textA={textA}
                accordionList={accordionList}
                pillowList={pillowList}
                chartImage={null}
            />
        </>
    )
}

export default MostPopular
