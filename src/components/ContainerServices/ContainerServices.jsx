import React from 'react';
import Service from '../Service/Service';
import '../ContainerServices/ContainerServices.css';

function ContainerServices() {
  return (
    <div className="container-services">
      < Service image="update-document.jpg" title="Document Updated" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
      < Service image="create-document.jpg" title="Document Creation" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
      < Service image="signe" title="Signing Documents" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
    </div>
  )
}

export default ContainerServices