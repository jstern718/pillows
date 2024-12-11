import PageTemplate from '../components/PageTemplate.jsx';

import memoryFoamList from '../pillowLists/memoryFoamList.jsx';
const pillowList = memoryFoamList;
import memoryFoamText from '../pageText/memoryFoamText.jsx';
const pageText = memoryFoamText;

const textA = pageText.shift();
const accordionList = pageText;

const pageTitle = "The Best Memory Foam Pillows";

function MemoryFoam() {

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

export default MemoryFoam;