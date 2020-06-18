import React from "react"
import { Link } from "gatsby"
import { getTheme } from '@fluentui/react';

const theme = getTheme();

export default function Research() {
    return (
        <div id='research'
            class='sectionParent'>
            <div class='sectionHeader'>
                <h2 class='sectionHeader'>Research</h2>
            </div>
            <div class='sectionBody'>
                <p>I was widely interested in aerodynamics and collaborative unmanned vehicles in the context of integrated intelligent transportation where both aerial, ground, and marine automated vehicles require optimizations of the design in terms of fluid dynamics and controls on the interactions of vehicles. This interest led me to work in two laboratories: one is computational fluid dynamics lab, and the other is connected automated vehicles and highway lab.</p>
                <p>Some topics on which I'm working with Professor Jennifer Franck in the computational fluid dynamics lab are:
                   
                </p>
                <ol>
                        <li>Development and implementation of dynamic mesh generation algorithm for seal whiskers.</li>
                        <li>Development of Schwartz-Christoffel conformal mesh-generation method for 2D geometries.</li>
                    </ol>
            </div>
        </div>
    )
}