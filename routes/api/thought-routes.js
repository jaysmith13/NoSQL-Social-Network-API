const router = require("express").Router();
const {
  getAllThought,
  getSingleThought,
  createThought,
  RemoveThought,
  updateThought,
  createReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").get(getAllThought).post(createThought);

// /api/thoughts/:id
router
  .route("/:id")
  .get(getSingleThought)
  .post(createThought)
  .put(updateThought)
  .delete(RemoveThought);

// /api/thoughts/:id/reactions
router.route("/:id/reactions").post(createReaction);

// /api/thoughts/:id/reactions/:reactionId
router.route("/:id/reactions/:reactionId").delete(removeReaction);

module.exports = router;