import React from "react";
import LabCard from "../Reusables/LabCard";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";

const Laboratories = () => {
  return (
    <Main className="container-lg w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Computer Science" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <h3 className="text-center">Infrastructure &amp; Laboratories</h3>
            <p className="text-center">
              All machines are enabled to work on various platforms like Windows
              and Linux. The labs have been scientifically designed to provide
              freedom of movement.
              <br />
              <br />
              CSE department consists of different laboratories listed below.
            </p>
            <div className="m-2">
              <LabCard
                labName="Computer Center Lab"
                labcost="15, 48,233"
                invoiceurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2Fcc_lab.pdf?alt=media&token=cea9f1e1-981a-4a5c-b68d-6ab4faaa7d5c"
                use="Uses for internet center."
                description="This lab is equipped with 30 systems of Dell OptiPlex Series With Intel I3 Processor, 3 Printers , 3 scanners and 1 projector. This is central lab of the Polytechnic consisting of DELL SERVER X206 acting as central ERP server."
                imageurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2FCSE1.jpg?alt=media&token=9b367970-7f04-4d6a-be75-8733763b3ead"
                itemno={0}
              />
            </div>

            <div className="m-2">
              <LabCard
                labName="Programming Lab"
                labcost="9,40,704.00"
                invoiceurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2FPRLABlab.pdf?alt=media&token=53e9aab3-7e47-40e6-aaac-06aa90c23844"
                use="Uses for programming subjects like C, Java, Databases etc"
                description="This lab is equipped with 24 systems of Dell OptiPlex Series With Intel I3 Processor with Software's Like C, Java, Oracle, VB 6.0"
                imageurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2FCSE2.jpg?alt=media&token=ebf0cb63-0a24-474e-b791-c9cb4bf6d076"
                itemno={1}
              />
            </div>

            <div className="m-2">
              <LabCard
                labName="Basic Workshop Lab"
                labcost="6,59,085.00"
                invoiceurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2Fbasic_lab.pdf?alt=media&token=9a98691b-ee91-4442-a523-70ec164740ac"
                use="Uses for computer hardware demonstration and hardware testing"
                description="This lab is equipped with 20 systems of Dell OptiPlex Series With Intel I3 Processor , 1 prionter with Hardware Material, Lan Tester, Crimping Tool."
                imageurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2FCSE3.jpg?alt=media&token=8f36fe93-6edc-4351-a47a-4d5fbc3a10fd"
                itemno={3}
              />
            </div>

            <div className="m-2">
              <LabCard
                labName="Network Lab"
                labcost="9,58,894.00"
                invoiceurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2FNET_lab.pdf?alt=media&token=14daba65-576e-4063-a22f-b523c06e5cef"
                use="Uses for networking related practical's, open source Red Hat Linux, SUSE Server products and database use."
                description="This lab is equipped with 24 systems of Dell OptiPlex Series with Intel I3 Processor , 24 Port Switch, UTP Cable's & Networking Ports, Sockets."
                imageurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2FCSE4.jpg?alt=media&token=fa209875-5153-4343-ab84-c8dde3759f86"
                itemno={4}
              />
            </div>

            <div className="m-2">
              <LabCard
                labName="Software Testing Lab"
                labcost="9,95,106.00"
                invoiceurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2FSWT_lab.pdf?alt=media&token=10ff3ff3-b6ed-4158-9726-6050ea444e46"
                use="Uses for programming subjects software testing and error handlings."
                description="This lab is equipped with 20 systems of Dell OptiPlex Series with Intel I3 Processor , Software's Like C, Java, Oracle products"
                imageurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2FCSE5.jpg?alt=media&token=aedcaf52-4ddd-49d5-820f-db92c10158a6"
                itemno={5}
              />
            </div>

            <div className="m-2">
              <LabCard
                labName="Linux Lab"
                labcost="10,39,630.00"
                invoiceurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2FLinux_lab.pdf?alt=media&token=c24e84e0-19fb-4d29-a1de-c418bd533239"
                use="Uses for Linux server practices and Linux programming subjects"
                description="This lab is equipped with 20 systems of Dell OptiPlex Series with Intel I3 Processor specially designed For Open Source, Linux server practical's and Linux programming."
                imageurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2FCSE6.jpg?alt=media&token=7f259866-97fc-4ce8-8148-2e5581301dfe"
                itemno={6}
              />
            </div>

            <div className="m-2">
              <LabCard
                labName="Programming Lab 1"
                labcost="10,76,380.00"
                invoiceurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2FPRLAB_lab1.pdf?alt=media&token=1708eab7-148c-40b8-b1ba-83e8dcd18021"
                use="Usesd for programming subjects like C, Java, Databases etc."
                description="This lab is equipped with 20 systems of Dell OptiPlex Series with Intel I3 Processor , software's Like C, Java, Oracle, VB 6.0"
                imageurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2FCSE7.jpg?alt=media&token=f739745b-0a0b-4143-8fea-9345bb6a196a"
                itemno={7}
              />
            </div>

            <div className="m-2">
              <LabCard
                labName="Language Lab"
                labcost="9,78,006.00 "
                invoiceurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2Flanguage_lab.pdf?alt=media&token=c60bf165-b167-4dc7-be23-751cc3a67741"
                use="Uses for communication skills"
                description="This lab is equipped with 20 systems of Dell OptiPlex Series with Intel I3 Processor , 1 Printer , 1 Projector , Language Lab Software with headphones"
                imageurl="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FLabs%2FCse%2FCSE8.jpg?alt=media&token=3052090e-72a4-496f-8176-3a7816e822e1"
                itemno={8}
              />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Laboratories;
