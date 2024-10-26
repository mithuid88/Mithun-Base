import Header from "../../components/Header/Header";

import heroImg from "../../images/hero-img.png";

import "./Home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <section id="hero" className="d-flex align-items-center mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 className="mb-4 title">Welcome to IVA Builder [Easy way of building iDetails]</h1>
              <h5 className="description">IVA Builder which combines different tools and features with the goal to help you to build DSPs slides and templates without any knowledge of coding. It's a perfect solution to replace the common WYSIWYG editors, which are good for content editing.</h5>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={heroImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
