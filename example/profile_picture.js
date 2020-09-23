const instagrammer = require("instagrammer");
const username = 'instagram';

instagrammer.profilePicture(username).then(res => console.log(JSON.stringify(res)));