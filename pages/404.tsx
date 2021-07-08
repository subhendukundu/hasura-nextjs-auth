import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import Error from 'next/error'

const Custom404Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Error Page</title>
      </Head>
      <Error statusCode={404} />
    </>
  );
};

export default Custom404Page;
