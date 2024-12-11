import PageTemplate from '../components/PageTemplate.jsx';

import thinList from '../pillowLists/thinList.jsx';
const pillowList = thinList;
import thinText from '../pageText/thinText.jsx';
const pageText = thinText;

const textA = pageText.shift();
const accordionList = pageText;

const pageTitle = "The Best Thin (Low Profile) Pillows";

function Thin() {

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

export default Thin
