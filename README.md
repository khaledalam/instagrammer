# instagrammer

[![license](https://img.shields.io/github/license/khaledalam/instagrammer.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/instagrammer.svg)](https://www.npmjs.com/package/instagrammer)


NodeJS module NPM package that helps to scrap instagram profile media and useful information.

## Disclamer

Instagram has gone to great lengths to prevent scraping and other unauthorized access to their public content. This module is dependant on the markup the public-facing instagram.com. Should that change this module might also stop working as intended. It also only loads the 12 posts that are displayed on first-load without following pagination to load more images. You should take this into consideration when deciding whether this module will work for you.


## Installation
`npm i instagrammer`

## Usage
note: there are some limitation of loading instagram data, but it still usefull in most cases :)

### Get recent profile media with its details
```
const IG = require('instagrammer');
const instagramUsername = 'AreYouKhaled';

IG.profile(instagramUsername).then((data) => {
    const recentPost = data[0];
    console.log(recentPost);
});
```

Example response:

```json
{ node:
   { __typename: 'GraphVideo',
     id: '2160733047815791400',
     edge_media_to_caption: { edges: [Array] },
     shortcode: 'B38d0JJgeMo',
     edge_media_to_comment: { count: 0 },
     comments_disabled: false,
     taken_at_timestamp: 1571799483,
     dimensions: { height: 750, width: 750 },
     display_url:
      'https://instagram.fatz1-1.fna.fbcdn.net/vp/35ed460cf441f618ec9589d603dcc5ac/5DBC99DD/t51.2885-15/e35/71189504_708246012991109_3770380438181940072_n.jpg?_nc_ht=instagram.fatz1-1.fna.fbcdn.net&_nc_cat=105',
     edge_liked_by: { count: 7 },
     edge_media_preview_like: { count: 7 },
     location: null,
     gating_info: null,
     fact_check_information: null,
     media_preview:
      'ACoqjCU9Y6fx09alArpJIhHTvLqYCnYoAr+XR5dWKSgDCZixyetWYpmTIAz9ao55qUHnis7lF9J2Xr78U5bo555HoKpLJ16HPr/SlDAZp3AvG69vrUZvQD0qoGpN1O4FUHmng1COv41IOprMZIDS55pi0poEOBozTR0H0opgf//Z',
     owner: { id: '6904471740', username: 'areyoukhaled' },
     thumbnail_src:
      'https://instagram.fatz1-1.fna.fbcdn.net/vp/e15e52adc7a8afc81d6678e072244509/5DBCAA38/t51.2885-15/sh0.08/e35/s640x640/71189504_708246012991109_3770380438181940072_n.jpg?_nc_ht=instagram.fatz1-1.fna.fbcdn.net&_nc_cat=105',
     thumbnail_resources: [ [Object], [Object], [Object], [Object], [Object] ],
     is_video: true,
     felix_profile_grid_crop: null,
     video_view_count: 34 } 
}
```

