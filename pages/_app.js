import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/Layout';
import styles from '../components/global.styles';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <style jsx>{styles}</style>
      </Container>
    );
  }
}

export default MyApp;
