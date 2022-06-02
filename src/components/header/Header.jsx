import { faBed, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import "./header.css";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import format from 'date-fns/format';

const Header = ({type}) => {

  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState(
   {
    adulto: 1,
    crianca: 0,
    quarto: 1
   }
  );
  const [date, setDate] = useState([
    {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
    }
  ]);

  const handleOption = (nome, operacao) =>{
    setOptions((prev) =>{
      return {
        ...prev,
        [nome]: operacao ==="a" ? options[nome] + 1 : options[nome] - 1,
      }
    });
  };
  
  return (
    <di className='header'>
        <div className={type === "list" ? "headerContainer listMode": "headerContainer"}>
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Estadias</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Voos</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Aluguel de Carros</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Atrações</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Táxis do aeroporto</span>
            </div>
        </div>
       {type !== "list" &&
         <>
        <h1 className="headerTitle">Uma vida inteira de descontos? És gênio.</h1>
        <p className="headerDesc">
        seja recompensado por suas viagens desbloqueie economias instantâneas de 10% ou mais com uma conta JTreserva gratuita
        </p>
        <button className="headerBtn">Entrar / Registar</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input type="text" placeholder='Onde Vais?' className='headerSearchInput' />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} até a  ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
           {openDate && <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date} 
            className="date"
            />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adulto} adulto . ${options.crianca} criança . ${options.quarto} quarto`}</span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adulto</span>
                <div className="optionCounter">
                <button disabled={options.adulto <= 1} className="optionCounterButton" onClick={()=> handleOption("adulto", "d")}>-</button>
                <span className="optionCounterNumber">{options.adulto}</span>
                <button className="optionCounterButton" onClick={()=> handleOption("adulto", "a")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Criança</span>
                <div className="optionCounter">
                <button disabled={options.crianca <= 1} className="optionCounterButton" onClick={()=> handleOption("crianca", "d")}>-</button>
                <span className="optionCounterNumber">{options.crianca}</span>
                <button className="optionCounterButton" onClick={()=> handleOption("crianca", "a")}>+</button>
                </div>
              </div>
             
              <div className="optionItem">
                <span className="optionText">Quarto</span>
               <div className="optionCounter">
               <button  disabled={options.quarto <= 1}className="optionCounterButton" onClick={()=> handleOption("quarto", "d")}>-</button>
                <span className="optionCounterNumber">{options.quarto}</span>
                <button className="optionCounterButton" onClick={()=> handleOption("quarto", "a")}>+</button>
               </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Pesquisar</button>
          </div>
        </div>
        </>
        }

        </div>
       
    </di>
  )
}

export default Header