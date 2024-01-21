import React from 'react';
import Image from 'next/image'
import Header from '../../components/Header';

function Pages() {

    return (
        <>
            <Header tag='hidden' title='About me' />
            <div className="my-12 prose prose-stone lg:prose-lg mx-auto px-8">
                <p className="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                    Hi there! I'm a frontend developer, currently living in the outskirts of Zurich, Switzerland. I'm passionate about solving interesting problems, ranging from designing delightful UX experiences
                    up to theoretical Computer Science problems. I'm a quite well-rounded person, so you'll find here posts about coding, living abroad, sports, music, traveling and learning new languages.
                </p>

                <div className="flex justify-center items-center">
                    <Image src="/images/Hara.jpg" width={500} height={500} />
                </div>

                <p className="mb-3 font-light text-gray-500 dark:text-gray-400 ">
                    I'm originally Brazilian, with Japanese (from my dad's side) and Spanish (from my mom's side) origins. I lived in São Paulo for 24 years, up to my graduation
                    in Computer Engineering at ITA, which is arguably the most rigorous engineering school in Brazil. In case you're curious, here is an <a href="https://en.wikipedia.org/wiki/Instituto_Tecnol%C3%B3gico_de_Aeron%C3%A1utica"> article about it</a>.
                </p>

                <p className="mb-3 font-light text-gray-500 dark:text-gray-400 ">
                    My free time is spent between sport, playing the piano and watching performances of classical music and opera (I'm proud to say I've been to most of the major opera houses in the world).
                </p>

                <p className="mb-3 font-light text-gray-500 dark:text-gray-400 ">
                    Stuff I have been working with includes:
                </p>

                <ul>
                        <li>
                            Frontend
                            <ol>
                                <li>
                                    <b>HTML / Javascript / CSS</b> (obviously, duuuh)
                                </li>
                                <li>
                                    <b>React / Redux</b> (that started in 2018)
                                </li>
                                <li>
                                    <b>NEXT.js</b> - this blog uses it (it's a fork from <a href="https://github.com/frontendweb3/blogify">https://github.com/frontendweb3/blogify</a>)
                                </li>
                                <li>
                                    <b>webpack</b> (I loved tinkering with its plugins and configuration when I worked at <a href="https://moneypark.ch">MoneyPark</a>)
                                </li>
                                <li>
                                    <b>react-testing-library</b> (I'm passionate about writing tests, which began already at my first real job, quite some years ago. I wrote this <a href="https://developer.epages.com/blog/coding/unit-testing-in-react/">post</a> about it back then)
                                </li>
                            </ol>
                        </li>
                        <li>
                            Backend
                            <ol>
                                <li>
                                    <b>Python</b> - I've been using this language to solve coding challenges on https://leetcode.com/
                                </li>
                                <li>
                                    <b>Java</b>
                                </li>
                                <li>
                                   <b>SQL databases</b>
                                </li>
                            </ol>
                        </li>
                        <li>
                            Data Structures & Algorithms
                            <ol>
                                <li>
                                    <b>Leetcode</b> - check out some of my solutions at <a href="https://github.com/DanielHara/leetcode-solutions">this repo</a>, and <a href="https://leetcode.com/haradaniel/">my profile</a>
                                </li>
                            </ol>
                        </li>
                        <li>
                            Machine learning (still just playing around with it)
                            <ol>
                                <li>
                                    Tensorflow / Keras
                                </li>
                                <li>
                                    Models like k-means, Regression Tree, Neural Networks, and so on
                                </li>
                            </ol>
                        </li>
                    </ul>
                <p className="mb-3 font-light text-gray-500 dark:text-gray-400 ">
                    You can download my full CV on <a href="https://drive.google.com/file/d/1-5MsXbAZKNYv6Tu77u-Srai26qEZFLCn/view">this link</a>
                </p>
            </div>
        </>
    );
}

export default Pages;
