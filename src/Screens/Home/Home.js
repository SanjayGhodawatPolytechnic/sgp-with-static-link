import React from "react";
import Main from "../../ReusableComponents/Main";
import "./Home.css";
import CSELogo from "./icons/CSE";
import MechLogo from "./icons/Mech";
import CivilLogo from "./icons/Civil";
import ENTCLogo from "./icons/ENTC";
import ElectLogo from "./icons/Elect";
import "./CSS/DeptCard.css";
import Counter from "./components/Counter";
import Carousel from "./components/Carousel";
import Imp from "./components/Imp";
import Testimo from "./components/Testimo";
import Lottie from "react-lottie";
// import lottiedata from "./components/lf30_editor_m4oownfl.json";
import lottiedata from "./icons/loader.json";
import { useState } from "react";
import GetNews from "./components/News";
import Newsletter from "./components/newsletter";
import SwiperEg from "./components/Swiper";
import { Link } from "react-router-dom";
import AboutHome from "./components/About";
import Vidnewcarousel from "./components/vidnewcarousel";
import ImgCarousel from "./components/ImgCarousel";
import SlidingNews from "./components/SlidingNews";
import Recruters from "./components/Recruters";

function Home() {
  const [isCarouselLoading, setIsCarouselLoading] = useState(false);
  const [isRecentsLoading, setIsRecentsLoading] = useState(false);
  const [isCounterLoading, setIsCounterLoading] = useState(false);

  return (
    <Main isSlideShow={true}>
      {isCarouselLoading && isRecentsLoading && isCounterLoading && (
        <Lottie
          height="200px"
          width="200px"
          options={{
            autoplay: true,
            loop: true,
            animationData: lottiedata,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          isClickToPauseDisabled={true}
        />
      )}
      {!isCarouselLoading && !isRecentsLoading && !isCounterLoading && (
        <>
          <SlidingNews />
          <Carousel setIsCarouselLoading={setIsCarouselLoading} />

          {/* <Recents setIsRecentsLoading={setIsRecentsLoading} /> */}
          <SwiperEg setIsRecentsLoading={setIsRecentsLoading} />
          <GetNews />
          <Counter setIsCounterLoading={setIsCounterLoading} />
        </>
      )}

      <Imp />
      <div className="text-center p-5 w-100 mb-3" id="skew4">
        {/* <h1 className="text-dark" style={{ fontSize: 40 }}>
          COURSES
        </h1> */}
        <div className="courses-title">
          <h4 className="course-title text-light">COURSES</h4>
          <div className="courses-line" />
        </div>

        <div className="row w-100 text-center d-flex justify-content-center cardsss">
          <Link
            className="col-xl-3 col-sm-6 mb-5 cse-card shadow-lg m-2 rounded"
            to="/department/cse"
          >
            <div className="rounded py-5 px-4 bg-transparent">
              <CSELogo className="mb-3 cse-logo" width="100px" />
              <h5 className="mb-0 course-title">Computer Science</h5>
            </div>
          </Link>
          <Link
            className="col-xl-3 col-sm-6 mb-5 cse-card shadow-lg m-2"
            to="/department/mech"
          >
            <div className="rounded py-5 px-4 bg-transparent">
              <MechLogo className="mb-3 cse-logo" width="100px" height="80px" />
              <h5 className="mb-0 course-title">Mechanical</h5>
            </div>
          </Link>
          <Link
            className="col-xl-3 col-sm-6 mb-5 cse-card shadow-lg m-2"
            to="/department/civil"
          >
            <div className="rounded py-5 px-4 bg-transparent">
              <CivilLogo
                className="mb-3 cse-logo"
                width="100px"
                height="80px"
              />
              <h5 className="mb-0 course-title">Civil</h5>
            </div>
          </Link>
          <Link
            className="col-xl-3 col-sm-6 mb-5 cse-card shadow-lg m-2"
            to="/department/entc"
          >
            <div className="rounded py-5 px-4 bg-transparent">
              <ENTCLogo className="mb-3 cse-logo" width="100px" height="80px" />
              <h5 className="mb-0 course-title">E &amp; TC</h5>
            </div>
          </Link>
          <Link
            className="col-xl-3 col-sm-6 mb-5 cse-card shadow-lg m-2"
            to="/department/electrical"
          >
            <div className="rounded py-5 px-4 bg-transparent">
              <ElectLogo
                className="mb-3 cse-logo"
                width="100px"
                height="80px"
              />
              <h5 className="mb-0 course-title">Electrical</h5>
            </div>
          </Link>
        </div>
      </div>
      <ImgCarousel />
      <AboutHome />

      {/* <VidCarousel /> */}
      <Vidnewcarousel />

      <Recruters />
      <Testimo />
      <Newsletter />
    </Main>
  );
}

export default Home;
