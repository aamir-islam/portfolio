function getDateDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const yearDiff = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();

  if (yearDiff === 0 && monthDiff === 0) {
    return "less than a month";
  } else {
    const yearString = yearDiff > 1 ? `${yearDiff} years` : `${yearDiff} year`;
    const monthString =
      monthDiff > 1 ? `${monthDiff} months` : `${monthDiff} month`;

    if (yearDiff === 0) {
      return monthString;
    } else if (monthDiff === 0) {
      return yearString;
    } else {
      return `${yearString} ${monthString}`;
    }
  }
}

const data = [
  {
    jobTitle: "SDE - 1",
    company: "SCALEREAL TECHNOLOGIES PVT. LTD",
    timeSpan: "May 2022 - Current..",
    time: getDateDifference(new Date("May 2022"), new Date()),
    technicalSkills: [
      "Javascript",
      "React.js",
      "Redux",
      "Redux-thunk",
      "RTK-queries",
      "Axios",
      "Bootstrap",
      "SCSS",
      "CSS",
      "HTML",
      "Styled-components",
    ],
    Responsibilities: [
      "Building reuseable components",
      "Logic building",
      "Responsive UI building",
      "Designing",
      "Web Performance",
      "Optimizing applications",
    ],
  },
  {
    jobTitle: "SDE - Internship",
    company: "YUWAITING TECHNOLOGIES PVT LTD",
    timeSpan: "Nov 2021 - Apr 2022",
    time: "6 Months",
    technicalSkills: ["Javascript", "React.js", "SCSS", "CSS", "HTML"],
    Responsibilities: ["Logic building", "Responsive UI building", "Designing"],
  },
];

export default data;
