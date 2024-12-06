import Pillow from '../Pillow.jsx';
import TopOfPage from '../components/TopOfPage.jsx';

function MostPopular() {

  let pillowList = [
                    {intro: "The Most Popular (Super Fluffy) Pillow Set",
                     title: "Beckham Hotel Collection Bed Pillows",
                     description: "The Beckham Hotel Collection Bed Pillows (standard/queen) (which come in sets of 2) are down alternative pillows with 100% polyester filling and a 250 thread count cotton cover. They are about 4 1/2 inches thick.",
                     link: "https://amzn.to/4eUVyfQ"},
                     {intro: "A Popular Gusseted Pillow Set (that is also affordable and fluffy)",
                      title: "Utopia Bedding Bed Pillows",
                      description: "The Utopia Bedding Bed Pillows (queen) (which come in sets of 2) are down alternative pillows with polyester fill, a 200 thread count polycotton cover, and 2 inch gussets with corded edges. They are approximately 7 or 8 inches thick.",
                      link: "https://amzn.to/3A4Hcuq"},
                     {intro: "A Popular Adjustable Memory Foam Pillow For People Who Want More Support (and who don't sleep too hot)",
                      title: "Coop Home Goods Original Adjustable Pillow",
                      description: "The Coop Home Goods Original Adjustable Pillow (queen) is made with cross cut memory foam. It has an outer cover made of polyester (60%) and rayon (40%). It's thickness is measured at 8 inches.",
                      link: "https://amzn.to/3YkqfFX"},
                     {intro: "A Very Affordable Down Alternative Pillow That is Astonishingly Fluffy",
                      title: "Bedsure Down Alternative Pillows",
                      description: "The Bedsure Pillows (queen) (which come in sets of 2) are down alternative pillows with a polyester microfiber cover and a 100% polyester microfiber fill. They are approximately 9 1/2 inches thick.",
                      link: "https://amzn.to/482LPC7"},
                     {intro: "Another Gusseted Pillow Set That Is Also Affordable",
                         title: "Viewstar Down Alternative Pillows",
                      description: "The Viewstar Pillows (queen) (which come in sets of 2) are down alternative pillows with a polyester cover and a microfiber fill. They have a gusseted design.",
                      link: "https://amzn.to/3zVd30K"}
                    ];
  let cardNumber = pillowList.length;


  let textA = "The most popular pillows on Amazon are all on the      fluffy/high side. They are best for people who like to sleep on their backs - Some side sleepers might like them, but only if they need a higher pillow.";
  let textB = "All of these pillows are popular because they offer a good deal and come in packs of two. If you prefer fluffy pillows, and/or you need to buy a lot of pillows while furnishing a new house, these will be a good option for you.";
  let textC = "If you aren't too concerned about price, see our list of the best fluffy pillows.";
  let accordionList = [textB, textC];


  return (
    <>
      <div className="divA justify-end">
        <article>
        <TopOfPage textA={textA} accordionList={accordionList}/>
            <ul className="space-y-4">
                {pillowList.map((pillow, index) => (
                        <li key={index} className="w-full">
                            <Pillow
                                intro={pillow.intro}
                                name={pillow.title}
                                num={index + 1}
                                link={pillow.link}
                                description={pillow.description}
                                className="w-full bg-white p-4 rounded shadow"/>
                        </li>
                ))}
            </ul>
        </article>
      </div>
    </>
  )
}

export default MostPopular
