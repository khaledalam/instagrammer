const axios = require('axios');

const IG_username = 'AreYouKhaled';

const getIGUrl = (username = IG_username) => 'https://www.instagram.com/' + username + '/?__a=1&is_video=true';


/**
 * Scrape instagram profile media and more useful information.
 * @since      1.0.0
 * @access     public
 *
 * @param {string} username      Instagram profile username.
 */
module.exports.profile = async (username = IG_username) => {

    try {
        const response = await axios.get(getIGUrl(username));

        let data = response.data.graphql.user.edge_owner_to_timeline_media.edges;

        // console.log(data);
        return data;
    } catch (error) {
        console.error('IG_profile_media', error);
        return error;
    }

}