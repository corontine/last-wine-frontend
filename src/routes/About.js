import React from 'react';
import Page from '../templates/Page';
// import i18 from '../components/i18Next.js';
import { useTranslation } from "react-i18next";
import i18 from '../components/translations';

import aboutImg from '../images/about.png';

const test = {
  title: "About",
  content: "The COVID-19 outbreak is devastating bars and bakery. We thought we could help them to survive these days.<br/><br/>At the moment these small bars and bakeries could still sell their products until 6 pm.<br/><br/>Most bars and bakeries have thousands of euros in food and alcohol, which they can sell to people who are living next to them. <br/><br/> People can still enjoy their favourite bakery and wine from the bars in the corner.<br/><br/>If you have any question, please write to us hello@weinundbrot.org",
  background: aboutImg
}

export default () => {
  const { t, i18n } = useTranslation();
  console.log(t)
  return(
  <Page title={t('aboutTitle')} content={test.content} background={test.background}/>)}