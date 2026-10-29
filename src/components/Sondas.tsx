import { useEffect, useState } from "react";
import {
  leerCsv,
  OBJETIVO,
  resumirSondas,
  ultimaTemperatura,
} from "../lib/datos";
import type { ResumenSonda } from "../lib/types";

//Tarjetitas que muestran el estado de cada sonda de pulpa
const TarjetaSonda = ({ sonda }: { sonda: ResumenSonda }) => {
  const faltan = (sonda.temp - OBJETIVO).toFixed(1);

  let borde = "border-l-alert";
  let etiqueta = "bg-alert-soft text-alert";
  let texto = `Faltan ${faltan} °C`;

  // si llegó o si no hay señal, cambia el color y el texto
  if (sonda.estado === "llego") {
    borde = "border-l-secondary";
    etiqueta = "bg-secondary-lighter text-secondary-darker";
    texto = "Llegó";
  } else if (sonda.estado === "sin-senal") {
    borde = "border-l-dark-four";
    etiqueta = "bg-light-three text-dark-three";
    texto = `Sin señal desde las ${sonda.hora}`;
  }

  return (
    <div
      className={`tarjeta-sonda flex flex-col gap-2 p-4 rounded-sm border border-dark-four border-l-4 bg-light-one ${borde}`}
    >
      <h5 className="text-dark-two text-sm">{sonda.nombre.toUpperCase()}</h5>
      <p className="text-4xl font-bold text-dark-one">
        {sonda.temp.toFixed(1)} °C
      </p>
      <span
        className={`self-start rounded-full px-3 py-1 text-xs font-medium ${etiqueta}`}
      >
        {texto}
      </span>
    </div>
  );
};

//Tarjeta que muestra el resultado final del proceso de enfriamiento
const Resultado = ({ sondas }: { sondas: ResumenSonda[] }) => {
  const llegaron = sondas.filter((s) => s.estado === "llego").length;
  const faltan = sondas.filter((s) => s.estado === "falta").length;
  const sinSenal = sondas.filter((s) => s.estado === "sin-senal").length;

  // las sondas vienen ordenadas, la primera es la más caliente
  const masCaliente = sondas[0];
  const todasLlegaron = faltan === 0 && sinSenal === 0;

  return (
    <section className="resultado overflow-hidden rounded-sm border border-dark-four bg-light-one">
      <div
        className={`resultado__respuesta flex items-center gap-6 px-6 py-6 md:px-10  ${todasLlegaron ? "bg-secondary-lighter text-secondary" : "bg-alert-soft text-alert"}`}
      >
        <h2 className="text-6xl md:text-8xl">{todasLlegaron ? "SÍ" : "NO"}</h2>
        <h2 className="text-2xl md:text-4xl">
          {todasLlegaron
            ? `Toda la fruta llegó a ${OBJETIVO.toFixed(1)} °C`
            : `La fruta no llegó a ${OBJETIVO.toFixed(1)} °C`}
        </h2>
      </div>
      <div className="resultado__detalle flex flex-col md:flex-row gap-4 md:gap-12 px-6 py-6 md:px-10 text-lg">
        <p>
          <strong>{llegaron}</strong> de {sondas.length} sondas llegaron
        </p>
        <p>
          <strong>{faltan}</strong> faltan
        </p>
        {sinSenal > 0 && (
          <p>
            <strong>{sinSenal}</strong> sin señal
          </p>
        )}
        {!todasLlegaron && (
          <p>
            La que más falta: <strong>{masCaliente.nombre}</strong> (
            {masCaliente.temp.toFixed(1)} °C)
          </p>
        )}
      </div>
    </section>
  );
};

const Sondas = () => {
  const [sondas, setSondas] = useState<ResumenSonda[]>([]);
  const [aireEntra, setAireEntra] = useState<number | null>(null);
  const [aireVuelve, setAireVuelve] = useState<number | null>(null);

  useEffect(() => {
    fetch("/docs/proceso-133.csv")
      .then((res) => res.text())
      .then((texto) => {
        const datos = leerCsv(texto);
        setSondas(resumirSondas(datos));
        setAireEntra(ultimaTemperatura(datos, "Ambiente"));
        setAireVuelve(ultimaTemperatura(datos, "Retorno"));
      });
  }, []);

  return (
    <section className="sondas w-full custom-x-padding pt-12 pb-24">
      <div className="sondas__container w-full flex flex-col gap-4">
        <Resultado sondas={sondas} />
        <div className="sondas__header flex flex-col md:flex-row md:justify-between md:items-end gap-2 mt-8">
          <h3 className="sondas__title text-primary text-3xl">
            Sondas de pulpa
          </h3>
          <p className="text-dark-two text-sm">
            Aire que entra: <strong>{aireEntra} °C</strong> · Aire que vuelve:{" "}
            <strong>{aireVuelve} °C</strong>
          </p>
        </div>
        <div className="sondas__grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sondas.map((sonda) => (
            <TarjetaSonda key={sonda.nombre} sonda={sonda} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sondas;
