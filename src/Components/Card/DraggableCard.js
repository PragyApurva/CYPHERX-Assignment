import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableCard = ({ cardDetails }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'CARD', cardDetails },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={drag} style={{ opacity }}>

      <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id">{cardDetails.id}</div>
        </div>
      </div>
    </div>
  );
};

export default DraggableCard;
