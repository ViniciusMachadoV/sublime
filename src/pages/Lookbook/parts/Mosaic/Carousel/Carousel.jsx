import estilo from "./Carousel.module.css";

function Carousel() {
  return (
        <div className={estilo["container"]}>
          <div id="lookbookCarousel" className="carousel slide w-75 my-5 mx-auto">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#lookbookCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#lookbookCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#lookbookCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#lookbookCarousel"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/assets/mod1.png"
                  className="d-block w-100 object-fit-cover"
                  style={{ height: 600 }}
                  alt="Foto do Lookbook"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/assets/mod2.png"
                  className="d-block w-100 object-fit-cover"
                  style={{ height: 600 }}
                  alt="Foto do Lookbook"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/assets/mod3.png"
                  className="d-block w-100 object-fit-cover"
                  style={{ height: 600 }}
                  alt="Foto do Lookbook"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/assets/mod4.png"
                  className="d-block w-100 object-fit-cover"
                  style={{ height: 600 }}
                  alt="Foto do Lookbook"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#lookbookCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#lookbookCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
  );
}

export default Carousel;
