import "./theme/App.css";
import { useRef, useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery.ts";
import Container, { Container1 } from "./components/shared/Containers";

function App() {
  const [mobile, setMobile] = useState(true);
  const [sticky, setSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const mobileScreen = useMediaQuery("(max-width: 975px)");
  const features = useRef(null);
  const howItWorks = useRef(null);
  const about = useRef(null);
  const locations = useRef(null);
  const top = useRef(null);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const [language, setLanguage] = useState("en");
  const languages = {
    en: {
      nav1: "Features & Benefits",
      nav2: "How does it work?",
      nav3: "About",
      nav4: "Locations",
      nav5: "Choose Plan",
      nav6: "Login",
      hero: {
        header: "Empowering Better Health for All",
        tag: "Plans starting at ",
        span: "$60/month",
        button: "Choose a Plan",
      },
      features: {
        title: "FEATURES & BENEFITS",
        header: "Uniting your health needs with one affordable price",
        tag: "Healthcare solutions for individuals and families who are uninsured or underinsured.",
        button: "Get Started",
        grid1: "Primary Care",
        grid2: "Diagnostics",
        grid3: "Dental",
        grid4: "Specialists",
        grid5: "Urgent Care",
        grid6: "Mental Health",
        grid7: "Medical Supplies",
        grid8: "Pharmacy",
        grid9: "Labs",
      },
      howItWorks: {
        title: "HOW IT WORKS",
        header: "Membership Plans",
        tag: "The We Do Care membership plan includes access to top-notch vision, dental, specialist, and pharmacy services, all at a budget-friendly price. Members can visit a primary care physician for as little as $30 per office visit.",
        button: "Enroll Now",
      },
      about: {
        title: "ABOUT",
        header: "We're about ",
        span: "Everyone",
        tag: "At We Do Care, our mission is to provide access to quality healthcare for those who are uninsured or underinsured. With approximately 30 million Americans lacking health insurance coverage, many are unable to afford traditional health insurance plans. Regardless of whether you have insurance, social security, or a driver's license, we welcome all individuals in need of healthcare.",
        button: "Enroll Now",
      },
      locations: {
        title: "OUR LOCATIONS",
        header1: "Primary Care, ",
        header2: "Near You",
      },
      footer: {
        company: "Company",
        contact: "Contact",
        access: "Access",
      },
    },
    sp: {
      nav1: "Beneficios",
      nav2: "¿Como Funciona?",
      nav3: "Sobre Nosotros",
      nav4: "Ubicaciones",
      nav5: "Elige un plan",
      nav6: "Acceso",
      hero: {
        header: "Empoderando una Mejor Salud para Todos",
        tag: "Comenzando en ",
        span: "$60/mes",
        button: "Elija un Plan",
      },
      features: {
        title: "CARACTERÍSTICAS Y BENEFICIOS",
        header: "Uniendo tus necesidades de salud con un precio asequible",
        tag: "Soluciones de atención médica para personas y familias que no tienen seguro o tienen un seguro insuficiente.",
        button: "Empezar",
        grid1: "Atención primaria",
        grid2: "Diagnósticos",
        grid3: "Dental",
        grid4: "Especialistas",
        grid5: "Atención de urgencias",
        grid6: "Salud mental",
        grid7: "Suministros médicos",
        grid8: "Farmacia",
        grid9: "Laboratorios",
      },
      howItWorks: {
        title: "CÓMO FUNCIONA",
        header: "Planes de Membresía",
        tag: "El plan de membresía We Do Care incluye acceso a servicios oftalmológicos, dentales, especializados y de farmacia de primer nivel, todo a un precio económico. Los miembros pueden visitar a un médico de atención primaria por tan solo $30 por visita al consultorio.",
        button: "Inscríbete Hoy",
      },
      about: {
        title: "SOBRE NOSOTROS",
        header: "Somos para ",
        span: "Todos",
        tag: "En We Do Care, nuestra misión es brindar acceso a atención médica de calidad para quienes no tienen seguro o tienen seguro insuficiente. Con aproximadamente 30 millones de estadounidenses que carecen de cobertura de seguro de salud, muchos no pueden pagar los planes de seguro de salud tradicionales. Independientemente de si tiene seguro, seguro social o licencia de conducir, damos la bienvenida a todas las personas que necesitan atención médica.",
        button: "Inscríbete Hoy",
      },
      locations: {
        title: "NUESTRAS UBICACIONES",
        header1: "Atención Primaria, ",
        header2: "Cerca de Usted",
      },
      footer: {
        company: "Compañía",
        contact: "Contacto",
        access: "Acceso",
      },
    },
  };

  function changeLanguage() {
    language === "en" ? setLanguage("sp") : setLanguage("en");
    setLangMenuOpen(false);
  }

  useEffect(() => {
    if (mobileScreen) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [mobileScreen]);

  const changeNavbar = () => {
    if (window.scrollY >= 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <div className="App">
      <div
        className={
          mobile && sticky
            ? "navbar mobile sticky"
            : sticky
            ? "navbar sticky"
            : mobile
            ? "navbar mobile"
            : "navbar"
        }
      >
        <div className="nav-left">
          <div
            className="logo-div"
            onClick={() => top.current?.scrollIntoView({ behavior: "smooth" })}
          >
            <img
              className="nav-logo-mobile"
              src={require("./theme/assets/logo.png")}
              alt="We Do Care logo, three people forming a heart"
            />
            <img
              className="nav-logo"
              src={require("./theme/assets/logo-white.png")}
              alt="We Do Care logo, three people forming a heart"
            />
            <img
              className="nav-logo-sticky"
              src={require("./theme/assets/logo-color.png")}
              alt="We Do Care logo, three people forming a heart"
            />
          </div>
        </div>
        <div className="nav-right">
          <div className="navs">
            <p
              className="nav"
              onClick={() =>
                features.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {language === "en" ? languages.en.nav1 : languages.sp.nav1}
            </p>
            <p
              className="nav"
              onClick={() =>
                howItWorks.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {language === "en" ? languages.en.nav2 : languages.sp.nav2}
            </p>
            <p
              className="nav"
              onClick={() =>
                about.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {language === "en" ? languages.en.nav3 : languages.sp.nav3}
            </p>
            <p
              className="nav"
              onClick={() =>
                locations.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {language === "en" ? languages.en.nav4 : languages.sp.nav4}
            </p>
            <button
              className="outline-btn green"
              onClick={() =>
                window.open("https://members.wedocaremedical.com/")
              }
            >
              {language === "en" ? languages.en.nav5 : languages.sp.nav5}
            </button>
            <button
              className="outline-btn purple"
              onClick={() =>
                window.open("https://members.wedocaremedical.com/login")
              }
            >
              {language === "en" ? languages.en.nav6 : languages.sp.nav6}
            </button>
          </div>
          {langMenuOpen ? (
            <div className="language-btn-wrapper open">
              <button
                className="language-btn"
                onClick={() => setLangMenuOpen(false)}
              >
                <img
                  src={
                    language === "en"
                      ? require("./theme/assets/icon-usa.png")
                      : require("./theme/assets/icon-spain.png")
                  }
                  className="flag"
                  alt="nationality flag for language selection"
                />
                <img
                  className="caret"
                  src={require("./theme/assets/caret-down.png")}
                  alt="dropdown toggle"
                />
              </button>
              <button className="language-btn two" onClick={changeLanguage}>
                <img
                  src={
                    language === "en"
                      ? require("./theme/assets/icon-spain.png")
                      : require("./theme/assets/icon-usa.png")
                  }
                  className="flag"
                  alt="nationality flag for language selection"
                />
                <img
                  className="caret"
                  src={require("./theme/assets/caret-down.png")}
                  alt="dropdown toggle"
                />
              </button>
            </div>
          ) : (
            <div
              className="language-btn-wrapper closed"
              onClick={() => setLangMenuOpen(true)}
            >
              <button
                className="language-btn"
              >
                <img
                  src={
                    language === "en"
                      ? require("./theme/assets/icon-usa.png")
                      : require("./theme/assets/icon-spain.png")
                  }
                  className="flag"
                  alt="nationality flag for language selection"
                />
                <img
                  src={require("./theme/assets/caret-down.png")}
                  alt="dropdown toggle"
                />
              </button>
              <button className="language-btn two" onClick={changeLanguage}>
                <img
                  src={
                    language === "en"
                      ? require("./theme/assets/icon-spain.png")
                      : require("./theme/assets/icon-usa.png")
                  }
                  className="flag"
                  alt="nationality flag for language selection"
                />
                <img
                  className="caret"
                  src={require("./theme/assets/caret-down.png")}
                  alt="dropdown toggle"
                />
              </button>
            </div>
          )}
          <div
            className="hamburger"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <svg
              width="24"
              height="13"
              viewBox="0 0 24 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="24" y2="0.5" stroke="white" strokeWidth="1" />
              <line
                y1="12.5"
                x2="24"
                y2="12.5"
                stroke="white"
                strokeWidth="1"
              />
              <line y1="6.5" x2="24" y2="6.5" stroke="white" strokeWidth="1" />
            </svg>
          </div>
        </div>
        <div
          className={
            !showMenu
              ? "mobile-menu hide"
              : langMenuOpen
              ? "mobile-menu shift"
              : "mobile-menu"
          }
          id="menu"
        >
          <p
            className="nav"
            onClick={() =>
              features.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {language === "en" ? languages.en.nav1 : languages.sp.nav1}
          </p>
          <p
            className="nav"
            onClick={() =>
              howItWorks.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {language === "en" ? languages.en.nav2 : languages.sp.nav2}
          </p>
          <p
            className="nav"
            onClick={() =>
              about.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {language === "en" ? languages.en.nav3 : languages.sp.nav3}
          </p>
          <p
            className="nav"
            onClick={() =>
              locations.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {language === "en" ? languages.en.nav4 : languages.sp.nav4}
          </p>
          <button
            className="outline-btn green"
            onClick={() => window.open("https://members.wedocaremedical.com/")}
          >
            {language === "en" ? languages.en.nav5 : languages.sp.nav5}
          </button>
          <button
            className="outline-btn purple"
            onClick={() =>
              window.open("https://members.wedocaremedical.com/login")
            }
          >
            {language === "en" ? languages.en.nav6 : languages.sp.nav6}
          </button>
        </div>
      </div>
      <section className="hero" ref={top}>
        <Container1>
          <div className="hero-wrapper">
            <div className="hero-text">
              <h1 className="section-header">
                {language === "en"
                  ? languages.en.hero.header
                  : languages.sp.hero.header}
              </h1>
              <h3 className="hero-tag">
                {language === "en"
                  ? languages.en.hero.tag
                  : languages.sp.hero.tag}
                <span className="bold">
                  {language === "en"
                    ? languages.en.hero.span
                    : languages.sp.hero.span}
                </span>
              </h3>
              <button
                className="call-to-action"
                onClick={() =>
                  window.open("https://members.wedocaremedical.com/")
                }
              >
                {language === "en"
                  ? languages.en.hero.button
                  : languages.sp.hero.button}
              </button>
            </div>
            <div className="phone-img-wrapper">
              <img
                className="phone-img"
                src={require("./theme/assets/phone-minimal-2.png")}
                alt="phone showing we do care app"
              />
            </div>
          </div>
        </Container1>
      </section>
      <section className="features" ref={features}>
        <Container>
          <div className="features-text">
            <h3 className="section-title">
              {language === "en"
                ? languages.en.features.title
                : languages.sp.features.title}
            </h3>
            <h1 className="section-header">
              {language === "en"
                ? languages.en.features.header
                : languages.sp.features.header}
            </h1>
            <p className="section-desc">
              {language === "en"
                ? languages.en.features.tag
                : languages.sp.features.tag}
            </p>
            <button
              className="call-to-action"
              onClick={() =>
                window.open("https://members.wedocaremedical.com/")
              }
            >
              {language === "en"
                ? languages.en.features.button
                : languages.sp.features.button}
            </button>
          </div>
          <div className="features-wrapper">
            <div className="feature">
              <img
                className="feature-img"
                alt=""
                src={require("./theme/assets/primary-care.png")}
              />
              <p className="feature-text">
                {language === "en"
                  ? languages.en.features.grid1
                  : languages.sp.features.grid1}
              </p>
            </div>
            <div className="feature">
              <img
                className="feature-img"
                alt=""
                src={require("./theme/assets/diagnostics.png")}
              />
              <p className="feature-text">
                {language === "en"
                  ? languages.en.features.grid2
                  : languages.sp.features.grid2}
              </p>
            </div>
            <div className="feature">
              <img
                className="feature-img"
                alt=""
                src={require("./theme/assets/dental.png")}
              />
              <p className="feature-text">
                {language === "en"
                  ? languages.en.features.grid3
                  : languages.sp.features.grid3}
              </p>
            </div>
            <div className="feature">
              <img
                className="feature-img"
                alt=""
                src={require("./theme/assets/specialists.png")}
              />
              <p className="feature-text">
                {language === "en"
                  ? languages.en.features.grid4
                  : languages.sp.features.grid4}
              </p>
            </div>
            <div className="feature">
              <img
                className="feature-img"
                alt=""
                src={require("./theme/assets/urgent-care.png")}
              />
              <p className="feature-text">
                {language === "en"
                  ? languages.en.features.grid5
                  : languages.sp.features.grid5}
              </p>
            </div>
            <div className="feature">
              <img
                className="feature-img"
                alt=""
                src={require("./theme/assets/mental-health.png")}
              />
              <p className="feature-text">
                {language === "en"
                  ? languages.en.features.grid6
                  : languages.sp.features.grid6}
              </p>
            </div>
            <div className="feature">
              <img
                className="feature-img"
                alt=""
                src={require("./theme/assets/medical-supplies.png")}
              />
              <p className="feature-text">
                {language === "en"
                  ? languages.en.features.grid7
                  : languages.sp.features.grid7}
              </p>
            </div>
            <div className="feature">
              <img
                className="feature-img"
                alt=""
                src={require("./theme/assets/pharmacy.png")}
              />
              <p className="feature-text">
                {language === "en"
                  ? languages.en.features.grid8
                  : languages.sp.features.grid8}
              </p>
            </div>
            <div className="feature">
              <img
                className="feature-img"
                alt=""
                src={require("./theme/assets/labs.png")}
              />
              <p className="feature-text">
                {language === "en"
                  ? languages.en.features.grid9
                  : languages.sp.features.grid9}
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="how-it-works" ref={howItWorks}>
        <Container>
          <div className="how-it-works-text">
            <h3 className="section-title">
              {language === "en"
                ? languages.en.howItWorks.title
                : languages.sp.howItWorks.title}
            </h3>
            <h1 className="section-header">
              {language === "en"
                ? languages.en.howItWorks.header
                : languages.sp.howItWorks.header}
            </h1>
            <p className="section-desc">
              {language === "en"
                ? languages.en.howItWorks.tag
                : languages.sp.howItWorks.tag}
            </p>
            <button
              className="call-to-action"
              onClick={() =>
                window.open("https://members.wedocaremedical.com/")
              }
            >
              {language === "en"
                ? languages.en.howItWorks.button
                : languages.sp.howItWorks.button}
            </button>
          </div>
        </Container>
      </section>
      <section className="about" ref={about}>
        <Container>
          <div className="about-wrapper">
            <div className="about-text">
              <h3 className="section-title">
                {language === "en"
                  ? languages.en.about.title
                  : languages.sp.about.title}
              </h3>
              <h1 className="section-header">
                {language === "en"
                  ? languages.en.about.header
                  : languages.sp.about.header}{" "}
                <span className="purple">
                  {language === "en"
                    ? languages.en.about.span
                    : languages.sp.about.span}
                </span>
              </h1>
              <p className="section-desc">
                {language === "en"
                  ? languages.en.about.tag
                  : languages.sp.about.tag}
              </p>
              <button
                className="call-to-action"
                onClick={() =>
                  window.open("https://members.wedocaremedical.com/")
                }
              >
                {language === "en"
                  ? languages.en.about.button
                  : languages.sp.about.button}
              </button>
            </div>
            <div className="collage-wrapper">
              <img
                className="collage"
                src={require("./theme/assets/collage.png")}
                alt="collage of happy couples and families"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="our-locations" ref={locations}>
        <Container>
          <h3 className="section-title">
            {language === "en"
              ? languages.en.locations.title
              : languages.sp.locations.title}
          </h3>
          <h1 className="section-header">
            {language === "en"
              ? languages.en.locations.header1
              : languages.sp.locations.header1}
            <br className="mobile-break" />
            {language === "en"
              ? languages.en.locations.header2
              : languages.sp.locations.header2}
          </h1>
        </Container>
        {mobile ? (
          <img
            className="map"
            src={require("./theme/assets/our-locations.png")}
            alt="map showing locations of We Do Care centers"
          />
        ) : (
          <Container>
            <img
              className="map"
              src={require("./theme/assets/our-locations-lg.png")}
              alt="map showing locations of We Do Care centers"
            />
          </Container>
        )}
        <Container>
          <div className="locations">
            <div className="location">
              <h3 className="location-title">Boca Raton</h3>
              <a
                className="location-info address"
                href="https://www.google.com/maps?q=7050+W+Palmetto+Park,+Suite+30+Boca+Raton,+FL+33433"
                target="_blank"
                rel="noreferrer"
              >
                7050 W Palmetto Park, Suite 30
                <br />
                Boca Raton, FL 33433
              </a>
              <p className="location-info phone">
                P:
                <a className="location-info" href="tel:+19544259154">
                  (954) 425-9154
                </a>
              </p>
              <p className="location-info phone">
                F:
                <a className="location-info" href="tel:+18662311882">
                  (866) 231-1882
                </a>
              </p>
            </div>
            <div className="location">
              <h3 className="location-title">Sunrise</h3>
              <a
                className="location-info address"
                href="https://www.google.com/maps?q=4269+NW+88th+Ave+Sunrise,+FL+33351"
                target="_blank"
                rel="noreferrer"
              >
                4269 NW 88th Ave
                <br />
                Sunrise, FL 33351
              </a>
              <p className="location-info phone">
                P:
                <a className="location-info" href="tel:+19545780200">
                  (954) 578-0200
                </a>
              </p>
              <p className="location-info phone">
                F:
                <a className="location-info" href="tel:+19545780050">
                  (954) 578-0050
                </a>
              </p>
            </div>
            <div className="location">
              <h3 className="location-title">Hollywood, FL</h3>
              <a
                className="location-info address"
                href="https://www.google.com/maps?q=3990+Sheridan+St,+Suite+101,+Hollywood,+FL+33021"
                target="_blank"
                rel="noreferrer"
              >
                3990 Sheridan St, Suite 101
                <br />
                Hollywood, FL 33021
              </a>
              <p className="location-info phone">
                P:
                <a className="location-info" href="tel:+19549874455">
                  (954) 987-4455
                </a>
              </p>
              <p className="location-info phone">
                F:
                <a className="location-info" href="tel:+19549647342">
                  (954) 964-7342
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="footer">
        <Container>
          <div className="footer-wrapper">
            <div className="footer-logo-wrapper">
              <img
                className="footer-logo"
                src={require("./theme/assets/footer-logo.png")}
                alt="We Do Care logo with text"
              />
            </div>
            <div className="links-div">
              <h4 className="links-title">
                {language === "en"
                  ? languages.en.footer.company
                  : languages.sp.footer.company}
              </h4>
              <p
                className="link"
                onClick={() =>
                  features.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {language === "en" ? languages.en.nav1 : languages.sp.nav1}
              </p>
              <p
                className="link"
                onClick={() =>
                  howItWorks.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {language === "en" ? languages.en.nav2 : languages.sp.nav2}
              </p>
              <p
                className="link"
                onClick={() =>
                  about.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {language === "en" ? languages.en.nav3 : languages.sp.nav3}
              </p>
              <p
                className="link"
                onClick={() =>
                  locations.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {language === "en" ? languages.en.nav4 : languages.sp.nav4}
              </p>
            </div>
            {mobile ? (
              <>
                <div className="links-div">
                  <h4 className="links-title">
                    {language === "en"
                      ? languages.en.footer.contact
                      : languages.sp.footer.contact}
                  </h4>
                  <a
                    className="link"
                    href="mailto:hello@wedocaremedical.com?subject=Hello!"
                  >
                    hello@wedocaremedical.com
                  </a>
                  <p>
                    <a className="link" href="tel:+19548801180">
                      (954) 880-1180
                    </a>
                  </p>
                </div>
                <div className="links-div">
                  <h4 className="links-title">
                    {language === "en"
                      ? languages.en.footer.access
                      : languages.sp.footer.access}
                  </h4>
                  <a
                    href="https://members.wedocaremedical.com/"
                    target="_blank"
                    className="link"
                    rel="noreferrer"
                  >
                    {language === "en" ? languages.en.nav5 : languages.sp.nav5}
                  </a>
                  <p>
                    <a
                      href="https://members.wedocaremedical.com/login"
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      {language === "en"
                        ? languages.en.nav6
                        : languages.sp.nav6}
                    </a>
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="links-div">
                  <h4 className="links-title">
                    {language === "en"
                      ? languages.en.footer.access
                      : languages.sp.footer.access}
                  </h4>
                  <a
                    href="https://members.wedocaremedical.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    {language === "en" ? languages.en.nav5 : languages.sp.nav5}
                  </a>
                  <p>
                    <a
                      href="https://members.wedocaremedical.com/login"
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      {language === "en"
                        ? languages.en.nav6
                        : languages.sp.nav6}
                    </a>
                  </p>
                </div>
                <div className="links-div">
                  <h4 className="links-title">
                    {language === "en"
                      ? languages.en.footer.contact
                      : languages.sp.footer.contact}
                  </h4>
                  <a
                    className="link"
                    href="mailto:hello@wedocaremedical.com?subject=Hello!"
                  >
                    hello@wedocaremedical.com
                  </a>
                  <p>
                    <a className="link" href="tel:+19548801180">
                      (954) 880-1180
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="disclaimer">
            <p>
              We Do Care Medical Membership Disclaimer:
              We Do Care Is Not a health insurance plan. We Do Care does not
              cover hospitals service. We Do Care is a Florida corporation
              registered in the state of Florida. We Do Care is a Medical
              Membership Organization. We Do Care administers a medical network
              of qualified providers for the provision of health care services
              to furnish health care services to Members by contracted providers
              (as defined below) at a much lower rates then Fee For Service
              Rates. We Do Care hereby engages providers to participate as part
              of the Network. Providers hereby accept the engagement to
              participate in We Do Care Network. In participating as a
              Network provider, Providers will comply with all Network rules and
              regulations and with applicable state and federal regulations
              pertaining to provider’s health care services.
              <br />
              <br />
              Members are to pay all services received directly to all
              contracted providers offices, Diagnostic facilities, Urgent cares
              facilities and all others facilities contracted with We Do Care at
              the rate agreed upon in the contract with We Do Care and
              contracted facility. All We Do Care members must see a Primary
              Care Provider so they can get a referral if they need to go to a
              network specialist or a diagnostic facility. We Do Care Members
              cannot go to Specialist Network Providers or Diagnostic facility
              without a referral from a participating Primary Care Provider
              (PCP).
              <br />
              <br />
              We Do Care members can also get best prices for medications they
              need only through pharmacies that are in We Do Care Network. We Do
              Care: All members excluding International members have a $35.00
              dollars, one time non-refundable enrollment fee. If the member or
              members fails a month of membership payment or canceled their
              membership and they decide to become a member again, they will be
              charge the one-time fee of $35.00 for re-enrollment.
              <br />
              <br />
              Sincerely,
              <br />
              We Do Care Administration.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default App;
