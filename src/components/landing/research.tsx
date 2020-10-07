import React from "react";

import SectionTemplate from "../../templates/sectionTemplate";
import "../layout.scss";

export default function Research() {
  return (
    <SectionTemplate title="Research">
      <p>
        I was widely interested in aerodynamics and collaborative unmanned
        vehicles in the context of integrated intelligent transportation where
        all the aerial, ground, and marine automated vehicles require
        optimizations of the design in terms of fluid dynamics and controls on
        the interactions of vehicles. This interest led me to work in two
        laboratories: one is computational fluid dynamics lab, and the other is
        connected automated vehicles and highway lab.
      </p>
      <p>
        Some topics on which I have worked with Professor Jennifer Franck in the
        CFD lab are:
      </p>
      <ol>
        <li>
          Dynamic Mesh Generation: developed and implemented a dynamic mesh
          generation library for harbor seal whiskers for a CFD solver
          (OpenFOAM).
        </li>
        <li>
          Flow Control: evaluated the influece of geometry transformation of
          harbor seal whiskers on hydrodynamic reactions.
        </li>
        <li>
          Comformal Mapping: developed a mesh-generation library using
          Schwartz-Christoffel conformal mapping for 2D geometries on MATLAB
          <sup>®</sup> .
        </li>
      </ol>
      <p>
        Another set of topics I have worked with Professor Bin Ran in the CAVH
        lab are:
      </p>
      <ol>
        <li>
          Mixed Traffic: built simulation models to evaluate how platooned
          automated vehicles can improve the network capacity
        </li>
        <li>
          Car-following Model: investigated the way to dynamically assign costs
          for indivicual vehicles to join and leave platoons.
        </li>
        <li>
          Weather Condition: simulated how the network capacity of highway can
          change under the snow.
        </li>
      </ol>
    </SectionTemplate>
  );
}
