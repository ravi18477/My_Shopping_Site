import React from 'react';
import Homeclone from './Homeclone';

function Home({additemto}) {

 function additemtoc(item){
  console.log(item);
    additemto(item);
  }


    const trimmerList=[{
        id:"th001",
        imgurl:'th001',
        prodname:"Phillip trimmer",
        price:1200,
       },{
        id:"th002",
        imgurl:'th002',
        prodname:"Actrat III",
        price:900,
       },{
        id:"th003",
        imgurl:'th003',
        prodname:"Hevels Sooner",
        price:769,
       },{
        id:"th004",
        imgurl:'th004',
        prodname:"Phillip Dark",
        price:880,
       },{
        id:"th005",
        imgurl:'th005',
        prodname:"Kemai 300",
        price:950,
       },{
        id:"th006",
        imgurl:'th006',
        prodname:"One Plus",
        price:999,
       },{
        id:"th007",
        imgurl:'th007',
        prodname:"Monotonus V",
        price:790,
       },{
        id:"th008",
        imgurl:'th005',
        prodname:"Phillip s700",
        price:1100,
       },{
        id:"th009",
        imgurl:'th002',
        prodname:"Grand Opener",
        price:950,
       },{
        id:"th010",
        imgurl:'th006',
        prodname:"Havels 8S",
        price:660,
       },
       {id:"th011",
       imgurl:'th001',
       prodname:"Eye Secure",
       price:600
      }]

      const shoesList=[{
        id:"sh001",
        imgurl:'sh001',
        prodname:"Rolex",
        price:799,
       },{
        id:"sh002",
        imgurl:'sh002',
        prodname:"Redcliff Sharp",
        price:700,
       },{
        id:"sh003",
        imgurl:'sh003',
        prodname:"Puma S3",
        price:399,
       },{
        id:"sh004",
        imgurl:'sh004',
        prodname:"Khaddim's 4",
        price:1000,
       },{
        id:"sh005",
        imgurl:'sh005',
        prodname:"Sparkx s10",
        price:599,
       },{
        id:"sh006",
        imgurl:'sh006',
        prodname:"Sports Shoes",
        price:649,
       },{
        id:"sh007",
        imgurl:'sh007',
        prodname:"Mount climbing",
        price:499,
       },{
        id:"sh008",
        imgurl:'sh003',
        prodname:"Grip Master",
        price:500,
       },{
        id:"sh009",
        imgurl:'sh005',
        prodname:"Frictionless",
        price:599,
       },{
        id:"sh010",
        imgurl:'sh006',
        prodname:"Man's Shoes",
        price:450,
       },
       {id:"sh011",
       imgurl:'sh001',
       prodname:"Soft Fly",
       price:599
      }]

      const tshirtList=[{
        id:"ts001",
        imgurl:'ts001',
        prodname:"RCB T-Shirt",
        price:989,
       },{
        id:"ts002",
        imgurl:'ts002',
        prodname:"Puma Navyblue",
        price:559,
       },{
        id:"ts003",
        imgurl:'ts003',
        prodname:"White Check",
        price:699,
       },{
        id:"ts004",
        imgurl:'ts004',
        prodname:"Redcliff",
        price:450,
       },{
        id:"ts005",
        imgurl:'ts005',
        prodname:"Superman T-shirt",
        price:1299,
       },{
        id:"ts006",
        imgurl:'ts006',
        prodname:"Get Design",
        price:440,
       },{
        id:"ts007",
        imgurl:'ts007',
        prodname:"Polo Uniform",
        price:1999,
       },{
        id:"ts008",
        imgurl:'ts008',
        prodname:"Gold Splash",
        price:399,
       },{
        id:"ts009",
        imgurl:'ts003',
        prodname:"Limitless Fashion",
        price:599,
       },{
        id:"ts010",
        imgurl:'ts001',
        prodname:"Pumas",
        price:699,
       },
       {id:"ts011",
       imgurl:'ts006',
       prodname:"Inner Waist",
       price:589
      }]
    
  

  return (
    <>
    <Homeclone itemList={trimmerList}  additemto={additemtoc}></Homeclone>
    <Homeclone  itemList={shoesList} additemto={additemtoc}></Homeclone>
    <Homeclone  itemList={tshirtList} additemto={additemtoc}></Homeclone>
    

    {/* <Homeclone itemlist={itemList}></Homeclone>
    <Homeclone itemlist={itemList}></Homeclone>
    <Homeclone itemlist={itemList}></Homeclone>
    <Homeclone itemlist={itemList}></Homeclone> */} 


    </>
      

  )
}

export default Home
