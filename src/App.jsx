import React from "react";
import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Footerr from "./component/Footerr";

function App() {
    return (
        <>
        <Navbar />
           

            {/* Home page start */}
           <Hero/>

            <div class="container cslr">
                <div class="text-section">
                    <h1>Sternet Smart Wi-Fi RGB Led Strip Light</h1>
                    <p>
                        Sternet Smart LED light strips are packed with rich colors and
                        fantastic light effects.
                    </p>
                    <button type="button" class="btn btn-primary">
                        Learn More
                    </button>
                </div>
                <div class="image-section">
                    <img src="/images/item1.png" alt="Image Description" />
                </div>
            </div>

            <div class="container cslr">
                <div class="image-section">
                    <img src="/images/item2.png" alt="Image Description" />
                </div>
                <div class="text-section">
                    <h1>Sternet Smart Wi-Fi 20W CCT Batten</h1>
                    <p>
                        Sternet Smart Wi-Fi LED Batten with tunable temperature range from
                        warm to cool white.
                    </p>
                    <button type="button" class="btn btn-primary">
                        Learn More
                    </button>
                </div>
            </div>

            <div class="container cslr">
                <div class="text-section">
                    <h1>Sternet Smart Wi-Fi CCT Led Downlight</h1>
                    <p>
                        Sternet Smart Wi-Fi Led Downlight are packed with rich colors and
                        fantastic light effects.
                    </p>
                    <button type="button" class="btn btn-primary">
                        Learn More
                    </button>
                </div>
                <div class="image-section">
                    <img src="/images/item3.png" alt="Image Description" />
                </div>
            </div>

            <div id="carouselExampleCaptions" class="carousel slide">
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
                        <img src="/images/75per.jpeg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="text1">The right light can turn a house
                                into your own home.</h5>

                            <button type="button" class="btn btn-primary">
                                Explore
                            </button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/images/100per.jpeg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="text1">The right light can turn a house
                                into your own home.</h5>

                            <button type="button" class="btn btn-primary">
                                Explore
                            </button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/images/50per.jpeg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="text1">The right light can turn a house
                                into your own home.</h5>

                            <button type="button" class="btn btn-primary">
                                Explore
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
            </div>

            <div class="card-group card-g">
                <div class="card">
                    <img src="/images/user.jpeg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Rajesh</h5>
                        <p class="card-text">
                            Excellent product experience. Will order more for my entire house.
                        </p>
                    </div>
                </div>
                <div class="card">
                    <img src="/images/user.jpeg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Rajesh</h5>
                        <p class="card-text">
                            Excellent product experience. Will order more for my entire house.
                        </p>
                    </div>
                </div>
                <div class="card">
                    <img src="/images/user.jpeg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Rajesh</h5>
                        <p class="card-text">
                            Excellent product experience. Will order more for my entire house.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container text-center tv-section">
                <div class="row">
                    <div class="col">
                        <h1>Importance of Circadian Rhythm</h1>
                        <button type="button" class="btn btn-primary">
                            READ
                        </button>

                        <button type="button" class="btn btn-primary">
                            ALL BLOGS
                        </button>


                    </div>
                    <div class="col">
                        <img src="/images/tv.png" class="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            <section className="ftco-gallery">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 heading-section text-center text-white mb-4 ftco-animate">
                            <h2 className="mb-4 py-4">Subscribe Our Newsletter Service.</h2>
                            <p>Be the first one to know about product launches & offers.</p>
                            <form >
                                <div className="mb-3">
                                    <input type="email" name='email' placeholder=' Email' className='form-control' />
                                </div>
                                <div className="mb-3">
                                    <button type='submit' className='btn btn-primary w-100 p-2 rounded-2'>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

           
        <Footerr/>
        </>

    );
}

export default App;
