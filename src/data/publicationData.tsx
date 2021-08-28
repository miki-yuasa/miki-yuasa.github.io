import { Award, Publication } from "../../@types";

export const journalPaperData: Publication[] = [
    {
        authors: ["Yuasa, M.", "Lyons, K.", "Franck, J. A."],
        year: 2021,
        month: 1,
        title: "Simulations of flow over a bio-inspired undulated cylinder with dynamically morphing topography	",
        journal: "Journal of Fluids and Structures",
        details: "",
        pending: true
    }
]

export const conferencePaperData: Publication[] = [
    {
        authors: ["Yuasa, M.", "Lyons, K.", "Franck, J. A."],
        year: 2020,
        title: "Simulations of bio-inspired undulated cylinders through dynamic morphing of surface topography",
        journal: "73rd Annual Meeting of American Physical Society Division of Fluid Dynamics",
        details: "Chicago, IL, United States",
        links: [
            {
                text: "Link",
                href: "http://meetings.aps.org/Meeting/DFD20/Session/U01.8"
            }
        ]
    }
];

export const posterData: Publication[] = [
    {
        authors: ["Yuasa, M.", "Lyons, K.", "Franck, J. A."],
        year: 2020,
        title: "Flow simulations of bio-inspired undulated cylinders through dynamic morphing of surface topography",
        journal: "Computing in Engineering Forum 2020 of Grainger Institute for Engineering",
        details: "Madison, WI, United States"
    },
    {
        authors: ["Yuasa, M."],
        year: 2018,
        title: "Save the world by discovering new asteroid",
        journal: "20th Annual Undergraduate Symposium at the University of Wisconsin-Madison",
        details: "Madison, WI, United States"
    }
];

export const awardData: Award[] = [
    {
        years: "2020",
        name: "Hilldale Undergraduate/Faculty Research Fellowship",
        amount: "$4,000"
    },
    {
        years: "2020",
        name: "Honorable Mention at Computing in Grainger Engineering Forum 2020",
        amount: "$30"
    },
    {
        years: "2018-2019",
        name: "Engineering Physics Department Scholarship",
        amount: "$1,000"
    },
    {
        years: "2018",
        name: "UW-Madison Undergraduate Scholarship for Summer Study",
        amount: "$1,500"
    },
    {
        years: "2017-2021",
        name: "Japan Student Services Organization Student Exchange Program (Undergraduate Scholarship for Degree Seeking Students)",
        amount: "$174,000 [18,200,000 JPY]"
    }
]