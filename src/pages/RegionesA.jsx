import { useState } from "react"
import { Tooltip } from 'react-tooltip';

import InfoRegiones from "../components/ui/alert/InfoRegiones";

const Regiones = (props) => {


    const regiones = [
        {
            image: "",
            title: "Confluencia",
            description: `
            <p><strong>La Región Confluencia</strong> incluye parte del Departamento Confluencia y los gobiernos locales de:</p>
<ul>
    <li>
1ra categoría: Centenario, Neuquén, Plottier y Senillosa</li>
<li>2da categoría: Villa El Chocón y Vista Alegre</li>`,
            fill: "#D7F1EB",
            stroke: "none",
            d: "M2.51 2.32c-.06-.17-.02-.1-.1-.16-.03-.02-.07-.06-.1-.09-.07-.05-.06-.02-.04.02v.02c.01.01-.03 0-.06.01-.04.01-.08-.04-.11-.07-.03 0-.13.1-.16.13l.14.14v.01l-.09.09-.12.12.01.01.03.03.07.07v-.01h.01c.01-.02.08-.04.12-.07v-.01c-.04-.04.12-.13.18-.15.04-.02.01-.01.03-.03.04-.02.15-.01.18-.01.05.01.02-.02.01-.05z",

            //d: "M1.2.96V.95c-.01 0-.01-.01-.01-.01h-.01V.93s-.01 0-.01-.01c0-.15.01-.3.01-.46V.41h-.01s0-.01-.01-.01V.39C1.13.34 1.05.24 1.07.22V.21c-.01 0-.01-.05-.01-.05V.15h-.01V.14h-.02v.01C.97.19.95.12.94.06.92-.04.83 0 .79.06.77.08.75.1.77.13v.01C.8.2.75.22.71.24.67.25.68.16.6.26.59.28.57.3.54.3S.51.28.53.34C.55.4.55.49.52.5.43.5.45.52.45.64v.09c.01.03.05.1.02.11C.46.85.46.84.46.86.47.91.47.9.44.94.42.97.4.96.42.99c.05.06.06.22.01.26v.04c-.01.02-.01.01 0 .03.06.09.15.37.19.45 0 0 .06.03.06.04.03.03.07 0 .1-.02.02-.02.06-.02.06.01v.01h.44c.01-.02.08-.01.11 0h.01c-.01-.01 0-.03 0-.04v-.01c.01-.06-.09-.23-.09-.3l.01-.01c0-.01-.02-.11-.03-.14 0-.01.01-.03-.01-.03-.13-.02-.15-.2-.08-.32z",
            url: "A"
        },
        {
            image: "",
            title: "Limay Medio",
            description: `<p><strong>La Región Limay Medio</strong> incluye a los Departamentos de Collón Curá y Picún Leufú. Los gobiernos locales incluidos son:</p>
                            <ul>
                                <li>
                                2da categoría: Picún Leufú y Piedra del Águila,</li>
                            <li>Comisión de Fomento: El Sauce, Paso Aguerre y Santo Tomás</li>
                        <p>Puede consultar la ficha de caracterización regional haciendo clic <strong style="color: blue;"><a target="_blank" href="https://www.copade.gob.ar/wp-content/uploads/2024/06/Ficha-REGION-LIMAY-MEDIO.pdf">aquí</a></strong></p>`,
            fill: "#519B8D",
            strokeMiterlimit: 1,
            strokeWidth: 1,
            d: "M1.69 2.93l0 0c0,0 0.01,0 0.01,0 -0.01,-0.02 -0.01,-0.04 0.01,-0.05 0,0 0,0 0,0 0.05,-0.02 0.1,-0.07 0.15,-0.06 0.01,0 0.03,0 0.03,-0.01 0.02,-0.02 0.06,-0.09 0.09,-0.09l0.02 -0.02 0 0c0,0 0,0 0,0l-0.02 -0.02 -0.02 -0.02 -0.07 -0.07 -0.02 -0.02 -0.08 -0.09 -0.08 -0.07 -0.05 0.05 -0.16 0.15c-0.01,0.01 -0.02,0.01 -0.03,0l-0.04 -0.05 -0.2 0.19 0.12 0.12c0,0 0,0.01 0,0.01 0,0.01 0,0.01 0,0.02l-0.21 0.19c-0.01,0.01 -0.02,0.01 -0.03,0l-0.09 -0.1 -0.13 0.12 -0.04 0.04 -0.01 0.02c-0.01,0 -0.02,0 -0.03,-0.01l-0.02 -0.01 -0.01 0.01c-0.03,0.03 -0.06,-0.04 -0.07,0.02 0,0.04 0.01,0.11 0.03,0.13 0.03,0.04 0.09,0.12 0.08,0.14 0.01,0.03 -0.04,0.14 0.03,0.2l0 0c0,0 0,0 0,0l0.01 0.01 0 0c0.01,0.01 0.04,-0.01 0.06,0 0.07,0.01 0.04,0.03 0.1,0.01 0.06,-0.03 0.08,-0.03 0.17,-0.11 0,-0.01 0,0 0,-0.02 0.01,-0.04 0,-0.04 0,-0.08 0,0 0,0 0,0l0 0c0,-0.02 0.04,-0.05 0.05,-0.07 0.01,-0.01 0.02,-0.01 0,-0.03 -0.06,-0.08 0.04,-0.19 0.11,-0.22 0.03,-0.03 0.34,-0.21 0.34,-0.21z",

            //d: "M.07 3.73c-.01.05.01 0 .01.03 0 .09-.05.08-.08.14v.01c.02.03.07.11.07.16.01.03-.01.02-.02.03 0 .01.02.03.03.03v.01-.01c.02-.01.13.01.17 0 .01-.01.01 0 .03 0 .05.02.14.07.18.05h.01c0-.01.1-.1.1-.1.02-.02.03-.02-.02-.09-.02-.02-.05-.11 0-.12.02 0 .02 0 .05-.03.03-.05.15-.13.19-.1.01.01.02.01.04 0 .02-.03.05-.05.06-.05 0-.01 0-.01-.01-.01s-.01.01-.02.01v-.01H.85c-.11-.11-.01-.19-.06-.26-.02-.02-.1-.13-.09-.16 0-.05-.03-.16-.03-.16s-.08-.04-.02-.07v-.01c0-.03.03-.04-.01-.04-.02.01-.02-.03-.01-.05 0-.01-.02-.02-.02-.02-.01-.04.01-.05-.02-.04-.04-.04-.1.01-.12 0-.01-.01 0-.02-.02-.04-.01-.01-.04-.01-.07 0-.01 0-.02.01-.03 0-.02-.01-.02-.01-.05-.02v.01s-.05.04-.05.05c.01 0 .01 0 .01.01.02-.01.04.02.03.04-.01.04-.07.08-.09.05-.05-.06-.09-.04-.05.13.08.03.05.21 0 .26-.06.06-.1-.03-.05.13l.01.01c.15.05.02.17 0 .15-.03-.03-.03-.02-.04.01v.07z",
            url: "url('https://www.copade.gob.ar/')"

        },
        {
            image: "",
            title: "Norte",
            description: `<p><strong>La Región Norte</strong> incluye a los Departamentos de Chos Malal, Loncopué, Minas y Ñorquín. Los gobiernos locales de la Región son:</p>
                            <ul>
                            <li>1ra categoría: Chos Malal</li>
                            <li>2da categoría: Andacollo, Las Ovejas y Loncopué</li>
                            <li>3ra categoría: Caviahue - Copahue, El Cholar, El Huecú, Huinganco, Los Miches, Taquimilán y Tricao Malal</li>
                            <li>Comisión de Fomento: Coyuco – Cochico,  Chorriaca, Guañacos, Manzano Amargo, Varvarco - Invernada Vieja, Villa Curi Leuvú y Villa del Nahueve.</li>
                            </ul>
                            <p>Puede consultar la ficha de caracterización regional haciendo clic <strong style="color: blue;"><a target="_blank" href="https://www.copade.gob.ar/wp-content/uploads/2024/05/Ficha-REGION-NORTE.pdf">aquí</a></strong></p>`,
            fill: "#C0A483",
            stroke: "none",
            d: "M1.2.96V.95c-.01 0-.01-.01-.01-.01h-.01V.93s-.01 0-.01-.01c0-.15.01-.3.01-.46V.41h-.01s0-.01-.01-.01V.39C1.13.34 1.05.24 1.07.22V.21c-.01 0-.01-.05-.01-.05V.15h-.01V.14h-.02v.01C.97.19.95.12.94.06.92-.04.83 0 .79.06.77.08.75.1.77.13v.01C.8.2.75.22.71.24.67.25.68.16.6.26.59.28.57.3.54.3S.51.28.53.34C.55.4.55.49.52.5.43.5.45.52.45.64v.09c.01.03.05.1.02.11C.46.85.46.84.46.86.47.91.47.9.44.94.42.97.4.96.42.99c.05.06.06.22.01.26v.04c-.01.02-.01.01 0 .03.06.09.15.37.19.45 0 0 .06.03.06.04.03.03.07 0 .1-.02.02-.02.06-.02.06.01v.01h.44c.01-.02.08-.01.11 0h.01c-.01-.01 0-.03 0-.04v-.01c.01-.06-.09-.23-.09-.3l.01-.01c0-.01-.02-.11-.03-.14 0-.01.01-.03-.01-.03-.13-.02-.15-.2-.08-.32z",

            //d: "M1.69 2.93l0 0c0,0 0.01,0 0.01,0 -0.01,-0.02 -0.01,-0.04 0.01,-0.05 0,0 0,0 0,0 0.05,-0.02 0.1,-0.07 0.15,-0.06 0.01,0 0.03,0 0.03,-0.01 0.02,-0.02 0.06,-0.09 0.09,-0.09l0.02 -0.02 0 0c0,0 0,0 0,0l-0.02 -0.02 -0.02 -0.02 -0.07 -0.07 -0.02 -0.02 -0.08 -0.09 -0.08 -0.07 -0.05 0.05 -0.16 0.15c-0.01,0.01 -0.02,0.01 -0.03,0l-0.04 -0.05 -0.2 0.19 0.12 0.12c0,0 0,0.01 0,0.01 0,0.01 0,0.01 0,0.02l-0.21 0.19c-0.01,0.01 -0.02,0.01 -0.03,0l-0.09 -0.1 -0.13 0.12 -0.04 0.04 -0.01 0.02c-0.01,0 -0.02,0 -0.03,-0.01l-0.02 -0.01 -0.01 0.01c-0.03,0.03 -0.06,-0.04 -0.07,0.02 0,0.04 0.01,0.11 0.03,0.13 0.03,0.04 0.09,0.12 0.08,0.14 0.01,0.03 -0.04,0.14 0.03,0.2l0 0c0,0 0,0 0,0l0.01 0.01 0 0c0.01,0.01 0.04,-0.01 0.06,0 0.07,0.01 0.04,0.03 0.1,0.01 0.06,-0.03 0.08,-0.03 0.17,-0.11 0,-0.01 0,0 0,-0.02 0.01,-0.04 0,-0.04 0,-0.08 0,0 0,0 0,0l0 0c0,-0.02 0.04,-0.05 0.05,-0.07 0.01,-0.01 0.02,-0.01 0,-0.03 -0.06,-0.08 0.04,-0.19 0.11,-0.22 0.03,-0.03 0.34,-0.21 0.34,-0.21z",
            url: "url(#a)"
        },
        {
            image: "",
            title: "Sur",
            description: `<p><strong>La Región Sur</strong> incluye los Departamentos de Catán Lil, Huiliches, Lácar y Los Lagos.  Del Departamento Catán Lil, sólo incluye la localidad de Pilo Lil. Los gobiernos locales circunscriptos en esta Región son:</p>
<ul>
    <li>
1ra categoría: Junín de los Andes, San Martín de los Andes, Villa La Angostura</li>
<li>Comisión de Fomento: Pilo Lil y Villa Traful.</li>
    <p>Puede consultar la ficha de caracterización regional haciendo clic <strong style="color: blue;"><a target="_blank" href="https://www.copade.gob.ar/wp-content/uploads/2024/06/CATALOGO-CARTOGRAFIA-REGIONAL-Region-SUR.pdf">aquí</a></strong></p>
`,
            fill: "#FF5389",
            stroke: "none",
            d: "M.07 3.73c-.01.05.01 0 .01.03 0 .09-.05.08-.08.14v.01c.02.03.07.11.07.16.01.03-.01.02-.02.03 0 .01.02.03.03.03v.01-.01c.02-.01.13.01.17 0 .01-.01.01 0 .03 0 .05.02.14.07.18.05h.01c0-.01.1-.1.1-.1.02-.02.03-.02-.02-.09-.02-.02-.05-.11 0-.12.02 0 .02 0 .05-.03.03-.05.15-.13.19-.1.01.01.02.01.04 0 .02-.03.05-.05.06-.05 0-.01 0-.01-.01-.01s-.01.01-.02.01v-.01H.85c-.11-.11-.01-.19-.06-.26-.02-.02-.1-.13-.09-.16 0-.05-.03-.16-.03-.16s-.08-.04-.02-.07v-.01c0-.03.03-.04-.01-.04-.02.01-.02-.03-.01-.05 0-.01-.02-.02-.02-.02-.01-.04.01-.05-.02-.04-.04-.04-.1.01-.12 0-.01-.01 0-.02-.02-.04-.01-.01-.04-.01-.07 0-.01 0-.02.01-.03 0-.02-.01-.02-.01-.05-.02v.01s-.05.04-.05.05c.01 0 .01 0 .01.01.02-.01.04.02.03.04-.01.04-.07.08-.09.05-.05-.06-.09-.04-.05.13.08.03.05.21 0 .26-.06.06-.1-.03-.05.13l.01.01c.15.05.02.17 0 .15-.03-.03-.03-.02-.04.01v.07z",

            //d: "M2.51 2.32c-.06-.17-.02-.1-.1-.16-.03-.02-.07-.06-.1-.09-.07-.05-.06-.02-.04.02v.02c.01.01-.03 0-.06.01-.04.01-.08-.04-.11-.07-.03 0-.13.1-.16.13l.14.14v.01l-.09.09-.12.12.01.01.03.03.07.07v-.01h.01c.01-.02.08-.04.12-.07v-.01c-.04-.04.12-.13.18-.15.04-.02.01-.01.03-.03.04-.02.15-.01.18-.01.05.01.02-.02.01-.05z",
            url: "https://www.copade.gob.ar/wp-content/uploads/2024/06/CATALOGO-CARTOGRAFIA-REGIONAL-Region-SUR.pdf"
        },
        {
            image: "",
            title: "Vaca Muerta",
            description: `
            <p><strong>La Región Vaca Muerta</strong> incluye los Departamentos de Añelo y Pehuenches. Los gobiernos locales incluidos en esta Región son 8:</p>
<ul>
    <li>
<li>1ra categoría: Rincón de los Sauces y San Patricio del Chañar.</li>
<li>2da categoría:  Añelo, Buta Ranquil.</li>
<li>3ra categoría: Barrancas.</li>
<li>Comisión de Fomento: Aguada San Roque, Los Chihuidos y Octavio Pico.</li>`,
            fill: "#9E44B2",
            stroke: "none",
            d: "M1.2.45h.01c0 .01.01.01.02.02l.02.02c.01.01.01.02.02.02.02.03.04.06.07.08h.01V.6c.02 0 .02 0 .02.01-.01.01-.02.02-.02.04 0 .04.01.07.03.1 0 0 .01.02.02.02.11.13.31.06.31.07.04.02.11.05.15.07v.01c-.04.1.14.15.18.11 0 0 .01 0 .01-.01.02 0 .04.03.04.05 0 0 .22.14.27.12.01 0 .02 0 .03.01h.01l-.01.9c-.01-.01-.12-.08-.12-.08-.02-.01-.12-.12-.16-.14-.06-.02-.02-.04-.11-.02-.03 0-.07.07-.09.1-.03.06-.13.09-.15.1-.01.01-.01 0-.01 0-.01-.02-.05-.01-.06 0-.02-.02-.03-.02-.04-.03-.01-.01-.01-.02-.01-.03 0-.03-.02-.04-.07-.04a.58.58 0 0 1-.12-.1h-.01c-.04-.02-.02-.1-.02-.1 0-.09-.08-.25-.09-.3a.541.541 0 0 0-.03-.19v-.01c-.18-.02-.11-.26-.1-.28h.01c.01-.02.01-.03 0-.05L1.19.92c.01-.15.01-.3.01-.45V.45z",

            //d: "M1.94 1.95c-.01.05-.11.12-.17.13-.04.01-.02-.02-.06 0-.03.01-.13.11-.16.14l.12.12.05.05.08.08.05.05.13-.12.08-.07-.14-.14v-.02l.07-.07c.03-.03.09-.07.11-.07h.01c.05.03.07.07.09.06h.03c.02.01.03.01.01-.01-.02-.02.01-.05.01-.06-.02 0-.1-.11-.15-.12-.01 0-.02-.01-.02-.01-.02-.01-.01-.02-.03-.02-.02-.01-.04 0-.06.01-.02.02-.04.05-.05.07z",
            url: "url(#a)"
        },
        {
            image: "",
            title: "Centro Oeste",
            description: `
            <p><strong>La Región Centro Oeste</strong> incluye los departamentos de Aluminé, Cantán Lil, Picunches y Zapala. Los gobiernos locales incluidos en esta región son 12:</p>
    <ul>
        <li>1ra categoría: Zapala</li>
        <li>2da Categoría: Aluminé, Las Lajas, Mariano Moreno, Villa Pehuenia</li>
        <li>3ra Categoría: Bajada del Agrio, Las Coloradas</li>
        <li>Comisiones de fomento: Covunco Abajo, Los Catutos, Quili Malal, Los Catutos y Villa del Puente de Picún Leufú</li>
    </ul>
    <p>Puede consultar la ficha de caracterización regional haciendo clic <strong style="color: blue;"><a target="_blank" href="https://www.copade.gob.ar/wp-content/uploads/2024/06/Ficha-REGION-CENTRO-OESTE.pdf">aquí</a></strong></p>
`,
            fill: "#F4FF93",
            stroke: "none",
            d: "m1.49 2.6.15-.15.06-.05-.05-.05-.12-.12v-.01l.15-.15h-.01s-.02-.01-.03-.03c-.02-.02-.01-.02-.02-.04 0-.02-.02-.03-.05-.02a.581.581 0 0 1-.13-.1h-.01c-.02 0-.01-.04-.03-.05-.03-.01-.11-.02-.1.01l-.27-.01H.84C.83 1.84.81 1.79.8 1.8c-.02.03-.12.08-.14.02-.01 0-.05-.02-.06-.03l-.03-.06v.01c0 .03.02.17.02.19.01 0 .03.03.03.03.02.03.06.02.06.05.02.04-.03.16-.04.19v.01l-.01.01H.58s-.06.01-.12.04c0 .01-.14.1-.16.1v.01c0 .03.03.07.03.09 0 .03.03.22-.01.27-.02.03-.03 0-.02.06.02-.01.05.01.07.02.03-.01.07-.03.09 0 .01.01.01.03.04.03.03.01.08-.02.1.01.01-.01.02-.01.02 0 .01 0 0 .04.01.05.01 0 .01.01.01.03 0 0-.01.05.02.04.02-.01.02 0 .01.02v.02c0 .01.01.02.01.03-.04.01-.06.03 0 .04 0 .01.01.03.01.04 0 .02.01.02.02.01.02 0 .04-.01.06.02l.02-.02c0-.01.01-.01.01 0l.03.02.05-.05.13-.13h.01l.11.11.05-.05.16-.15-.12-.12c-.01 0-.01 0-.01-.01h.01l.08-.09.12-.12h.02l.05.06z",

            //d: "M1.2.45h.01c0 .01.01.01.02.02l.02.02c.01.01.01.02.02.02.02.03.04.06.07.08h.01V.6c.02 0 .02 0 .02.01-.01.01-.02.02-.02.04 0 .04.01.07.03.1 0 0 .01.02.02.02.11.13.31.06.31.07.04.02.11.05.15.07v.01c-.04.1.14.15.18.11 0 0 .01 0 .01-.01.02 0 .04.03.04.05 0 0 .22.14.27.12.01 0 .02 0 .03.01h.01l-.01.9c-.01-.01-.12-.08-.12-.08-.02-.01-.12-.12-.16-.14-.06-.02-.02-.04-.11-.02-.03 0-.07.07-.09.1-.03.06-.13.09-.15.1-.01.01-.01 0-.01 0-.01-.02-.05-.01-.06 0-.02-.02-.03-.02-.04-.03-.01-.01-.01-.02-.01-.03 0-.03-.02-.04-.07-.04a.58.58 0 0 1-.12-.1h-.01c-.04-.02-.02-.1-.02-.1 0-.09-.08-.25-.09-.3a.541.541 0 0 0-.03-.19v-.01c-.18-.02-.11-.26-.1-.28h.01c.01-.02.01-.03 0-.05L1.19.92c.01-.15.01-.3.01-.45V.45z",
            url: "url(#a)"
        },
        {
            image: "",
            title: "Comarca Petrolera",
            description: `<p><strong>La Región Comarca Petrolera</strong> incluye parte del Departamento Confluencia y 3 gobiernos locales:</p>
<ul>
    <li>
1ra categoría: Cutral Có y Plaza Huincul.</li>
<li>Comisión de Fomento: Sauzal Bonito.</li>
</ul>
    <p>Puede consultar la ficha de caracterización regional haciendo clic <strong style="color: blue;"><a target="_blank" href="https://www.copade.gob.ar/wp-content/uploads/2024/05/Ficha-REGION-COMARCA-PETROLERA.pdf">aquí</a></strong></p>`,
            fill: "#FF9029",
            stroke: "none",
            d: "M1.94 1.95c-.01.05-.11.12-.17.13-.04.01-.02-.02-.06 0-.03.01-.13.11-.16.14l.12.12.05.05.08.08.05.05.13-.12.08-.07-.14-.14v-.02l.07-.07c.03-.03.09-.07.11-.07h.01c.05.03.07.07.09.06h.03c.02.01.03.01.01-.01-.02-.02.01-.05.01-.06-.02 0-.1-.11-.15-.12-.01 0-.02-.01-.02-.01-.02-.01-.01-.02-.03-.02-.02-.01-.04 0-.06.01-.02.02-.04.05-.05.07z",

            //d: "m1.49 2.6.15-.15.06-.05-.05-.05-.12-.12v-.01l.15-.15h-.01s-.02-.01-.03-.03c-.02-.02-.01-.02-.02-.04 0-.02-.02-.03-.05-.02a.581.581 0 0 1-.13-.1h-.01c-.02 0-.01-.04-.03-.05-.03-.01-.11-.02-.1.01l-.27-.01H.84C.83 1.84.81 1.79.8 1.8c-.02.03-.12.08-.14.02-.01 0-.05-.02-.06-.03l-.03-.06v.01c0 .03.02.17.02.19.01 0 .03.03.03.03.02.03.06.02.06.05.02.04-.03.16-.04.19v.01l-.01.01H.58s-.06.01-.12.04c0 .01-.14.1-.16.1v.01c0 .03.03.07.03.09 0 .03.03.22-.01.27-.02.03-.03 0-.02.06.02-.01.05.01.07.02.03-.01.07-.03.09 0 .01.01.01.03.04.03.03.01.08-.02.1.01.01-.01.02-.01.02 0 .01 0 0 .04.01.05.01 0 .01.01.01.03 0 0-.01.05.02.04.02-.01.02 0 .01.02v.02c0 .01.01.02.01.03-.04.01-.06.03 0 .04 0 .01.01.03.01.04 0 .02.01.02.02.01.02 0 .04-.01.06.02l.02-.02c0-.01.01-.01.01 0l.03.02.05-.05.13-.13h.01l.11.11.05-.05.16-.15-.12-.12c-.01 0-.01 0-.01-.01h.01l.08-.09.12-.12h.02l.05.06z",
            url: "https://www.copade.gob.ar/wp-content/uploads/2024/05/Ficha-REGION-COMARCA-PETROLERA.pdf"
        },
    ]

    const [region, setRegion] = useState(null);


    const cambiarRegion = (index) => {
        setRegion(regiones[index])
    }




    return (
        <>

            <Tooltip
                delayShow={500}
                border="1px solid black"
                float={true}
                anchorSelect=".my-anchor-element"
                style={{ backgroundColor: "white" }}
                //openOnClick={1}

                content={
                    <InfoRegiones region={region} />
                }
            />

            <div className="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlSpace="preserve"
                    width={270}
                    height={447}
                    stroke="#000"
                    strokeLinecap="square"
                    strokeMiterlimit={10}
                    colorInterpolation="auto"
                    fontFamily="'Dialog'"
                    fontSize={12}
                    viewBox="0 0 2.53 4.19"
                //viewBox="0 0 4 6"
                >
                    <style>
                        {`
             
        .fill-blue-500 {
          fill: #3b82f6;
        }
        .transition-transform {
          transition: transform 0.3s;
        }
        .transform {
          transform-origin: center;
          opacity: 0.8;
        }
        .hover\\:scale-110:hover {
          transform: scale(1.1);
        }
        .hover\\:opacity:hover {
        opacity: 1;
        }

      
      `}
                    </style>
                    <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                            <path d="M0 0h610v768H0V0Z" />
                        </clipPath>
                    </defs>

                    <g
                        strokeLinecap="butt"
                        strokeLinejoin="bevel"
                        strokeMiterlimit={1}
                        strokeWidth={0}
                        textRendering="optimizeLegibility"
                    >
                        {regiones.map((val, index) => {
                            return (
                                <path
                                    key={index}
                                    className="transition-transform transform hover:scale-105 my-anchor-element"
                                    onMouseEnter={() => cambiarRegion(index)}
                                    fill={val.fill}
                                    strokeMiterlimit={1}
                                    strokeWidth={0}
                                    d={val.d}
                                    clipPath={val.clipPath}
                                />
                            )
                        })}


                    </g>
                </svg>
            </div>
        </>
    )
}
export default Regiones
