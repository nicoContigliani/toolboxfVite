/* eslint-disable no-unused-vars */
import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = async ({
  url,
  body,
  params,
  method,
  token
}) => {

  const urls = await
  params != null
  ? `${url}/${params}`
  : `${url}`;
  


  const datas = await axios({
    method: method,
    url: urls,
    data: body,
    headers: { Authorization: `Bearer ${token}` }
  });

  return [datas.data];
};
export default useAxios;
