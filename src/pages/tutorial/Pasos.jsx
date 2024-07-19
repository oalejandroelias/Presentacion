import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

import TutorialMenu from "../../layouts/TutorialMenu";

import sig1 from '../../../src/img/sig_1.png'

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const Pasos = () => {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "30px" }}>
            1 -Desplegamos el menú de capas
          </span>
        </Animator>
      </ScrollPage>

      <ScrollPage>

        <div
          style={{
            display: "relative",
            justifyContent: "center",
            alignItems: "center",
            margin: 100,
            height: "100%",

          }}
        >

          <Animator animation={batch(Zoom(0.5), Fade(), MoveOut(200, -200))}>
            <img
              className=""
              src={sig1}
              alt=""
            />

          </Animator>

        </div>

      </ScrollPage>

      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -400))}>
          <span style={{ fontSize: "30px" }}>Bienvenido al Gis de Copade</span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "40px" }}>Yo hice el visor ✨</span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "40px" }}>Juaquin hace los mapas ⛅️</span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <span style={{ fontSize: "40px" }}>
            <Animator animation={MoveIn(-1000, 0)}>Geoserver 👋🏻</Animator>
            <Animator animation={MoveIn(1000, 0)}>Openlayers</Animator>
            Sistema de información Geográfica
            <Animator animation={MoveOut(1000, 0)}>Javascript</Animator>
            <Animator animation={MoveOut(-1000, 0)}>Jquery 💛</Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "40px" }}>Información Territorial</span>
          <br />
          <span style={{ fontSize: "30px" }}>Gestión Juan Carrizo</span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Pasos;
