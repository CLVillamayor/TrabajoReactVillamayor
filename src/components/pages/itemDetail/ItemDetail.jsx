import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import "./itemDetail.css";

const ItemDetail = ({ item, onAdd, totalItems }) => {
  return (
    <div className="item-detail-container">
      <div className="item-detail-info">
        <h1 className="item-detail-title">{item.title}</h1>
        <h2 className="item-detail-description">{item.description}</h2>
        <h2 className="item-detail-price">${item.price}</h2>
        <CounterContainer
          onAdd={onAdd}
          stock={item.stock}
          totalItems={totalItems}
        />
      </div>
      <div className="item-detail-image">
        <img src={item.imageUrl} alt={item.title} />
      </div>
    </div>
  );
};

export default ItemDetail;
