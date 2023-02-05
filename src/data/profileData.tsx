import { Profile } from '../../@types'

export const profileData: Profile = {
    name: 'Mikihisa Yuasa',
    affiliation: 'Ph.D. student at the Department of Aerospace Engineering, University of Illinois Urbana-Champaign',
    labs: [
        {
            name: 'Tran Research Group',
            pi: 'Huy Tran',
            piTitle: 'Professor',
            href: 'https://sites.google.com/illinois.edu/tran-aerospace/home',
            affiliation: 'Department of Aerospace Engineering, University of Illinois Urbana-Champaign',
            workingStatus: 'current'
        },
        {
            name: 'Computational Flow Physics and Modeling Lab',
            pi: 'Jennifer Franck',
            piTitle: 'Professor',
            href: 'https://cfd.engr.wisc.edu/',
            affiliation: 'Department of Engineering Physics, University of Wisconsin-Madison',
            workingStatus: 'previous'
        },
        {
            name: 'Connected Automated Vehicles and Highway (CAVH) Lab',
            pi: 'Bin Ran',
            piTitle: 'Professor',
            href: 'https://directory.engr.wisc.edu/cee/Faculty/Ran_Bin/',
            affiliation: 'Department of Civil and Environmental Engineering, University of Wisconsin-Madison',
            workingStatus: 'previous'
        }
    ],
    keywords: 'Deep Reinforcement Learning, Safe & Verifiable Reinforcement Learning, Multi-Agent Reinforcement Learning, Urban Air Mobility, Search-and-Rescure, Connected Automated Vehicles and Highway, Aerial/Ground Unmanned Vehicles, Intelligent Transportation, Computing,Dynamic Control, Computational Fluid Dynamics, Mesh Generation, Flow Control,  Biomimicry, Harbor Seal Whisker, Conformal Mapping',
    email: 'myuasa2(at)illinois(dot)edu'
}