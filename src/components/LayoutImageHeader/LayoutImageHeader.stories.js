import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";

import LayoutImageHeader from './LayoutImageHeader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default {
  title: 'LayoutImageHeader',
  decorators: [withKnobs],
};

const defaultProps = {
  src: "https://images.unsplash.com/photo-1414690165279-49ab0a9a7e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  title: "Encontre trabalhos",
  description: "Descubra seu próximo passo profissional, trabalho, frellance ou estágio.",
};

const defaultKnobs = {
  src: text('src', defaultProps.src),
  title: text('title', defaultProps.title),
  description: text('description', defaultProps.description),
};

export const withDefault = () => (
  <LayoutImageHeader
    src={text('src', defaultProps.src)}
    title={text('title', defaultProps.title)}
    description={text('description', defaultProps.description)}
  />
);

export const withContent = () => (
  <LayoutImageHeader {...defaultKnobs} >
    <div style={{ backgroundColor: "#FFF", width: "80%", height: 300, borderRadius: 4 }} />
  </LayoutImageHeader>
);

export const withHeaderAndFooterAndContent = () => (
  <>
    <Header />
    <LayoutImageHeader {...defaultKnobs}>
      <div style={{ backgroundColor: "#FFF", width: "80%", height: 300, borderRadius: 4 }} />
    </LayoutImageHeader>
    <Footer />
  </>
);