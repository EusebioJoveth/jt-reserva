import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './list.css'
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

function List() {

  const location = useLocation();
  const [destino, setDestino] = useState(location.state.destino);
  const [date, setDate] = useState(location.state.date);
  const [options, setOpenOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false);

  return (
    <div className="list">
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Pequisar</h1>
            <div className="lsItem">
              <label htmlFor="">Destino</label>
              <input type="text" placeholder={destino} />
            </div>
            <div className="lsItem">
              <label htmlFor="">Data de check-in</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  //editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  // moveRangeOnFirstSelection = {false}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label htmlFor="">Opções</label>
              <div className="listOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Mínimo preço <small>por noite</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    {" "}
                    Máximo preço<small>por noite</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adulto</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adulto}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Criânça</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.crianca}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Quarto</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.quarto}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
}

export default List