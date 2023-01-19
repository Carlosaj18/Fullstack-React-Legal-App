import React from "react";
import "./DocumentInformationMyDocs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function DocumentInformationMyDocs(props) {
  const { document } = props;

    function handleClick(){
        console.log("click")
    }

  return (
    <div className="container-information-my-documents">
      <h1 className="title-vista-detallada-my-documents">{document.title}</h1>
      <div className="container-cards-info-my-documents">
        <div className="cards-my-documents">
          <button onClick={handleClick}>
            <div className="card-info-my-documents">
              <div className="card-info-my-documents-flex">
                <div>Red Flag</div>
                <span className="card-info-my-documents-total-number">3</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
          </button>
        </div>
        <div className="cards-my-documents">
          <button>
            <div className="card-info-my-documents">
              <div className="card-info-my-documents-flex">
                <div>Red Flag</div>
                <span className="card-info-my-documents-total-number">3</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
          </button>
        </div>
        <div className="cards-my-documents">
          <button>
            <div className="card-info-my-documents">
              <div className="card-info-my-documents-flex">
                <div>Red Flag</div>
                <span className="card-info-my-documents-total-number">3</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DocumentInformationMyDocs;
