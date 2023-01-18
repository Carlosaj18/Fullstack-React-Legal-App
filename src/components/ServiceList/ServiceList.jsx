import React from 'react';
import Service from "../OurService/Service";

function serviceList(props) {
  return (
    <div className="container-services" style={props.styleCSS}>
      {props.service.map((item) => {
        return (
          <Service
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            key={item.id}
          />
        );
      })}
    </div>
  )
}

export default serviceList