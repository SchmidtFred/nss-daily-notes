const searchTerm = "push";
const notes = [

    {
        id: 1,
        subject: "Learned about data structures and types in JavaScript",
        date: "11/16/2021",
        feeling: "Pretty good, it is familiar to me from the prework",
        timeSpent: 25
    },

    {
        id: 2,
        subject: "Filler to avoid bug",
        date: "filler",
        feeling: "fillery",
        timeSpent: 0
    }
]

const noteAboutToday = {
    subject: "Learned about the push function.",
    date: "11/16/2021",
    feeling: "ecstatic",
    timeSpent: 5
}

const createNote = (noteArray, note) => {
    note.id = noteArray.length + 1;
    note.dateCreated = Date();
    noteArray.push(note);
}

const moreNewerNote = {
    subject: "learned how to make functions to add a specific id onto an object",
    date: "11/17/2021",
    feeling: "nice",
    timeSpent: 30
}

createNote(notes, noteAboutToday);
createNote(notes, moreNewerNote);

console.log(notes);
// for (const note of notes) {
//     if (note.subject.indexOf(searchTerm) != -1) {
//     console.log(`On ${note.date},
//      I ${note.subject} and felt ${note.feeling}`);
//     }
// };