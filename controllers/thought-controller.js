const {thought, user} = require("../models");
const thoughtController = {
getAllThought(res, req) {
     Thought.find({})
     .populate({
         path: "reactions",
         select: "-__v",
         })
     .select("-__v")
     .sort({ _id: -1 })
     .then((dbThoughtData) => res.json(dbThoughtData))
     .catch((err) => {
         res.status(400).json(err);
         });
}},

getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
     .populate({
        path: 'reactions',
        select: '-__v'
})
     .select('-__v')
     .sort({ _id: -1 })
     .then(dbThoughtData => {
         if (!dbThoughtData) {
     res.status(404).json({ message: 'No valid thought found with this id!' });
     return;
}
     res.json(dbThoughtData);
})
     .catch(err => {
         console.log(err);
         res.sendStatus(400);
      });
}

module.exports = thoughtController;
