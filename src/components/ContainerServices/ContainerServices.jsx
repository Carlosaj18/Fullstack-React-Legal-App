import React from 'react';
import Service from '../Service/Service';
import '../ContainerServices/ContainerServices.css';
import services from '../data/services';

function ContainerServices() {
  return (
    <div className="container-services">
      {services.map((item, i) => {
        return (
          <Service 
            title={item.title}
            description={item.description}
            key={i}
          />
        );
      })}
    </div>
  )
}

export default ContainerServices