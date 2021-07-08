import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import Error from 'next/error'


const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>cool.bio analytics backend</title>
      </Head>
      <Error statusCode={404} />
    </>
  );
};

export default IndexPage;
