import React, {useState,useEffect,useCallback,useContext} from "react";

import { useRouter } from "next/router";

import { useDropzone } from "react-dropzone";

import Image from "next/image";

//internal import 

import { VotingContext } from "../context/Voter";
import Style from '../styles/allowedVoter.module.css';

import images from '../assets';
import Button from '../components/Button/Button';

import Input from '../components/Input/Input';


const allowedVoters=()=>{
  const [fileUrl,setFileUrl]=useState(null);
  const [formInput,setFormInput]=useState({
    name:"",
    address:"",
    position:"",
  });
  const router =useRouter();
  const { uploadToIPFS }=useContext(VotingContext);


  //voter image drop 

  const onDrop=useCallback(async(acceptedFil)=>{
    const url=await uploadToIPFS(acceptedFil[0]);
    setFileUrl(url);
  });

  const { getRootProps,getInputProps }=useDropzone({
    onDrop,
    accept:"image/*",
    maxSize:5000000,
  });


console.log(fileUrl)

//---JSX PART
  return (
    <div className={Style.createVoter}>
      <div>
        {fileUrl && (
          <div className={Style.voterInfo}>
            <img src={fileUrl} alt="Voter image"/>
            <div className={Style.voterInfo_paragraph}>
              <p>
                Name: <span>&nbps; {formInput.name}</span>
              </p>

              <p>
                Add: &nbps; <span>{formInput.address.slice(0,20)}</span>
              </p>
              <p>
                Pos: &nbps; <span>{formInput.position}</span>
              </p>
            </div>
              

          </div>
        )}


        {
          !fileUrl && (
            <div className={Style.sideInfo}>
              <div className={Style.sideInfo_box}>
                <h4>Create candidate For Voting</h4>
                <p>
                  Blockchain Voting Organization,Provide Ethereum Ecosystem
                </p>
                <p className={Style.sideInfo_para}>Contract Candidate</p>

                <div className={Style.card}>
                  {/*{voterArray.map((el,li)=>(
                    <div key={i+1} className={Style.card_box}>
                      <div className={Style.image}>
                        <img src="" alt="Profile Photo"/>
                      </div>

                      <div className={Style.card_info}>
                        <p>Name</p>
                        <p>Address</p>
                        <p>Details</p>
                      </div>
                    </div>
                  ))}?*/}
                </div>

              </div>
            </div>
          )
        }


      </div>

      <div className={Style.voter}>
        <div className={Style.voter_container}>
          <h1>Create New</h1>
          <div className={Style.voter_container_box}>
            <div className={Style.voter_container_box_div}>
              <div {...getRootProps()}>
                <input {...getInputProps()}/>

                <div className={Style.voter_container_box_div_info}>
                  <p>Upload File: JPG, PNG, GIF, WEBM Max 10MB</p>

                  <div className={Style.voter_container_box_div_image}>
                    <Image src={images.upload} width={150} height={150} objectFit="contain" alt="File Upload"
                    />
                  </div>
                  <p>Drag & Drop</p>
                  <p>or Browse Media on your device</p>

                </div>
              </div>
            </div>
          </div>
        </div>


        <div className={Style.input_container}>
          
              <Input 
            inputType="text" 
            title="Name" 
            placeholder="Voter Name"
            handleClick={(e)=> 
              setFormInput({...formInput,name:e.target.value })
              }
              />
              <Input 
            inputType="text" 
            title="Address" 
            placeholder="Voter Address"
            handleClick={(e)=> 
              setFormInput({...formInput,address:e.target.value })
              }
              />
              <Input 
            inputType="text" 
            title="Position" 
            placeholder="Voter Position"
            handleClick={(e)=> 
              setFormInput({...formInput,position:e.target.value })
              }
              />
              


              <div className={Style.Button}>
                <Button btnName="Authorized Voter" handleClick={()=>{}}/>

              </div>
        </div>
      </div>


      {/* //////////////*/}
      <div className={Style.createdVoter}>
        <div className={Style.createdVoter_info}>
          <Image src={images.creator} alt="user Profile" />
          <p>Notice for users</p>
          <p>
            Organizer<span> 0x9399999...</span>
          </p>
          <p>
            Only organizer of the voting contract can create voter for
             voting election
          </p>
        </div>
      </div>
    </div>
  );

  
};

export default allowedVoters;
