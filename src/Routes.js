import React from "react";
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import aboutLogo from "./Screens/About/logo";
import aboutSGP from "./Screens/About/sgp";
import aboutPhilosophy from "./Screens/About/philosophy";
import aboutVision from "./Screens/About/vision";
import aboutQuality from "./Screens/About/quality";
import aboutAffCert from "./Screens/About/affiliation";
import aboutDifferentiator from "./Screens/About/differentiator";
import aboutAchievement from "./Screens/About/achievement";
import managementTrust from "./Screens/Management/trust";
import managementPrincipal from "./Screens/Management/principal";
import managementBoard from "./Screens/Management/board";
import managementChairman from "./Screens/Management/chairman";
import managementDirectors from "./Screens/Management/directors";
import managementGovern from "./Screens/Management/govern";
import infrastructureAbout from "./Screens/Infrastructure/about";
import ClassRoom from "./Screens/Infrastructure/classroom";
import Overview from "./Screens/Infrastructure/Overview";
import workshop from "./Screens/Infrastructure/workshop";
import auditorium from "./Screens/Infrastructure/auditorium";
import foodcourt from "./Screens/Infrastructure/foodcourt";
import conference from "./Screens/Infrastructure/conference";
import amphi from "./Screens/Infrastructure/amphi";
import hostel from "./Screens/Facilities/hostel";
import laboratories from "./Screens/Facilities/laboratories";
import gymnasium from "./Screens/Facilities/gymnasium";
import pool from "./Screens/Facilities/pool";
import ground from "./Screens/Facilities/ground";
import tennis from "./Screens/Facilities/tennis";
import more from "./Screens/Facilities/more";
import * as firebase from "firebase";
import Activities from "./Screens/Departments/CSE/Activities";
import SocialResponsiblities from "./Screens/About/SocialResponsiblities";
import ImageGal from "./Screens/About/components/ImageGallery";
import MoreUpdates from "./ReusableComponents/MoreUpdates";
import secretary from "./Screens/Management/secretary";
import trustee from "./Screens/Management/trustee";
import StudentHome from "./Screens/Student/home";
import ComputerScience from "./Screens/Departments/CSE/ComputerScience";
import HODDesk from "./Screens/Departments/CSE/HODDesk";
import VisionMission from "./Screens/Departments/CSE/VisionMission";
import Outcomes from "./Screens/Departments/CSE/Outcomes";
import StaffProfile from "./Screens/Departments/CSE/StaffProfile";
import TechnicalStaff from "./Screens/Departments/CSE/TechnicalStaff";
import Suggest from "./Screens/Extra/Suggest";
import Laboratories from "./Screens/Departments/CSE/Laboratories";
import Uploadimage from "./Screens/Student/uploadimage";
import Achivements from "./Screens/Departments/CSE/Achivements";
import ElectronicsNTC from "./Screens/Departments/ETC/ElectronicsNTC";
import ETCHODDesk from "./Screens/Departments/ETC/ETCHODDesk";
import ETCVisionMission from "./Screens/Departments/ETC/ETCVisionMission";
import ETCOutcomes from "./Screens/Departments/ETC/ETCOutcomes";
import { useState } from "react";
import "./Routes.css";
import img from "./ReusableComponents/CSS/sguni.jpg";
import ETCStaffProfile from "./Screens/Departments/ETC/ETCStaffProfile";
import ETCTechStaff from "./Screens/Departments/ETC/ETCTechStaff";

import AcademicCalender from "./Screens/Departments/CSE/AcademicCalender";
import NotFound from "./ReusableComponents/NotFound";
import AddContact from "./Screens/Contact/Contact";
import Administrative from "./Screens/Contact/Administrative";
import Admissioncell from "./Screens/Contact/Admissioncell";
import AcademicCalendars from "./Screens/Academics/Academic Calendar/AcademicCalendars";
import Comittee from "./Screens/Academics/Comittee";
import VishakhaCell from "./Screens/Academics/VishakhaCell";
import Atrocity from "./Screens/Academics/AtrocityCommittee";
import Grievence from "./Screens/Academics/GrievenceCommittee";
import Admission from "./Screens/Admission/Admission";
import Publications from "./Screens/Departments/CSE/Publications";
import Civil from "./Screens/Departments/Civil/Civil";
import CivilHODDesk from "./Screens/Departments/Civil/HODDesk";
import CivilVisionMission from "./Screens/Departments/Civil/VisionMission";
import CivilOutcomes from "./Screens/Departments/Civil/Outcomes";
import CivilStaffProfile from "./Screens/Departments/Civil/StaffProfile";
import CivilTechnicalStaff from "./Screens/Departments/Civil/TechnicalStaff";
import CivilLaboratories from "./Screens/Departments/Civil/Laboratories";
import CivilAcademicCalender from "./Screens/Departments/Civil/AcademicCalender";
import CivilAchivements from "./Screens/Departments/Civil/Achivements";
import CivilActivities from "./Screens/Departments/Civil/Activities";
import CivilPublications from "./Screens/Departments/Civil/Publications";
import EntcAchivements from "./Screens/Departments/ETC/Achivements";
import EntcActivities from "./Screens/Departments/ETC/Activities";
import EntcAcademicCalender from "./Screens/Departments/ETC/AcademicCalender";
import EntcPublications from "./Screens/Departments/ETC/Publications";
import ElecticalAcademicCalender from "./Screens/Departments/Electical/AcademicCalender";
import ElecticalAchivements from "./Screens/Departments/Electical/Achivements";
import ElecticalActivities from "./Screens/Departments/Electical/Activities";
import Electrical from "./Screens/Departments/Electical/Electrical";
import ElectricalHODDesk from "./Screens/Departments/Electical/HODDesk";
import ElectricalOutcomes from "./Screens/Departments/Electical/Outcomes";
import ElectricalStaffProfile from "./Screens/Departments/Electical/StaffProfile";
import ElectricalTechstaff from "./Screens/Departments/Electical/TechStaff";
import ElectricalPublications from "./Screens/Departments/Electical/Publications";
import ElectricalVisionMission from "./Screens/Departments/Electical/VisionMission";
import Mech from "./Screens/Departments/Mech/Mec";
import MechanicalHODDesk from "./Screens/Departments/Mech/HODD";
import MechanicalVisionMission from "./Screens/Departments/Mech/Vismissi";
import MechanicalOutcomes from "./Screens/Departments/Mech/Out";
import MechanicalStaffProfile from "./Screens/Departments/Mech/Staff";
import MechanicalTechnicalStaff from "./Screens/Departments/Mech/Tech";
import MechanicalAchivements from "./Screens/Departments/Mech/Achi";
import MechanicalActivities from "./Screens/Departments/Mech/Acti";

import MechanicalPublications from "./Screens/Departments/Mech/Pub";
import MechAcademicCalender from "./Screens/Departments/Mech/AC";
import FyHODDesk from "./Screens/Departments/First year/HODDesk";
import FyTechstaff from "./Screens/Departments/First year/TechStaff";
import FyStaffProfile from "./Screens/Departments/First year/StaffProfile";
import FyActivities from "./Screens/Departments/First year/Activities";
import FyLaboratories from "./Screens/Departments/First year/Laboratories";
import Fy from "./Screens/Departments/First year/Fy";
import AboutLibrary from "./Screens/Departments/Library/AboutLibrary";
import EJournals from "./Screens/Departments/Library/EJournals";
import LibraryTeam from "./Screens/Departments/Library/LibraryTeam";
import BookBank from "./Screens/Departments/Library/BookBank";
import ReportnAchi from "./Screens/Departments/Library/ReportnAchi";
import AdminStaff from "./Screens/Departments/Admin/StaffProfile";
import PlacementReports from "./Screens/Departments/Placements/PlacementReports";
import PlacementOfficer from "./Screens/Departments/Placements/PlacementOfficer";
import Result from "./Screens/Academics/Result";
import Letter from "./Screens/Academics/Letter";
import AuditReports from "./Screens/Academics/AuditReports";
import { useEffect } from "react";

var firebaseConfig = {
  apiKey: "AIzaSyDVeLkjATQjtXIflpTDeiXm_aF1Zhi2JeY",
  authDomain: "sgpoly-86d3b.firebaseapp.com",
  databaseURL: "https://sgpoly-86d3b.firebaseio.com",
  projectId: "sgpoly-86d3b",
  storageBucket: "sgpoly-86d3b.appspot.com",
  messagingSenderId: "458948463598",
  appId: "1:458948463598:web:f208ec769aef51d6a01cff",
  measurementId: "G-87WB112H7S",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const Routes = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalData, setModalData] = useState({
    imageURL: "",
    moreInfoURL: "",
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const getModalData = () => {
  //   firebase
  //     .database()
  //     .ref("modal")
  //     .on("value", (snapshot) => {
  //       if (snapshot.val()) {
  //         setModalData({
  //           ...modalData,
  //           imageURL: snapshot.val().imageURL,
  //           moreInfoURL: snapshot.val().moreInfoURL,
  //         });
  //         console.log(snapshot.val().moreInfoURL);
  //         setIsModalOpen(true);
  //       }
  //     });
  // };

  // useEffect(() => {
  //   getModalData();
  // }, []);

  return (
    <BrowserRouter basename="/">
      <div
        className={isModalOpen ? "modal" : "modal closed-modal"}
        id="modal"
        onClick={(e) => {
          setIsModalOpen(false);
          e.stopPropagation();
        }}
      >
        <div
          className="modal-content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="close-btn" onClick={closeModal}>
            <button className="btn btn-danger p-2">
              <i aria-hidden="true" className="fas fa-times-circle fa-2x"></i>
            </button>
          </div>
          {/* <div className="more-info">
            <a
              target="blank"
              href="./img/modal.jpg"
              className="btn btn-info rounded"
            >
              More Info
            </a>
          </div> */}
          <img
            src={require("./img/modal.jpg")}
            alt="modal"
            className="modal-img img-fluid"
          />
        </div>
      </div>

      <Switch>
        <Route path="/" exact component={Home} />

        {/* =================================Student routes=============================== */}
        <Route path="/students" exact component={StudentHome} />
        <Route path="/students/uploadimage" exact component={Uploadimage} />
        <Route path="/suggest" exact component={Suggest} />

        {/* --------------------About------------------------------------------------*/}
        <Route path="/about/logo" exact component={aboutLogo} />
        <Route path="/about/sgp" exact component={aboutSGP} />
        <Route path="/about/philosophy" exact component={aboutPhilosophy} />
        <Route path="/about/vision" exact component={aboutVision} />
        <Route path="/about/quality" exact component={aboutQuality} />
        <Route path="/about/Affiliation" exact component={aboutAffCert} />
        <Route
          path="/about/differentiator"
          exact
          component={aboutDifferentiator}
        />
        <Route path="/about/achievements" exact component={aboutAchievement} />
        <Route
          path="/about/socialresponsiblities"
          exact
          component={SocialResponsiblities}
        />

        {/* --------------------Management------------------------------------------------*/}

        <Route path="/management/trust" exact component={managementTrust} />
        <Route path="/management/board" exact component={managementBoard} />
        <Route
          path="/management/chairman"
          exact
          component={managementChairman}
        />
        <Route path="/management/secretary" exact component={secretary} />
        <Route path="/management/trustee" exact component={trustee} />
        <Route
          path="/management/principal"
          exact
          component={managementPrincipal}
        />
        {/* <Route
          path="/management/directors"
          exact
          component={managementDirectors}
        /> */}
        <Route path="/management/govern" exact component={managementGovern} />

        {/* --------------------Academics------------------------------------------------*/}
        <Route
          path="/academics/calendars"
          exact
          component={AcademicCalendars}
        />
        <Route path="/academics/results" exact component={Result} />
        <Route path="/academics/newsletter" exact component={Letter} />
        <Route path="/academics/auditreports" exact component={AuditReports} />

        {/* --------------------Departments------------------------------------------------*/}
        {/* --------------------FY------------------------------------------------*/}

        <Route path="/department/fy" exact component={Fy} />
        <Route path="/department/fy/hoddesk" exact component={FyHODDesk} />
        <Route path="/department/fy/labs" exact component={FyLaboratories} />

        <Route
          path="/department/fy/teaching-staff"
          exact
          component={FyStaffProfile}
        />
        <Route
          path="/department/fy/technical-staff"
          exact
          component={FyTechstaff}
        />

        <Route
          path="/department/fy/activities"
          exact
          component={FyActivities}
        />

        {/* --------------------CSE------------------------------------------------*/}

        <Route path="/department/cse" exact component={ComputerScience} />
        <Route path="/department/cse/hoddesk" exact component={HODDesk} />
        <Route
          path="/department/cse/vision-mission"
          exact
          component={VisionMission}
        />
        <Route path="/department/cse/outcomes" exact component={Outcomes} />
        <Route
          path="/department/cse/teaching-staff"
          exact
          component={StaffProfile}
        />
        <Route
          path="/department/cse/technical-staff"
          exact
          component={TechnicalStaff}
        />
        <Route path="/department/cse/labs" exact component={Laboratories} />
        <Route
          path="/department/cse/achivements"
          exact
          component={Achivements}
        />
        <Route path="/department/cse/activities" exact component={Activities} />
        <Route
          path="/department/cse/academic-calender"
          exact
          component={AcademicCalender}
        />
        <Route
          path="/department/cse/publications"
          exact
          component={Publications}
        />

        {/* --------------------Electical------------------------------------------------*/}
        <Route path="/department/electrical" exact component={Electrical} />
        <Route
          path="/department/electrical/academic-calender"
          exact
          component={ElecticalAcademicCalender}
        />
        <Route
          path="/department/electrical/achivements"
          exact
          component={ElecticalAchivements}
        />
        <Route
          path="/department/electrical/activities"
          exact
          component={ElecticalActivities}
        />
        <Route
          path="/department/electrical/hoddesk"
          exact
          component={ElectricalHODDesk}
        />
        <Route
          path="/department/electrical/outcomes"
          exact
          component={ElectricalOutcomes}
        />
        <Route
          path="/department/electrical/teaching-staff"
          exact
          component={ElectricalStaffProfile}
        />
        <Route
          path="/department/electrical/technical-staff"
          exact
          component={ElectricalTechstaff}
        />
        <Route
          path="/department/electrical/publications"
          exact
          component={ElectricalPublications}
        />
        <Route
          path="/department/electrical/vision-mission"
          exact
          component={ElectricalVisionMission}
        />

        {/* --------------------E & TC------------------------------------------------*/}
        <Route path="/department/entc" exact component={ElectronicsNTC} />
        <Route path="/department/entc/hoddesk" exact component={ETCHODDesk} />
        <Route
          path="/department/entc/publications"
          exact
          component={EntcPublications}
        />
        <Route
          path="/department/entc/academic-calender"
          exact
          component={EntcAcademicCalender}
        />
        <Route
          path="/department/entc/activities"
          exact
          component={EntcActivities}
        />
        <Route
          path="/department/entc/achivements"
          exact
          component={EntcAchivements}
        />
        <Route
          path="/department/entc/vision-mission"
          exact
          component={ETCVisionMission}
        />
        <Route path="/department/entc/outcomes" exact component={ETCOutcomes} />
        <Route
          path="/department/entc/teaching-staff"
          exact
          component={ETCStaffProfile}
        />
        <Route
          path="/department/entc/teacnical-staff"
          exact
          component={ETCTechStaff}
        />

        {/* --------------------MECH------------------------------------------------*/}

        <Route path="/department/mech" exact component={Mech} />
        <Route
          path="/department/mech/hod"
          exact
          component={MechanicalHODDesk}
        />
        <Route
          path="/department/mech/vision-mission"
          exact
          component={MechanicalVisionMission}
        />
        <Route
          path="/department/mech/outcomes"
          exact
          component={MechanicalOutcomes}
        />
        <Route
          path="/department/mech/teaching-staff"
          exact
          component={MechanicalStaffProfile}
        />
        <Route
          path="/department/mech/technical-staff"
          exact
          component={MechanicalTechnicalStaff}
        />
        <Route
          path="/department/mech/achivements"
          exact
          component={MechanicalAchivements}
        />
        <Route
          path="/department/mech/activities"
          exact
          component={MechanicalActivities}
        />
        <Route
          path="/department/mech/academic-calender"
          exact
          component={MechAcademicCalender}
        />
        <Route
          path="/department/mech/publications"
          exact
          component={MechanicalPublications}
        />

        {/* --------------------CIVIL------------------------------------------------*/}
        <Route path="/department/civil" exact component={Civil} />
        <Route path="/department/civil/hod" exact component={CivilHODDesk} />
        <Route
          path="/department/civil/publications"
          exact
          component={CivilPublications}
        />
        <Route
          path="/department/civil/activities"
          exact
          component={CivilActivities}
        />
        <Route
          path="/department/civil/achivements"
          exact
          component={CivilAchivements}
        />
        <Route
          path="/department/civil/academic-calender"
          exact
          component={CivilAcademicCalender}
        />
        <Route
          path="/department/civil/labs"
          exact
          component={CivilLaboratories}
        />
        <Route
          path="/department/civil/technical-staff"
          exact
          component={CivilTechnicalStaff}
        />
        <Route
          path="/department/civil/teaching-staff"
          exact
          component={CivilStaffProfile}
        />
        <Route
          path="/department/civil/outcomes"
          exact
          component={CivilOutcomes}
        />
        <Route
          path="/department/civil/vision-mission"
          exact
          component={CivilVisionMission}
        />

        {/* ---------------------------------------Library------------------------------------------ */}

        <Route path="/department/library" exact component={AboutLibrary} />
        <Route
          path="/department/library/ejournals"
          exact
          component={EJournals}
        />
        <Route path="/department/library/team" exact component={LibraryTeam} />
        <Route path="/department/library/bookbank" exact component={BookBank} />
        <Route
          path="/department/library/reportnachievement"
          exact
          component={ReportnAchi}
        />

        {/* ---------------------------------------Admin------------------------------------------ */}

        <Route path="/department/admin/profile" exact component={AdminStaff} />

        {/* ---------------------------------------Placement------------------------------------------ */}

        <Route path="/placement/report" exact component={PlacementReports} />
        <Route path="/placement/officer" exact component={PlacementOfficer} />

        {/* --------------------Infrastructre------------------------------------------------*/}

        <Route
          path="/infrastructure/about"
          exact
          component={infrastructureAbout}
        />
        <Route path="/infrastructure/overview" exact component={Overview} />
        <Route path="/infrastructure/classroom" exact component={ClassRoom} />
        <Route path="/infrastructure/workshop" exact component={workshop} />
        <Route path="/infrastructure/auditorium" exact component={auditorium} />
        <Route path="/infrastructure/foodcourt" exact component={foodcourt} />
        <Route path="/infrastructure/conference" exact component={conference} />
        <Route path="/infrastructure/amphi" exact component={amphi} />

        {/* --------------------FACILITIES------------------------------------------------*/}

        <Route path="/facilities/hostel" exact component={hostel} />
        <Route path="/facilities/gymnasium" exact component={gymnasium} />
        <Route path="/facilities/pool" exact component={pool} />
        <Route path="/facilities/ground" exact component={ground} />
        <Route path="/facilities/tennis" exact component={tennis} />
        <Route path="/facilities/more" exact component={more} />
        <Route path="/facilities/laboratories" exact component={laboratories} />

        {/* --------------------cbbbdbtbc------------------------------------------------*/}

        <Route path="/images" exact component={ImageGal} />

        <Route path="/updates/viewmore" exact component={MoreUpdates} />
        <Route path="/contact/admissioncell" exact component={Admissioncell} />
        <Route
          path="/contact/administrative"
          exact
          component={Administrative}
        />

        <Route path="/contact" exact component={AddContact} />

        {/* ====================Admissions=========== */}
        <Route path="/admissions" exact component={Admission} />

        {/* =============Committee================ */}

        <Route path="/academics/committee" exact component={Comittee} />
        <Route
          path="/academics/committee/grievence"
          exact
          component={Grievence}
        />
        <Route
          path="/academics/committee/vishakhacell"
          exact
          component={VishakhaCell}
        />
        <Route
          path="/academics/committee/atrocity"
          exact
          component={Atrocity}
        />

        <Route component={NotFound} />

        {/*============================ Admin Routes goes here =====================*/}
        {/* <AdminRoute path="/admin" exact component={Dashboard} />
        <AdminRoute path="/admin/add/staff" exact component={AddStaffMember} />
        <AdminRoute path="/admin/add/story" exact component={AddStory} />
        <AdminRoute
          path="/admin/manage/highlights"
          exact
          component={ManageHighlights}
        />
        <AdminRoute
          path="/admin/manage/achivements"
          component={ManageAchivements}
        />
        <AdminRoute
          path="/admin/manage/activities"
          component={ManageActivities}
        />
        <Route path="/admin/signin" exact component={Login} />
        <AdminRoute path="/admin/suggest" exact component={SuggestAdmin} />
        <AdminRoute path="/admin/contact" exact component={ContactNumber} />
        <AdminRoute path="/admin/studpics" exact component={Studpics} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
