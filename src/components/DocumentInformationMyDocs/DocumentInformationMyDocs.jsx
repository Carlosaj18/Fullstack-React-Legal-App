import React, { useState } from "react";
import "./DocumentInformationMyDocs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function DocumentInformationMyDocs(props) {
  const { document } = props;
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [color4, setColor4] = useState(false);

  function handleClick(inicial, seteado) {
    seteado(!inicial);
  }

  function handleClickColorBackground(inicial, seteado) {
    seteado(!inicial);
  }

  let dataClausulas =
    document.clausulas !== undefined
      ? document.clausulas.map((item) => {
          return (
            <div
              className={
                active1
                  ? "container-flex-cards-my-documents"
                  : "container-none-cards-my-documents"
              }
            >
              <div
                className={
                  color1 ? "card-my-document-background" : "card-my-document"
                }
              >
                <button
                  onClick={() => handleClickColorBackground(color1, setColor1)}
                >
                  <div className="card-content-flex-my-documents">
                    <div className="header-card-my-documents">
                      <div className="header-flex-row-my-documents">
                        <div className="header-flex-color-alert"></div>
                        <div>{item}</div>
                      </div>
                    </div>
                    <div className="info-card-my-documents">
                    Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </div>
                  </div>
                </button>
              </div>
            </div>
          );
        })
      : null;

  return (
    <div className="container-information-my-documents">
      <h1 className="title-vista-detallada-my-documents">{document.title}</h1>
      <div className="container-cards-info-my-documents">
        <div className="cards-my-documents">
          <button onClick={() => handleClick(active2, setActive2)}>
            <div className="card-info-my-documents">
              <div className="card-info-my-documents-flex">
                <div className="card-info-title-my-document-flex">Partes</div>
                <span className="card-info-my-documents-total-number">2</span>
              </div>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={
                  active2
                    ? "icon-display-doc-my-documents-rotate"
                    : "icon-display-doc-my-documents "
                }
              />
            </div>
          </button>
          <div
            className={
              active2
                ? "container-flex-cards-my-documents"
                : "container-none-cards-my-documents"
            }
          >
            <div
              className={
                color2 ? "card-my-document-background" : "card-my-document"
              }
            >
              <button
                onClick={() => handleClickColorBackground(color2, setColor2)}
              >
                <div className="card-content-flex-my-documents">
                  <div className="header-card-my-documents">
                    <div className="header-flex-row-my-documents">
                      <div className="header-flex-color-alert"></div>
                      <div>
                        Valentina Martinez
                      </div>
                    </div>
                  </div>
                  <div className="info-card-my-documents">
                  Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div
            className={
              active2
                ? "container-flex-cards-my-documents"
                : "container-none-cards-my-documents"
            }
          >
            <div
              className={
                color2 ? "card-my-document-background" : "card-my-document"
              }
            >
              <button
                onClick={() => handleClickColorBackground(color2, setColor2)}
              >
                <div className="card-content-flex-my-documents">
                  <div className="header-card-my-documents">
                    <div className="header-flex-row-my-documents">
                      <div className="header-flex-color-alert"></div>
                      <div>
                        Carlos Alberto Jaramillo Portilla
                      </div>
                    </div>
                  </div>
                  <div className="info-card-my-documents">
                  Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="cards-my-documents">
          <button onClick={() => handleClick(active1, setActive1)}>
            <div className="card-info-my-documents">
              <div className="card-info-my-documents-flex">
                <div className="card-info-title-my-document-flex">
                  Clausulas
                </div>
                <span className="card-info-my-documents-total-number">
                  {document.clausulas !== undefined
                    ? document.clausulas.length
                    : 0}
                </span>
              </div>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={
                  active1
                    ? "icon-display-doc-my-documents-rotate"
                    : "icon-display-doc-my-documents "
                }
              />
            </div>
          </button>
          {active1 && dataClausulas}
        </div>
        <div className="cards-my-documents">
          <button onClick={() => handleClick(active3, setActive3)}>
            <div className="card-info-my-documents">
              <div className="card-info-my-documents-flex">
                <div className="card-info-title-my-document-flex">Firmado</div>
                <span className="card-info-my-documents-total-number">
                  {document.signatures}
                </span>
              </div>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={
                  active3
                    ? "icon-display-doc-my-documents-rotate"
                    : "icon-display-doc-my-documents "
                }
              />
            </div>
          </button>
          <div
            className={
              active3
                ? "container-flex-cards-my-documents"
                : "container-none-cards-my-documents"
            }
          >
            <div
              className={
                color3 ? "card-my-document-background" : "card-my-document"
              }
            >
              <button
                onClick={() => handleClickColorBackground(color3, setColor3)}
              >
                <div className="card-content-flex-my-documents">
                  <div className="header-card-my-documents">
                    <div className="header-flex-row-my-documents">
                      <div className="header-flex-color-alert"></div>
                      <div>
                        El documento fue firmado por ultima vez el{" "}
                        {document.date}
                      </div>
                    </div>
                  </div>
                  <div className="info-card-my-documents">
                  Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="cards-my-documents">
          <button onClick={() => handleClick(active4, setActive4)}>
            <div className="card-info-my-documents">
              <div className="card-info-my-documents-flex">
                <div className="card-info-title-my-document-flex">
                  Radicacion
                </div>
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="icon-check-radicacion"
                  />
                </span>
              </div>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={
                  active4
                    ? "icon-display-doc-my-documents-rotate"
                    : "icon-display-doc-my-documents "
                }
              />
            </div>
          </button>
          <div
            className={
              active4
                ? "container-flex-cards-my-documents"
                : "container-none-cards-my-documents"
            }
          >
            <div
              className={
                color4 ? "card-my-document-background" : "card-my-document"
              }
            >
              <button
                onClick={() => handleClickColorBackground(color4, setColor4)}
              >
                <div className="card-content-flex-my-documents">
                  <div className="header-card-my-documents">
                    <div className="header-flex-row-my-documents">
                      <div className="header-flex-color-alert"></div>
                      <div>El documento fue radicado el {document.date}</div>
                    </div>
                  </div>
                  <div className="info-card-my-documents">
                  Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentInformationMyDocs;
