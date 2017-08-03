import format from "date-fns/format";

export const Posts = [
  {
    tag: "Javascript",
    title: "Lorem ipsum ",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    moment: format(new Date(2017, 11, 11), "MM/DD/YYYY")
  },
  {
    tag: "React",
    title: "Lorem ipsum ",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    moment: format(new Date(2017, 1, 11), "MM/DD/YYYY")
  },
  {
    tag: "React Native",
    title: "Lorem ipsum",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    moment: format(new Date(2017, 5, 25), "MM/DD/YYYY")
  }
];

export const Nav = `<p> One </p>
  <p> Two </p>
  <p> Three </p>`