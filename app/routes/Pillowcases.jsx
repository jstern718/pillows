import PageTemplate from '../components/PageTemplate.jsx';

import pillowcasesList from '../pillowLists/pillowcasesList.jsx';
const pillowList = pillowcasesList;
import pillowcasesText from '../pageText/pillowcasesText.jsx';
const pageText = pillowcasesText;

const textA = pageText.shift();
const accordionList = pageText;

const pageTitle = "The Best Pillowcases";
function Pillowcases() {


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

export default Pillowcases;
