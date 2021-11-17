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
    id: 3,
    subject: "Learned about the push function.",
    date: "11/16/2021",
    feeling: "ecstatic",
    timeSpent: 5
}

notes.push(noteAboutToday);

for (const note of notes) {
    if (note.subject.indexOf(searchTerm) != -1) {
    console.log(`On ${note.date},
     I ${note.subject} and felt ${note.feeling}`);
    }
};