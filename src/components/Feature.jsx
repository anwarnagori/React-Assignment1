import Food from "../../Assets/images/food-world.png";
import FoodLogo from "../../Assets/images/food-world-logo.png";
import PizzaHub from "../../Assets/images/pizza-hub.png";
import PizzaLogo from "../../Assets/images/pizzahub-logo.png";
import DonutsHut from "../../Assets/images/donuts-hut.png";
import DonutsLogo from "../../Assets/images/donuts-hut-logo.png";

const Feature = () => {
  return (
    <section id="testimonial">
      <div class="container">
        <div class="row ">
          <div class="col-lg-7 mx-auto text-center mb-4">
            <h5 class="fw-bolder fs-2 fs-lg-5 lh-sm mb-3">
              Featured Restaurants
            </h5>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img
                class="card-img-top rounded-3"
                src={Food}
                alt="..."
              />
              <div class="card-img-overlay ps-0  ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xxl-3  icon-move "
                    src={FoodLogo}
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">20% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column ">
                  <span class="need-extra-padding-left">
                    <h5 class=" m-sm-0  fw-bold text-dark ">Food world</h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>46
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge p-background p-2 ">
                <span class="fw-bold fs-5 text-p-color ">Opens Tomorrow</span>
              </span>
            </div>
          </div>

          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img
                class="card-img-top rounded-3"
                src={PizzaHub}
                alt="..."
              />
              <div class="card-img-overlay ps-0 mt-auto ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xl-3 icon-move"
                    src={PizzaLogo}
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">10% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column">
                  <span class="need-extra-padding-left">
                    <h5 class="m-sm-0  fw-bold text-dark ">Pizza hub</h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>40
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge p-background p-2 ">
                <span class="fw-bold fs-5 text-p-color ">Opens Tomorrow</span>
              </span>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img
                class="card-img-top rounded-3"
                src={DonutsHut}
                alt="..."
              />
              <div class="card-img-overlay ps-0 mt-auto ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xxl-3 icon-move"
                    src={DonutsLogo}
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">15% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column">
                  <span class="need-extra-padding-left">
                    <h5 class="m-sm-0 fw-bold text-dark ">Donuts-hut</h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>20
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge bg-success bg-opacity-10 p-2 ">
                <span class="fw-bold fs-5 text-success ">Opens Now</span>
              </span>
            </div>
          </div>

          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img
                class="card-img-top rounded-3"
                src={DonutHut}
                alt="..."
              />
              <div class="card-img-overlay ps-0 mt-auto ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xl-3 icon-move"
                    src={DonutsLogo}
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">15% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column">
                  <span class="need-extra-padding-left">
                    <h5 class="m-sm-0 fw-bold text-dark ">Donuts hut</h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>50
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge bg-success bg-opacity-10 p-2 ">
                <span class="fw-bold fs-5 text-success">Opens Now</span>
              </span>
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-5">
          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img
                class="card-img-top rounded-3"
                src="./Assets/images/ruby-tuesday.png"
                alt="..."
              />
              <div class="card-img-overlay ps-0 mt-auto ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xl-3 icon-move"
                    src="./Assets/images/ruby-tuesday-logo.png"
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">10% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column">
                  <span class="need-extra-padding-left">
                    <h5 class="m-sm-0 fw-bold text-dark ">Ruby tuesday</h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>46
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge bg-success bg-opacity-10 p-2 ">
                <span class="fw-bold fs-5 text-success ">Opens Now</span>
              </span>
            </div>
          </div>

          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img
                class="card-img-top rounded-3"
                src="./Assets/images/kuakata.png"
                alt="..."
              />
              <div class="card-img-overlay ps-0 mt-auto ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xl-3 icon-move"
                    src="./Assets/images/kuakata-logo.png"
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">10% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column">
                  <span class="need-extra-padding-left">
                    <h5 class="m-sm-0 fw-bold text-dark ">
                      Kuakata Fried Chicken
                    </h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>40
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge bg-success bg-opacity-10 p-2 ">
                <span class="fw-bold fs-5 text-success ">Opens Now</span>
              </span>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img
                class="card-img-top rounded-3"
                src="./Assets/images/red-square.png"
                alt="..."
              />
              <div class="card-img-overlay ps-0 mt-auto ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xxl-3 icon-move"
                    src="./Assets/images/red-square-logo.png"
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">15% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column">
                  <span class="need-extra-padding-left">
                    <h5 class="m-sm-0 fw-bold text-dark ">Donuts-hut</h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>20
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge bg-success bg-opacity-10 p-2 ">
                <span class="fw-bold fs-5 text-success ">Opens Now</span>
              </span>
            </div>
          </div>

          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img
                class="card-img-top rounded-3"
                src="./Assets/images/taco-bell.png"
                alt="..."
              />
              <div class="card-img-overlay ps-0 mt-auto ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xxl-3 icon-move"
                    src="./Assets/images/taco-bell-logo.png"
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">15% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column">
                  <span class="need-extra-padding-left">
                    <h5 class="m-sm-0 fw-bold text-dark ">Donuts hut</h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>50
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge bg-success bg-opacity-10 p-2 ">
                <span class="fw-bold fs-5 text-success">Opens Now</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
