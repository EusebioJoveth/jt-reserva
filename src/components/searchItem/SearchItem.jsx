import React from 'react'
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
       />
       <div className="siDescription">
        <h1 className="siTitle">Apartamentos no Talatona</h1>
        <span className="siDistance">2km do Centro da Cidade</span>
        <span className="siTaxiOp">Táxi gratuíto do aeroporto</span>
        <span className="siSubtitle">
            Apartamento com Ar condicionado
        </span>
        <span className="siFeatures">
            Uma sala de 21m²,  2 quartos, 1 banheiro,  duas camas completas e 1 blich
        </span>
        <span className="siCancelOp">Cancelamento gratuíto</span>
        <span className="siCancelOpSubtitle">
        você pode cancelar mais tarde, então garanta hoje por esse ótimo preço.
        </span>
       </div>
       <div className="siDetails">
        <div className="siRating">
            <span>Excelente</span>
            <button>9.8</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$123</span>
            <span className="siTexOp">Inclui impostos e taxas</span>
            <button className="siCheckButton">Ver disponibilidade</button>
        </div>
       </div>
    </div>
  )
}

export default SearchItem