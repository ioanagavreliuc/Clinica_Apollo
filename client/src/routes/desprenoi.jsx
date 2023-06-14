import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function DespreNoi() {
  return (
    <>
      <section className="sub-header">
        <Navbar />
      </section>
    <section className="about">
      <div className="main">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5567.456746600069!2d21.212973767016255!3d45.75659119056593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20maps!5e0!3m2!1sen!2sro!4v1684862719317!5m2!1sen!2sro"
          width="50%"
          height="50%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="all-text">
          <h4>Despre noi</h4>
          <h1>Descoperă unde ne găsești și cum să ajungi la noi</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis id ab totam error mollitia</p>
          <div className="btn-txt">
            <button type="button">Fa o donatie</button>
            <button type="button">Programeaza-te</button>
          </div>
        </div>
      </div>
    </section>
      {/* <div className="container">
        <section className="cont-el">
          <div className="row">
            <div className="cont-col">
              <div>
                <i className="fa fa-home"></i>
                <span>
                  <h5>Strada X, Nr. Y</h5>
                  <p>Timisoara, Romania</p>
                </span>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <span>
                  <h5>~introduceti nr. de telefon~</h5>
                  <p>
                    De luni pana duminica, orele 8:00-18:00
                    <br />
                    Pentru urgente apelati la ~introd. nr. tel~
                  </p>
                </span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span>
                  <h5>abc@def.com</h5>
                  <p>Aveti vreo intrebare? Contactati-ne pe mail!</p>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      <Footer />
    </>
  );
}