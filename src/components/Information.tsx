const KPIS = [
  { title: "Producto", data: "Uva" },
  { title: "Paletas", data: "14" },
  { title: "Inicio", data: "01:20" },
  { title: "Fin", data: "11:23" },
  { title: "Sondas", data: "12 + 2" },
  { title: "Objetivo", data: "-1.0 °C" },
];

const KPI = ({ title, data }: { title: string; data: string }) => {
  return (
    <div className="kpi flex flex-col gap-2 p-4 rounded-sm border border-dark-four bg-light-one">
      <h5 className="kpi_title text-dark-two">{title}</h5>
      <h4 className="kpi__data text-primary text-4xl">{data}</h4>
    </div>
  );
};

const Information = () => {
  return (
    <section className="information w-full custom-x-padding pt-12 pb-6">
      <div className="information__container w-full flex flex-col gap-4">
        <h3 className="information__title text-primary text-3xl">Los datos</h3>
        <div className="information__kpis w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {KPIS.map((kpi, index) => (
            <KPI key={index} title={kpi.title} data={kpi.data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Information;
