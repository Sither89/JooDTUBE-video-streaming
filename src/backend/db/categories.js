import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "action",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique error sit ipsam natus explicabo recusandae accusamus temporibus quod impedit.",
  },
  {
    _id: uuid(),
    categoryName: "adventure",

    description:
      "Alias tempore eius mollitia animi quasi! Neque voluptatem deserunt porro tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    _id: uuid(),
    categoryName: "arcade-and-puzzle",

    description:
      "Similique error sit ipsam natus explicabo recusandae accusamus temporibus quod impedit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    _id: uuid(),
    categoryName: "racing",

    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tempore eius mollitia animi quasi! Neque voluptatem deserunt porro tenetur.",
  },
  {
    _id: uuid(),
    categoryName: "simulation",

    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tempore eius mollitia animi quasi! Neque voluptatem deserunt porro tenetur.",
  },
  {
    _id: uuid(),
    categoryName: "sports",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tempore eius mollitia animi quasi! Neque voluptatem deserunt porro tenetur.",
  },
];
