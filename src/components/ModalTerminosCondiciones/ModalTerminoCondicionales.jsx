import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

function ModalTerminoCondicionales({ terms, setTerms }) {
  function openModal() {
    const modal = document.querySelector(".modal");
    const overlay = document.getElementById("overlay-modal");
    if (modal == null) return "no hay modal";
    modal.style.display = "block";
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal() {
    const modal = document.querySelector(".modal");
    const overlay = document.getElementById("overlay-modal");
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }

  const deactivateOpoUp = () => {
    setTerms(!terms);
    closeModal();
  };

  const activarPopUp = () => {
    const openModalTarget = document.querySelectorAll("[data-modal-target]");
    openModalTarget.forEach((button) => {
      button.addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        openModal(modal);
      });
    });
  };

  if (terms) {
    ///openModal();
    activarPopUp();
  }

  return (
    <>
      <div className="modal active modal-container-scroll" id="modal">
        <div className="modal-header">
          <button
            className="bt-close-modal"
            data-close-button="close-button"
            onClick={deactivateOpoUp}
          >
            &times;
          </button>
        </div>
        <div className="modal-container-scroll">
          <div className="modal-title-header">
            <div className="title">Términos y condiciones</div>
            <div>
              <i>
                <FontAwesomeIcon icon={faPrint} />
              </i>{" "}
              Imprimir
            </div>
          </div>
          <div className="modal-body ">
            <h1>TÉRMINOS Y CONDICIONES</h1>
            <p>
              Estos son los términos y condiciones por los cuales se regirá el
              uso de los servicios prestados por LegalApp por medio de la página
              web www.LegalApp.org y sus respectivas sedes y plataformas
              complementarias.
            </p>
            <p>
              Se entiende que cuando una persona se registra o hace uso de
              nuestra plataforma o decide hacer uso de nuestros servicios acepta
              los términos y condiciones a los que se refiere este documento, de
              acuerdo con lo señalado a continuación:
            </p>
            <p>
              LegalApp ofrece a todas las personas mayores de edad, por medio de
              su página, asesoría, documentos y guías de naturaleza legal.
            </p>
            <p>
              Sólo se entenderá celebrado un contrato de prestación de servicios
              jurídicos cuando haya una cotización para un servicio específico y
              concreto y dicha cotización sea debidamente aceptada. El valor del
              servicio depende de las necesidades y complejidades de cada
              cliente específico.{" "}
            </p>

            <p>
              Cuando se compren documentos en línea, LegalApp no tendrá ninguna
              responsabilidad por el uso que se le dé a ese documento. El precio
              de los documentos es el que está señalado expresamente en la
              página web.
            </p>

            <p>
              Sólo podrán hacer uso de nuestra plataforma web los colombianos o
              extranjeros mayores de edad y con capacidad de contratar
              directamente sin intervención de terceros o acudientes.
            </p>

            <p>
              Se entiende que cualquier persona que use los servicios y
              herramientas otorgadas por LegalApp está inequívocamente
              autorizando el tratamiento de sus datos personales para fines
              empresariales y comerciales por parte de LegalApp.
            </p>

            <p>
              Las respuestas dadas por los asesores en línea de LegalApp no
              constituyen conceptos jurídicos ni recomendaciones profesionales
              integrales, sino simples guías basadas en la información
              previamente entregada por el cliente respectivo, la cual se
              presumirá verdadera con base en el principio de buena fe.
            </p>

            <p>
              LegalApp se reserva el derecho a no contestar algunas consultas.
              Especialmente, no resolverá ninguna consulta que trate sobre los
              siguientes puntos:
            </p>
            <p>
              Trabajos, talleres o investigaciones académicas de cualquier
              carrera.
            </p>

            <p>Asuntos políticos.</p>
            <p>Cuestionamientos religiosos.</p>
            <p>
              Consultas realizadas con datos falsos o aquellas donde se omita
              algún tipo de información requerida por el formulario.
            </p>
            <p>
              Consultas que incluyan groserías, insultos, amenazas o
              discriminación.
            </p>
            <p>
              Consultas que afecten la vida, integridad o dignidad de otra
              personas, con especial consideración a menores de edad, mujeres,
              grupos étnicos o adultos mayores.
            </p>
            <p>
              Cualquier otra que no cumpla con unos estándares mínimos de
              integridad, respeto y veracidad.
            </p>

            <p>
              LegalApp sólo será responsable por la calidad de los servicios
              directamente prestados por esta organización. Cualquier servicio
              prestado por un abogado o una abogada independiente lo hará
              responsable exclusivamente a él o a ella. En ningún caso LegalApp
              será responsable por daños y perjuicios frente al cliente por
              cuestiones no imputables a dicha organización.
            </p>

            <p>
              Los clientes deberán pagar por cada servicio prestado por
              LegalApp, cobrado a través de la página web o por fuera de ella,
              salvo lo explícitamente gratuito.
            </p>

            <p>
              Todo el contenido de LegalApp como bases de datos, código fuente y
              documentos que hacen parte de la plataforma son en su totalidad
              propiedad de LegalApp. El uso indebido, alteración, modificación,
              reproducción total o parcial de dichos contenidos queda prohibido
              salvo autorización específica, clara, expresa y escrita por parte
              de LegalApp.
            </p>

            <p>
              LegalApp se reserva el derecho de dar de baja y bloquear la IP a
              aquellos usuarios que violen nuestros términos y condiciones o que
              no acepten nuestra política de privacidad.
            </p>

            <p>
              LegalApp no se hace responsable por los daños, perjuicios o
              pérdidas al usuario causados por fallas en el sistema, en el
              servidor o en la red de internet que pudiera afectar su equipo
              como consecuencia del uso de la plataforma www.LegalApp.org.
            </p>
            <p>
              LegalApp no garantiza el acceso y uso continuado o ininterrumpido
              de la plataforma www.LegalApp.org. El sistema puede eventualmente
              no estar disponible debido a dificultades técnicas o fallas de
              internet, o por cualquier otra circunstancia ajena a LegalApp; en
              caso de presentarse una falla en la plataforma se procurará
              restablecer la misma con la mayor celeridad posible sin que por
              ello pueda imputársele algún tipo de responsabilidad a la
              organización. LegalApp no será responsable por ningún error u
              omisión contenidos en su sitio web.
            </p>

            <p>
              En el momento en que el usuario decide usar los servicios de
              LegalApp está aceptando los términos y condiciones expuestos en el
              presente documento.
            </p>

            <p>
              Estos términos y condiciones en ningún momento crean sociedad,
              franquicia o relación laboral entre LegalApp y el usuario.
            </p>
            <p>
              Estos términos y condiciones estarán regidos en todos sus puntos
              por las leyes de la República de Colombia. Cualquier controversia
              derivada del presente acuerdo, su existencia, validez,
              interpretación, alcance o cumplimiento será sometida a la
              normatividad colombiana.
            </p>
          </div>
        </div>
        <button className="btn-cerrar-modal" onClick={deactivateOpoUp}>
          Cerrer
        </button>
      </div>
      <div id="overlay-modal"></div>
    </>
  );
}

export default ModalTerminoCondicionales;
