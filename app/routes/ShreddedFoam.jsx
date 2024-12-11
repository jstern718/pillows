import PageTemplate from '../components/PageTemplate.jsx';

import shreddedFoamList from '../pillowLists/shreddedFoamList.jsx';
const pillowList = shreddedFoamList;
import shreddedFoamText from '../pageText/shreddedFoamText.jsx';
const pageText = shreddedFoamText;

const textA = pageText.shift();
const accordionList = pageText;

const pageTitle = "The Best Shredded Foam Pillows";

function ShreddedFoam() {

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

export default ShreddedFoam