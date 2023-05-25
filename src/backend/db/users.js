import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Saket",
    lastName: "Kumar",
    avatarURL:
      "https://res.cloudinary.com/ddory4nqe/image/upload/v1684911554/samples/people/bicycle.jpg",
    username: "saketkum11",
    password: "saket147",
    bio: "Software developer",
    website: "www.google.com",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Anish",
    lastName: "Kumar",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1315352003468427264/Q5l6KmxO_400x400.jpg",
    username: "anish654",
    password: "anish123",
    bio: "Full Software developer",
    website: "www.google.com",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ritesh",
    lastName: "Kumar",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1656475534073954304/W74wmj6I_200x200.jpg",
    username: "ritesh789",
    password: "ritesh123",
    bio: "Java developer",
    website: "www.google.com",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Manish",
    lastName: "Pandey",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1650913156959551509/y4l4PG1F_200x200.jpg",
    username: "manish159",
    password: "manish123",
    bio: "Java developer",
    website: "www.google.com",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Lia",
    lastName: "",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1604149688713764865/ApLFxkyB_400x400.jpg",
    username: "lia123",
    password: "lia123",
    bio: "mobile developer",
    website: "www.google.com",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
