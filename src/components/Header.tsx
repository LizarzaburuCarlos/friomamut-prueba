const Header = () => {
  return (
    <header className="header w-full bg-primary custom-x-padding py-6 md:py-8">
      <div className="header__container mx-auto w-full 2xl:max-w-7xl flex flex-col gap-1">
        <h6 className="header__subtitle text-secondary text-sm">
          PRUEBA TÉCNICA - CARLOS LIZARZABURU
        </h6>
        <h1 className="header__title text-light-one text-3xl md:text-4xl">
          ¿Llegó la fruta al frío?
        </h1>
        <p className="header__meta text-light-one/70 text-sm">Octubre 2026</p>
      </div>
    </header>
  );
};

export default Header;
