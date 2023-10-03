import React from 'react'

const Hero = () => {
  return (
  <> <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators crsl">
      <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
      ></button>
      <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
      ></button>
      <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
      ></button>
  </div>
  <div class="carousel-inner">
      <div class="carousel-item active">
          <img src="/images/pic1.jpeg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
              <h5>Play with color</h5>
              <p>
                  Color temperature changing lights takes any place from drab to
                  fab.
              </p>
              <button type="button" class="btn btn-primary">
                  Learn More
              </button>
          </div>
      </div>
      <div class="carousel-item">
          <img src="/images/pic2.jpeg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
              <h5>Play with color</h5>
              <p>
                  Color temperature changing lights takes any place from drab to
                  fab.
              </p>
              <button type="button" class="btn btn-primary">
                  Learn More
              </button>
          </div>
      </div>
      <div class="carousel-item">
          <img src="/images/pic3.jpeg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
              <h5>Play with color</h5>
              <p>
                  Color temperature changing lights takes any place from drab to
                  fab.
              </p>
              <button type="button" class="btn btn-primary">
                  Learn More
              </button>
          </div>
      </div>
  </div>
  <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
  >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
  </button>
  <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
  >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
  </button>
</div></>
  )
}

export default Hero
