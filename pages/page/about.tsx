import React from 'react';

import Header from '../../components/Header';

function Pages() {

    return (
        <>
            <Header tag='hidden' title='About me' />
            <div className="my-12 prose prose-stone lg:prose-lg mx-auto">
                <p className="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                    Hi there! I'm a frontend developer, currently living in the outskirts of Zurich, Switzerland. I'm passionate about solving interesting problems, ranging from designing delightful UX experiences
                    up to theoretical Computer Science problems. I'm a quite well-rounded person, so you'll find here posts about coding, living abroad, sports, music, traveling and learning new languages.
                </p>

                <p className="mb-3 font-light text-gray-500 dark:text-gray-400 ">
                    Stuff I have been working with includes:
                    <ul>
                        <li>
                            Frontend
                            <ol>
                                <li>
                                    HTML / Javascript / CSS (obviously, duuuh)
                                </li>
                                <li>
                                    React / Redux
                                </li>
                                <li>
                                    NEXT.js - this blog uses it (it's a fork from https://github.com/frontendweb3/blogify)
                                </li>
                                <li>
                                    Webpack (I loved tinkering with its plugins and configuration when I worked at https://moneypark.ch/)
                                </li>
                                <li>
                                    react-testing-library (I'm passionate about writing tests, which began already at my first real job, quite some years ago: https://developer.epages.com/blog/coding/unit-testing-in-react/)
                                </li>
                            </ol>
                        </li>
                    </ul>
                </p>
                

                <p className="mb-3 font-light text-gray-500 dark:text-gray-400 ">
                    You can download my CV here:
                </p>
            </div>
        </>
    );
}

export default Pages;
