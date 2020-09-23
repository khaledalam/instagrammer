const axios = require('axios');

// Author: Khaled Alam (khaledalam.net@gmail.com)

const username = 'instagram';
const postId = 'CCq1D_cMYMF';
const boolToString = (boolValue) => boolValue ? 'true' : 'false';
const getIGUrl = (username = username) => 'https://www.instagram.com/' + username + '/?__a=1&is_video=true';
const getPOSTUrl = (postId = postId) => 'https://www.instagram.com/p/' + postId + '/?__a=1';
const errorMessage = 'Cannot detect option';


/**
 * Scrape instagram profile picture url.
 * @since      1.0.11
 * @access     public
 *
 * @param {string} username      Instagram profile username.
 */
const profilePicture = async(username = username) => {

    try {
        const response = await axios.get(getIGUrl(username));

        return response.data.graphql.user.profile_pic_url || errorMessage;

    } catch (error) {
        console.error('instagrammer_profile_picture', error);
        return error;
    }
}

/**
 * Scrape instagram profile media and more useful information.
 * @since      1.0.0
 * @access     public
 *
 * @param {string} username      Instagram profile username.
 */
const profile = async(username = username) => {

    try {
        const response = await axios.get(getIGUrl(username));

        return response.data.graphql.user.edge_owner_to_timeline_media.edges || errorMessage;

    } catch (error) {
        console.error('instagrammer_profile_media', error);
        return error;
    }
}

/**
 * Scrape instagram post comments.
 * @since      1.0.3
 * @access     public
 *
 * @param {string} postId      Instagram post id.
 */
const postComments = async(postId = postId) => {

    try {
        const response = await axios.get(getPOSTUrl(postId));

        return response.data.graphql.shortcode_media.edge_media_to_parent_comment.edges || errorMessage;

    } catch (error) {
        console.error('instagrammer_post_comments', error);
        return error;
    }
}

/**
 * Scrape instagram post dimensions.
 * @since      1.0.3
 * @access     public
 *
 * @param {string} postId      Instagram post id.
 */
const postDimensions = async(postId = postId) => {

    try {
        const response = await axios.get(getPOSTUrl(postId));

        return response.data.graphql.shortcode_media.dimensions || errorMessage;

    } catch (error) {
        console.error('instagrammer_post_dimensions', error);
        return error;
    }
}

/**
 * Scrape instagram post caption.
 * @since      1.0.3
 * @access     public
 *
 * @param {string} postId      Instagram post id.
 */
const postCaption = async(postId = postId) => {

    try {
        const response = await axios.get(getPOSTUrl(postId));

        return response.data.graphql.shortcode_media.accessibility_caption || errorMessage;

    } catch (error) {
        console.error('instagrammer_post_caption', error);
        return error;
    }
}

/**
 * Scrape instagram post and check if post is a video or not.
 * @since      1.0.7
 * @access     public
 *
 * @param {string} postId      Instagram post id.
 */
const isPostVideo = async(postId = postId) => {

    try {
        const response = await axios.get(getPOSTUrl(postId));

        return boolToString(response.data.graphql.shortcode_media.is_video);

    } catch (error) {
        console.error('instagrammer_post_is_video', error);
        return error;
    }
}


/**
 * Scrape instagram post and check if caption edited or not.
 * @since      1.0.9
 * @access     public
 *
 * @param {string} postId      Instagram post id.
 */
const isCaptionEdited = async(postId = postId) => {

    try {
        const response = await axios.get(getPOSTUrl(postId));

        return boolToString(response.data.graphql.shortcode_media.caption_is_edited);

    } catch (error) {
        console.error('instagrammer_post_is_video', error);
        return error;
    }
}


/**
 * Scrape instagram post and check if comments disabled or not.
 * @since      1.0.9
 * @access     public
 *
 * @param {string} postId      Instagram post id.
 */
const isCommentsDisabled = async(postId = postId) => {

    try {
        const response = await axios.get(getPOSTUrl(postId));

        return boolToString(response.data.graphql.shortcode_media.comments_disabled);

    } catch (error) {
        console.error('instagrammer_post_is_video', error);
        return error;
    }
}

/**
 * Scrape instagram token post timestamp.
 * @since      1.0.9
 * @access     public
 *
 * @param {string} postId      Instagram post id.
 */
const takenTimestamp = async(postId = postId) => {

    try {
        const response = await axios.get(getPOSTUrl(postId));

        return response.data.graphql.shortcode_media.taken_at_timestamp || errorMessage;

    } catch (error) {
        console.error('instagrammer_post_is_video', error);
        return error;
    }
}



module.exports = {
    profile,
    postComments,
    postDimensions,
    postCaption,
    isPostVideo,
    isCaptionEdited,
    isCommentsDisabled,
    takenTimestamp,
    profilePicture
};