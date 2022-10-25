/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Main.module.scss';

const {
  is_active,
  card,
  card_header,
  card_avatar,
  card_avatar_content,
  card_fullname,
  card_jobtitle,
  card_main,
  card_section,
  card_desc,
  card_subtitle,
  card_buttons,
  card_buttons_item,
  card_buttons_item_btn,
  card_networks,
  card_networks_item,
  card_networks_item__elem,
  card_timeline,
  card_timeline_item,
  card_timeline_item_title,
  card_timeline_item_desc,
  card_contact,
  card_contact_item,
  card_contact_item_img,
  card_contact_item_link,
  card_action,
  //
  container,
  gradient,
  gradient_container1,
  gradient_container2,
  gradient_blur,
} = styles;
const Home = () => {
  const [step, setStep] = useState('about');
  const handlerAbout = evt => {
    evt.preventDefault();
    setStep('about');
  };
  const handlerExperience = evt => {
    evt.preventDefault();
    setStep('experience');
  };
  const handlerContact = evt => {
    evt.preventDefault();
    setStep('contact');
  };
  console.log('step: ', step);
  return (
    <>
      <Head>
        <title>CV | Front-End Devepoler</title>
      </Head>
      <main>
        <section className={card}>
          <div className={gradient}>
            <div className={gradient_container1}></div>
            <div className={gradient_container2}></div>
          </div>
          <div className={card_header}>
            <div className={card_avatar}>
              <Image
                src="/me.jpg"
                alt="avatar"
                width={100}
                height={100}
                className={card_avatar_content}
              />
            </div>
            <h1 className={card_fullname}>Ganna Romashchenko</h1>
            <h2 className={card_jobtitle}>Front-End Devepoler</h2>
          </div>
          <div className={card_main}>
            {step === 'about' && (
              <div className={card_section} id="about">
                <h3 className={card_subtitle}>About</h3>
                <p className={card_desc}>
                  I’m looking for an opportunity to join a team of
                  JavaScript/React developers that are the same mad of creating
                  the best user experience as me.
                </p>
                <p className={card_desc}>
                  I enjoy implementing complex and adaptive design layouts
                  using: CSS Modules, SCSS/SASS, MUI, or React Bootstrap and
                  working in a close-knit team.
                </p>
                <ul className={card_networks}>
                  <li className={card_networks_item}>
                    <a
                      href="https://github.com/Romashka093"
                      target="_blank"
                      rel="noreferrer"
                      className={card_networks_item__elem}
                    >
                      <Image
                        src="/github.svg"
                        alt="github"
                        width={16}
                        height={16}
                      />
                    </a>
                  </li>
                  <li className={card_networks_item}>
                    <a
                      href="https://www.linkedin.com/in/annaromashchenko/"
                      target="_blank"
                      rel="noreferrer"
                      className={card_networks_item__elem}
                    >
                      <Image
                        src="/linkedin.svg"
                        alt="linkedin"
                        width={16}
                        height={16}
                      />
                    </a>
                  </li>
                  <li className={card_networks_item}>
                    <a
                      href="https://djinni.co/q/4fa7a3457e/"
                      target="_blank"
                      rel="noreferrer"
                      className={card_networks_item__elem}
                    >
                      <Image
                        src="/djinni.svg"
                        alt="djinni"
                        width={16}
                        height={16}
                      />
                    </a>
                  </li>
                  <li className={card_networks_item}>
                    <a
                      href="https://t.me/romashchenkog"
                      target="_blank"
                      rel="noreferrer"
                      className={card_networks_item__elem}
                    >
                      <Image
                        src="/telegram.svg"
                        alt="telegram"
                        width={16}
                        height={16}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            )}
            {step === 'experience' && (
              <div className={card_section} id="experience">
                <h3 className={card_subtitle}>Work experience</h3>
                <ul className={card_timeline}>
                  <li className={card_timeline_item} data-year="2021-2022">
                    <div className={card_timeline_item_title}>
                      Front-end Developer at{' '}
                      <span>
                        <a
                          href="https://www.linkedin.com/company/sevoyer/about/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Sevoyer
                        </a>
                      </span>
                    </div>
                    <div className={card_timeline_item_desc}>
                      Worked on projects related to cryptocurrency with techno
                      stack: React/Redux with SCSS and then Vue/Vuex/Nuxt with
                      SCSS/Vuetify.
                    </div>
                  </li>
                  <li className={card_timeline_item} data-year="2020-2021">
                    <div className={card_timeline_item_title}>
                      Front-end Developer at <span>CheckIn</span>
                    </div>
                    <div className={card_timeline_item_desc}>
                      Remote team day-to-day management tool. I have implemented
                      adaptive HTML/CSS mockups using React and integration with
                      the back-end with Redux.
                    </div>
                  </li>
                  <li className={card_timeline_item} data-year="2014-2019">
                    <div className={card_timeline_item_title}>
                      Marketing Assistant to Sales Department at{' '}
                      <span>
                        <a
                          href="http://sevenhills.com.ua/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Seven Hills
                        </a>
                      </span>
                    </div>
                    <div className={card_timeline_item_desc}>
                      Supervising the
                      <strong>
                        {' '}
                        <a
                          href="https://parkavenuevip.com.ua/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Park Avenue VIP
                        </a>{' '}
                      </strong>
                      website creation project and implementing the transition
                      between the old and new CRM systems (BMBY → Brainify).
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {step === 'contact' && (
              <div className={card_section} id="contact">
                <h3 className={card_subtitle}>Сontact</h3>
                <ul className={card_contact}>
                  <li className={card_contact_item}>
                    <div className={card_contact_item_img}>
                      <Image
                        src="/location.svg"
                        alt="location"
                        width={24}
                        height={24}
                      />
                    </div>
                    <a
                      href="https://goo.gl/maps/RzFc1bdugSkwL7F56"
                      target="_blank"
                      rel="noreferrer"
                      className={card_contact_item_link}
                    >
                      Ukraine, Kyiv
                    </a>
                  </li>
                  <li className={card_contact_item}>
                    <div className={card_contact_item_img}>
                      <Image
                        src="/phone.svg"
                        alt="phone"
                        width={24}
                        height={24}
                      />
                    </div>
                    <a
                      href="tel:+380934707299"
                      target="_blank"
                      rel="noreferrer"
                      className={card_contact_item_link}
                    >
                      +38 (093) 470 72 99
                    </a>
                  </li>
                  <li className={card_contact_item}>
                    <div className={card_contact_item_img}>
                      <Image
                        src="/mail.svg"
                        alt="mail"
                        width={24}
                        height={24}
                      />
                    </div>
                    <a
                      href="mailto:aa.romashchenko@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className={card_contact_item_link}
                    >
                      aa.romashchenko@gmail.com
                    </a>
                  </li>
                </ul>
                <button className={card_action}>
                  <a
                    href="https://t.me/romashchenkog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`${"Let's work together!"}`}
                  </a>
                </button>
              </div>
            )}
            <ul className={card_buttons}>
              <li
                className={`${card_buttons_item} ${
                  step === 'about' && is_active
                }`}
              >
                <button
                  className={card_buttons_item_btn}
                  onClick={handlerAbout}
                >
                  about
                </button>
              </li>
              <li
                className={`${card_buttons_item} ${
                  step === 'experience' && is_active
                }`}
              >
                <button
                  className={card_buttons_item_btn}
                  onClick={handlerExperience}
                >
                  experience
                </button>
              </li>
              <li
                className={`${card_buttons_item} ${
                  step === 'contact' && is_active
                }`}
              >
                <button
                  className={card_buttons_item_btn}
                  onClick={handlerContact}
                >
                  contact
                </button>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
