import QuestionItem from '../app/components/QuestionItem.jsx';
import Hero from '../app/components/Hero.jsx';

import questionsList from './questionsList.jsx';
const pillowList = questionsList;

function Questions() {



  return (
            <>
                <div className="divA justify-end">
                    <article>
                        <Hero />
                        <ul className="space-y-4">
                            {pillowList.map((pillow, index) => (
                                    <li key={index} className="w-full">
                                        <QuestionItem
                                            link={pillow.link}
                                            num={index + 1}
                                            question={pillow.question}
                                            answer={pillow.answer}
                                            name={pillow.title}
                                            description={pillow.description}
                                            className="w-full bg-white p-4 rounded shadow pillow-text"
                                        />
                                    </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </>
  )
}

export default Questions
