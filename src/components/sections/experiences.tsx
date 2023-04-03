import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WavesWhite from "../waves/wavesWhite";

const Experiences = () => {
  return (
    <div className="relative" id="experiences">
      <div className="mt-8 text-black ">
        <p className="text-3xl font-bold px-8 py-14 text-white">Experiências</p>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: "#1C1C1C", color: "#fff" }}
            className="vertical-timeline-element "
            date="01/2022 - 03/2022"
            iconStyle={{ background: "#00BCD4", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Estágio Desenvolvedor Fullstack
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mcb Consulting
            </h4>
            <p>
              Responsável por desenvolver e manter aplicações web usando
              tecnologias como ReactJS, NodeJS e MySQL.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="06/2022 - 04/2023"
            iconStyle={{ background: "#CDDC39", color: "#fff" }}
            contentStyle={{ background: "#1C1C1C", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Estágio Desenvolvedor Fullstack
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Carbonext</h4>
            <p>
              Responsável por auxiliar o time de tecnologia na criação de novos
              portais, aplicativos, sites e integrações de API, utilizando
              NextJS e NodeJS, testes unitários usando Playwright, automações
              com Python, e bots utilizando dotnet.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="??/???? - ??/????"
            iconStyle={{ background: "green", color: "#fff" }}
            contentStyle={{ background: "#1C1C1C", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">????</h3>
            <h4 className="vertical-timeline-element-subtitle">?????</h4>
            <p>???????????</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div className="py-16">
        <WavesWhite />
      </div>
    </div>
  );
};

export default Experiences;
