
import '../App.css';

import Pillow from '../Pillow.jsx';
import TopOfPage from '../components/TopOfPage.jsx';

function Cooling() {

  let pillowList = [
                    {intro: "The Best Cooling Pillow if You've Tried Everything and Nothing Works",
                      title: 'LOFE Organic Buckwheat Pillow for Sleeping - 16" x 22" - Adjustable Loft',
                      description: "Buckwheat hull pillows can be a revelation. They are the best option if you have tried everything else and nothing has worked. Beware, they are very firm. So they are not for everyone. But if they're comfortable to you, no modern technology is going to be cooler. They just doesn't get hot in the way pretty much all other pillows will once you start sweating.  The rest of the pillows below are for people who are looking for a pillow that is more like what they are used to, but that is also cooling.",
                      link: "https://amzn.to/48UilXj"},
                    {intro: "The Best Cooling Pillow For People Who Like Shredded Foam Pillows",
                      title: "Sleep On Latex - Natural Shredded Latex Pillow",
                      description: "Latex is an amazing material. Unfortunately it's also a fairly expensive one. That's because it's actually natural. It's made from the sap of the rubber tree. It's also a very springy material, which means that it can provide a lot of support. Shredded memory foam pillows are some of the best pillows for people who need a taller, more supportive pillow than down or down alternative can provide. But, to many, memory foam feals like sleeping indside a sauna. Latex won't have this problem. These pillows are a bit more affordable than other shredded latex ones because they come in a pack of two.",
                      link: "https://amzn.to/3YJqxow"},
                    {intro: "The Best Cooling Pillow if You Like Solid Foam Pillows",
                      title: "RejuveNite American Talalay Latex - Medium Support Bed Pillow",
                      description: "We prefer shredded latex becuase non-shredded latex can be a bit too firm. But if you like firm pillows, this a gread option. It won't make you sweat like a traditional solid memory foam pillow will.",
                      link: "https://amzn.to/3OaZNZn"},
                    {intro: "The Best Cooling Pillow if You Like Solid Foam But Aren't a Fan of Latex",
                      title: "Tempur-Pedic TEMPUR-Cloud Dual Cooling Pillow - Queen",
                      description: "Not everyone likes the springiness of latex. If you're one of those people, you might have to go with a more traditional opition. Tempur-pedic has been making good, but expensive pillows for ages. Somehow, their memory foam manages to be more supportive than everyone else's. Tempur-Pedic is actually one of the few brands than has figured out how to make a cooling pillow cover that works more often than not. But it's still just a cover over a hot pillow. This pillow is a bit different. It has an internal gel layer meant to prevent the heat from building up to begin with.",
                      link: "https://amzn.to/3YUEhNo"},
                    {intro: "The Best Cooling Pillow At A Reasonable Price",
                      title: "SensorPEDIC Therapedic® Polar Nights™ - 20X Cooling Standard Memory Foam Pillow",
                      description: "Unfortunately, a lot of the pillows mentioned above have been on the pricier side. That's not true of this pillow, which relies on a proprietary cooling technology. Honestly, it's hard to take the scientific claims about these products seriously. The companies change the name of the technology every year or two. But this is a model that has been around for a little while and manages to not get to hot when you've been on it for more than a few seconds.",
                      link: "https://amzn.to/4fvBBwN"},
                    {intro: "An Alternative Reasonably Priced Cooling Pillow",
                      title: "Bedsure Breescape Cooling Pillow for Sleeping - Firm",
                      description: "If your looking for a reasonably priced cooling pillow, but the firmness of buckwheat hulls doesn't work for you and the propriety foam blends don't really help, this option with a gel layer might be the best option for you. The gel layer here won't keep you cool for ever, but it lasts much longer than cooling pillow covers.",
                      link: "https://amzn.to/40NtpU8"},
                    ];

  let cardNumber = pillowList.length;


  let textA = "There is a lot of competition in this part of the market. Every other pillow you see will say it's cooling. And if the ad text doesn't go that far, it will at least claim that the pillow is breathable. Most of the times neither of these things are true.";
  let textB = "The majority of cooling pillows that are called cooling pillows either just have a cooling cover or they have a gel material mixed in with their  foam. Except in rare cases, the gel doesn't do anything. The cooling covers, on the other hand, aren't really cooling at all. They will feel cool for a minute or two when you touch first lay down on them. But that's more of a problem than a solution";
  let textC = "What you can feel is the heat from your face or hand being pulled away from you and into the pillowcase. This is not nearly enough to cool your whole body; so that body part just gets hot again in a few minutes. But the heat that left you is now in the pillow, which is now hotter than even your most average non-cooling pillow. These products aren't just bad at doing what they claim to do. They actively make thinks worse, hoping to trick you. Or you might say, hoping to pull unbreathable polyester over your eyes. Forget about them, and don't look back. ";
  let textD = "People can have different opinions about the remaining options. There are pillows with cooling gel on top so that you are protected from the part of the pillow that would draw in heat. There are pillows made up of proprietary foam blends. There are pillows made of latex, which doesn't absorb heat to the extent that memory foam does. Finally, there is an even older technology from Japan, the buckwheat pillow. Ok, it's not exactly a technology. But if you're enjoy a firm pillow, this is probably the coolest option. We've tried to offer a bunch of different options, from down to down alternative and from memory foam to latex";
  let accordionList = [textB, textC, textD];


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

export default Cooling
