"use strict";
import works from "./json_files_dev/works.json"
/**
 * Fetch data for the all stories in the website
 * @param {Number} story_id
 * @returns {Object} story
 */
export default  function storyLoader(story_id) {
    const story = works.find(story => story.id === story_id);
    if (!story) {
        throw new Error("Not Found Such  story. Please dont change the id))");
    }
    return story;
}