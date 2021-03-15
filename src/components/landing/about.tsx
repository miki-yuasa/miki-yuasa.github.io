import React from "react";
import { DefaultPalette } from "@fluentui/react";
import { StaticImage } from "gatsby-plugin-image";

export default function About() {
  return (
    <div className="idBox" id="about">
      <div className="sectionMaster">
        <div className="sectionParentAbout">
          <div
            className="sectionHeader"
            style={{ color: DefaultPalette.neutralLight }}
          >
            <h2 className="sectionHeader">About</h2>
          </div>
          <div className="profile">
            <StaticImage src="../../assets/profile.jpg" alt="profile_icon" style={{ borderRadius: "40px" }} />
          </div>
          <div
            className="sectionBody"
            style={{ color: DefaultPalette.neutralQuaternary }}
          >
            <form>
              <dl>
                <dt>Name:</dt>
                <dd>Mikihisa Yuasa</dd>
                <dt>School:</dt>
                <dd>
                  Senior undergraduate at the Department of
                  Engineering Mechanics, College of Engineering, University of
                  Wisconsin-Madison{" "}
                </dd>
                <dt>Labs:</dt>
                <dd>
                  Professor{" "}
                  <a
                    href="https://directory.engr.wisc.edu/ep/Faculty/Franck_Jennifer/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: DefaultPalette.neutralQuaternary }}
                  >
                    Jennifer Franck
                  </a>
                  's Computational Fluid Dynamics (CFD) Lab
                  <br />
                  Professor{" "}
                  <a
                    href="https://topslab.wisc.edu/about/people/bin-ran/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: DefaultPalette.neutralQuaternary }}
                  >
                    Bin Ran
                  </a>
                  's Connected Automated Vehicles and Highway (CAVH) Lab
                </dd>
                <dt>Keywords:</dt>
                <dd>
                  Dynamic Control, Computational Fluid Dynamics, Mesh
                  Generation, Flow Control, Connected Automated Vehicles and
                  Highway, Aerial/Ground Unmanned Vehicles, Intelligent
                  Transportation, Computing, Biomimicry, Harbor Seal Whisker,
                  Conformal Mapping
                </dd>
                <dt>Email:</dt>
                <dd>mikihisa(dot)yuasa(at)wisc(dot)edu</dd>
                <dt>CV:</dt>
                <dd>
                  <a
                    href='/CV_Mikihisa_Yuasa.pdf'
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: DefaultPalette.neutralLight }}
                  >
                    <strong>Download from Here!</strong>
                  </a>
                </dd>
              </dl>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
