import React, { useState } from 'react'
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from '@fortawesome/free-solid-svg-icons';
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

function Hotel() {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true); 
  };

  const handleMove = (direction)=>{
let newSlideNumber;

if(direction === "l"){
  newSlideNumber = slideNumber ===0?5:slideNumber-1;
}else{
  newSlideNumber = slideNumber ===5?0:slideNumber+2;
}

setSlideNumber(newSlideNumber)
  };

  return (
    <div className='hotel'>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
         { open && <div className="slider">
           <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpen(false)}/>
           <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
           <div className="sliderWrapper">
             <img src={photos[slideNumber].src} alt="" className="sliderImg" />
           </div>
           <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve Agora</button>
          <h1 className="hotelTitle">Grande Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation}/>
            <span>Marginal rua 125 Luanda</span>
          </div>
          <span className="hotelDistance">
            Excelente localização a 500 metro do Aeroporto
          </span>
          <span className="hotelPriceHighlight">
          Reserve uma estadia acima de $114 nesta propriedade e ganhe um táxi gratuito do aeroporto
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) =>(
              <div className="hotelImgWrapper">
                <img src={photo.src} alt=""
                className='hotelImg'
                onClick={()=>handleOpen(i) } />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Fica no coração da Marginal</h1>
              <p className="hotelDesc">
              Localizado a 5 minutos a pé do Portão de São Floriano em Cracóvia, Torre
                O Street Apartments dispõe de acomodações com ar condicionado e
                Wifi grátis. As unidades contam com piso de madeira e apresentam
                cozinha compacta totalmente equipada com micro-ondas, TV de tela plana,
                e banheiro privativo com chuveiro e secador de cabelo. Uma geladeira é
                também oferecido, bem como um bule de chá elétrico e um café
                máquina. Os pontos de interesse populares perto do apartamento incluem
                Cloth Hall, Praça do Mercado Principal e Torre da Câmara Municipal. O mais perto
                aeroporto é João Paulo II Internacional Cracóvia–Balice, 16,1 km
                do Tower Street Apartments, e a propriedade oferece um serviço pago
                serviço de transporte para o aeroporto.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfeito para uma estadia de 9 noites!</h1>
              <span>Localizada no verdadeiro coração de Cracóvia, esta propriedade tem uma
                excelente pontuação de localização de 9,8!
              </span>
              <h2>
                <b>$950</b> (9 noites)
              </h2>
              <button>Reserva Agora!</button>
            </div>
           
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel