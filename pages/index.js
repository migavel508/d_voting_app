import React,{useState,useEffect,useContext} from "react";
import Image from "next/image";
import Countdown from 'react-countdown';

//INTERNAL IMPORT 

import { votingContext } from "../context/Voter";
import Style from "../styles/index.module.css";
import Card from "../components/card/card";
import image from "../assets/candidate-1.jpg";


const index = () => {
  const { votingTitle }=useContext(votingContext)
  return <div>{votingTitle}</div>;
};

