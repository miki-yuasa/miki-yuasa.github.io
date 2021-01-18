import { Repo } from "../../@types";

const repoData: Repo[] = [
  {
    onClickHref: "https://github.com/miki-yuasa/miki-yuasa.github.io",
    name: "miki-yuasa.github.io",
    description: "Development repository for this personal portfolio website.",
    noAccess: false,
  },
  {
    name: "modSealDisplacement",
    description:
      "Dynamic mesh-generation around harbor seal whiskers for OpenFOAM' s PIMPLE solver.",
    noAccess: true,
  },
  {
    onClickHref: "https://bitbucket.org/mikyu/modseal_sample_case/",
    name: "modSeal_sample_case",
    description:
      "Sample case for dynamic mesh-generation by modSealDisplacement library.",
    noAccess: false,
  },
  {
    onClickHref: "https://bitbucket.org/mikyu/whisk_geo",
    name: "whisker_geo",
    description: "MATLAB prototype of modSealDisplacement.",
    noAccess: false,
  },
  {
    name: "sc_airfoil",
    description:
      "Optimization project for Schwartz-Christoffel mapping and mesh-generation for airfoil.",
    noAccess: true,
  },
  {
    onClickHref: "https://bitbucket.org/mikyu/sc_py/",
    name: "sc_py",
    description:
      "Porting Schwartz-Christoffle toolbox for airfoils witten in MATLAB to Python.",
    noAccess: false,
  },
  {
    name: "platooning_beltline_sim",
    description:
      "Script used for platooning simulation for Belitline highway on Vissim.",
    noAccess: true,
  },
  {
    name: "beltline_simulation",
    description: "Vissim project used for Beltline simulation under snow.",
    noAccess: true,
  },
];

export function getRepoData() {
  return repoData;
}
