import Image from "next/image";
import features_icon_1 from "/public/img/features-icon-1.png";
import features_icon_2 from "/public/img/features-icon-2.png";
import features_icon_3 from "/public/img/features-icon-3.png";
import features_icon_4 from "/public/img/features-icon-4.png";

const Features = () => {
  return (
    <section className="features-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="section-header">
                <h2 className="title">Biostatistics Analysis</h2>
                <p>
                  SPSS, STATA, R-Studio, Excel, Minitab Biostatistics Analysis
                  Methods
                </p>
              </div>
            </div>
          </div>
          <div className="row wrapper" style={{ justifyContent: "center" }}>
            <div className="col-lg-4 col-md-6">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={features_icon_1} alt="icon" />
                </div>
                <h5>survival analysi</h5>
                <p>Top-quality PhD services at prices that fit your budget.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={features_icon_2} alt="icon" />
                </div>
                <h5>regression analysis</h5>
                <p>Hassle-free PhD support designed to save your time.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={features_icon_3} alt="icon" />
                </div>
                <h5>sensitivity analysis</h5>
                <p>Efficient PhD support delivered right when you need it.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={features_icon_4} alt="icon" />
                </div>
                <h5>multivariate analysis</h5>
                <p>Trusted PhD services ensuring quality and consistency.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={features_icon_4} alt="icon" />
                </div>
                <h5>correlation analysis</h5>
                <p>Trusted PhD services ensuring quality and consistency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
