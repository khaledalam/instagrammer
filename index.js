const axios = require('axios');

// Author: Khaled Alam (khaledalam.net@gmail.com)

const instagrammerUsername = 'instagram';
const instagrammerPostId = 'CCq1D_cMYMF';

const getIGUrl = (username = instagrammerUsername) => 'https://www.instagram.com/' + username + '/?__a=1&is_video=true';
const getPOSTUrl = (post_id = instagrammerPostId) => 'https://www.instagram.com/p/' + post_id + '/?__a=1';


/**
 * Scrape instagram profile media and more useful information.
 * @since      1.0.0
 * @access     public
 *
 * @param {string} username      Instagram profile username.
 */
const profile = async(username = instagrammerUsername) => {

    try {
        const response = await axios.get(getIGUrl(username));

        let data = response.data.graphql.user.edge_owner_to_timeline_media.edges;

        return data;
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
const postComments = async(postId = instagrammerPostId) => {

    try {
        const response = await axios.get(getPOSTUrl(postId));

        let data = response.data.graphql.shortcode_media.edge_media_to_parent_comment.edges;

        console.log(data)

        return data;
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
const postDimensions = async(postId = instagrammerPostId) => {

    try {
        const response = await axios.get(getPOSTUrl(postId));

        let data = response.data.graphql.shortcode_media.dimensions || 'No Dimensions';

        return data;
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
const postCaption = async(postId = instagrammerPostId) => {

    try {
        const response = await axios.get(getPOSTUrl(postId));

        let data = response.data.graphql.shortcode_media.accessibility_caption || 'No Caption';

        return data;
    } catch (error) {
        console.error('instagrammer_post_caption', error);
        return error;
    }
}

/**
 * Scrape instagram post is video.
 * @since      1.0.3
 * @access     public
 *
 * @param {string} postId      Instagram post id.
 */
const postIsVideo = async(postId = instagrammerPostId) => {

    try {
        const response = await axios.get(getPOSTUrl(postId));

        let data = response.data.graphql.shortcode_media.accessibility_caption || 'Cannot detect isVideo';

        return data;
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
    postIsVideo
};