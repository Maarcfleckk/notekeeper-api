import { generatePrefixedID } from "../utils/index.js";

const STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in progress",
  DONE: "done",
};

const notes = [
  {
    _id: generatePrefixedID(),
    name: "Walk the dog",
    description: "Go to the park",
    important: false,
    status: STATUS.PENDING,
    dueDate: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
    created_at: Date.now(),
  },
  {
    _id: generatePrefixedID(),
    name: "Clean the house",
    description: "Vacuum, dust, and tidy up",
    important: true,
    status: STATUS.IN_PROGRESS,
    dueDate: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
    created_at: Date.now(),
  },
  {
    _id: generatePrefixedID(),
    name: "Read a book",
    description: "Choose from the library",
    important: false,
    status: STATUS.DONE,
    dueDate: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
    created_at: Date.now(),
  },
  {
    _id: generatePrefixedID(),
    name: "Exercise",
    description: "Go for a run or hit the gym",
    important: true,
    status: STATUS.PENDING,
    dueDate: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
    created_at: Date.now(),
  },
  {
    _id: generatePrefixedID(),
    name: "Grocery shopping",
    description: "Buy vegetables, fruits, and milk",
    important: true,
    status: STATUS.IN_PROGRESS,
    dueDate: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
    created_at: Date.now(),
  },
  {
    _id: generatePrefixedID(),
    name: "Call mom",
    description: "Check in and see how she's doing",
    important: true,
    status: STATUS.DONE,
    dueDate: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
    created_at: Date.now(),
  },
  {
    _id: generatePrefixedID(),
    name: "Finish project report",
    description: "Complete the final draft",
    important: true,
    status: STATUS.PENDING,
    dueDate: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
    created_at: Date.now(),
  },
  {
    _id: generatePrefixedID(),
    name: "Pay bills",
    description: "Electricity and water bills",
    important: true,
    status: STATUS.IN_PROGRESS,
    dueDate: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
    created_at: Date.now(),
  },
  {
    _id: generatePrefixedID(),
    name: "Plan weekend trip",
    description: "Decide on the destination and itinerary",
    important: false,
    status: STATUS.DONE,
    dueDate: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
    created_at: Date.now(),
  },
  {
    _id: generatePrefixedID(),
    name: "Study for exams",
    description: "Review all the subjects",
    important: true,
    status: STATUS.PENDING,
    dueDate: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
    created_at: Date.now(),
  }
];


export default notes;
