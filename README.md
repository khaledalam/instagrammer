# instagrammer

<center>

[![license](https://img.shields.io/github/license/khaledalam/instagrammer.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/instagrammer.svg)](https://www.npmjs.com/package/instagrammer) ![npm](https://img.shields.io/npm/dm/instagrammer) ![npm](https://img.shields.io/npm/v/instagrammer) ![npm bundle size](https://img.shields.io/bundlephobia/min/instagrammer) 

<img src="https://www.dpreview.com/files/p/articles/8326097332/icon.png" width="300">
</center>

NodeJS module NPM package that helps to scrape and load instagram profile media and useful information.

## 7 <img src="https://mpng.subpng.com/20180330/avw/kisspng-computer-icons-person-clip-art-name-5abea9694a6aa0.8829806515224446493048.jpg" width="15">  Repositories that depend on <a href="https://github.com/khaledalam/instagrammer">instagrammer</a> 
- [shidoitsuka / homies](https://github.com/shidoitsuka/homies)
- [gabszzz / zork](https://github.com/gabszzz/zork)
- [Horsgle / API-Scrap-Instagram](https://github.com/Horsgle/API-Scrap-Instagram)
- [farisaziz12 / wod_with_faris_frontend](https://github.com/farisaziz12/wod_with_faris_frontend)
- [arisaziz12 / vekho_frontend](https://github.com/farisaziz12/vekho_frontend)
- [iamjmitch / NaomiEldredv2](https://github.com/iamjmitch/NaomiEldredv2)
- [rahul-devtrust / Scapping-NodeJs-puppeteer](https://github.com/rahul-devtrust/Scapping-NodeJs-puppeteer)

## Disclamer

Instagram has gone to great lengths to prevent scraping and other unauthorized access to their public content. This module is dependant on the markup the public-facing instagram.com. Should that change this module might also stop working as intended. It also only loads the 12 posts that are displayed on first-load without following pagination to load more images. You should take this into consideration when deciding whether this module will work for you.
<br>note: there are some limitation of loading instagram data, but it still usefull in most cases :)

<br><hr><br>

## Installation

`npm install instagrammer`

<br><hr><br>

## Usage:
<br>


### Profile Picture Url:

```
const instagrammer = require("instagrammer");
const username = 'instagram';

instagrammer.profilePicture(username).then(res => console.log(JSON.stringify(res)));
```

<details><summary>Example output response</summary><p>

```json
{
   "https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-19/s150x150/119381356_363756831450146_3008355575418576013_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_ohc=BMpoCdJah2YAX-S235E&oh=a3b3c783b0e08cacd9c93cd1ce68a42e&oe=5F939876"
}
```
</p></details>

<br><hr><br>

### Recent Profile Posts:

```
const instagrammer = require("instagrammer");
const username = 'instagram';

instagrammer.profile(username).then(res => console.log(JSON.stringify(res)));
```

<details><summary>Example output response</summary><p>

```json
{
   "node":{
      "__typename":"GraphVideo",
      "id":"2390233823151349654",
      "shortcode":"CEr0P-HD1-W",
      "dimensions":{
         "height":1920,
         "width":1080
      },
      "display_url":"https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/118654721_718086705416828_5698677351445957749_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=rHCw5W76o9kAX8A0boC&oh=6b636a4304cee3bf91cf81487ebaff95&oe=5F545946",
      "edge_media_to_tagged_user":{
         "edges":[
            
         ]
      },
      "fact_check_overall_rating":null,
      "fact_check_information":null,
      "gating_info":null,
      "media_overlay_info":null,
      "media_preview":null,
      "owner":{
         "id":"25025320",
         "username":"instagram"
      },
      "is_video":true,
      "accessibility_caption":null,
      "dash_info":{
         "is_dash_eligible":false,
         "video_dash_manifest":null,
         "number_of_qualities":0
      },
      "has_audio":true,
      "tracking_token":"eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZDI0NjQ0Njc3NmRkNDBjZDg1ZTZiYzkxZGY4Y2EzOTIyMzkwMjMzODIzMTUxMzQ5NjU0In0sInNpZ25hdHVyZSI6IiJ9",
      "video_url":"https://scontent-hbe1-1.cdninstagram.com/v/t50.2886-16/118592045_162948815381647_8214304249319666738_n.mp4?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=y7derPkuDMUAX_Kf8Tn&oe=5F53D9B0&oh=3361cc331100fa3ed3495150faf1b857",
      "video_view_count":3064405,
      "edge_media_to_caption":{
         "edges":[
            {
               "node":{
                  "text":"How to look natural. 🌿 👀 💄⁣\n⁣\nDrag artist West Dakota (@iamwestdakota) gets ready for a date with Mother Earth.⁣\n⁣\nReel by @iamwestdakota"
               }
            }
         ]
      },
      "edge_media_to_comment":{
         "count":4520
      },
      "comments_disabled":false,
      "taken_at_timestamp":1599158118,
      "edge_liked_by":{
         "count":171873
      },
      "edge_media_preview_like":{
         "count":171873
      },
      "location":null,
      "thumbnail_src":"https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.882.2268.2268a/s640x640/118654721_718086705416828_5698677351445957749_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=rHCw5W76o9kAX8A0boC&oh=1742f1fe07790273aeb859eff35861e7&oe=5F53DD9C",
      "thumbnail_resources":[
         {
            "src":"https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-15/e35/c0.882.2268.2268a/s150x150/118654721_718086705416828_5698677351445957749_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=rHCw5W76o9kAX8A0boC&_nc_tp=16&oh=adfbb501663952561a083500c857100c&oe=5F54342C",
            "config_width":150,
            "config_height":150
         },
         {
            "src":"https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-15/e35/c0.882.2268.2268a/s240x240/118654721_718086705416828_5698677351445957749_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=rHCw5W76o9kAX8A0boC&_nc_tp=16&oh=638df15aac076ba257b2c836eb57d310&oe=5F542BEE",
            "config_width":240,
            "config_height":240
         },
         {
            "src":"https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-15/e35/c0.882.2268.2268a/s320x320/118654721_718086705416828_5698677351445957749_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=rHCw5W76o9kAX8A0boC&_nc_tp=16&oh=06625d03f60781d05d5dfaf88e5f5493&oe=5F541614",
            "config_width":320,
            "config_height":320
         },
         {
            "src":"https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-15/e35/c0.882.2268.2268a/s480x480/118654721_718086705416828_5698677351445957749_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=rHCw5W76o9kAX8A0boC&_nc_tp=16&oh=1ab06629b3c55c1bb53baca0051dec98&oe=5F53EDD5",
            "config_width":480,
            "config_height":480
         },
         {
            "src":"https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.882.2268.2268a/s640x640/118654721_718086705416828_5698677351445957749_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=rHCw5W76o9kAX8A0boC&oh=1742f1fe07790273aeb859eff35861e7&oe=5F53DD9C",
            "config_width":640,
            "config_height":640
         }
      ],
      "felix_profile_grid_crop":null,
      "product_type":"clips"
   }
}
```
</p></details>

<br><hr><br>


### Post Comments:

```
const instagrammer = require("instagrammer");
const postId = 'CCq1D_cMYMF';

instagrammer.postComments(postId).then(res => console.log(JSON.stringify(res[0])));
```

<details><summary>Example output response</summary><p>

```json
[
   {
      "node":{
         "id":"18121418407137139",
         "text":"❤️",
         "created_at":1598535765,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17858514671134158",
         "text":"❤️❤️",
         "created_at":1598536409,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17866407728000994",
         "text":"😍😍",
         "created_at":1598536411,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17888665126647713",
         "text":"🙌🙌",
         "created_at":1598536412,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17872792441869003",
         "text":"癒やされました。",
         "created_at":1598541505,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17871672589890517",
         "text":"LIKE",
         "created_at":1598555517,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17884265638726253",
         "text":"👌👌👌",
         "created_at":1598623422,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17868995740962200",
         "text":"@daldaguri_ssong",
         "created_at":1598632436,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17961072496337418",
         "text":"😍",
         "created_at":1598639301,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17949278176367622",
         "text":"Wow",
         "created_at":1598675365,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17862788663074046",
         "text":"👏",
         "created_at":1598675380,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17880649777756444",
         "text":"yriusyhsh",
         "created_at":1598678440,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17887515847669962",
         "text":"That is the prettiest cloud with landscape I\\'ve ever seen",
         "created_at":1598756468,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17935503553393259",
         "text":"😍",
         "created_at":1598821900,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17866990736004895",
         "text":"Amazing",
         "created_at":1598884851,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17918335777454877",
         "text":"❤️",
         "created_at":1598894380,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17850404807259590",
         "text":"Wow",
         "created_at":1598940641,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"18125160769123267",
         "text":"👏🏻👏🏻👏🏻👏🏻لإزالة الكرش\nاشربي كوب واحد صباحا وقبل النوم .وتمتعي بطن مسطح بدون رياضة.الي حاب يعرف الطريقة يبعثلي ع الخاص🎯",
         "created_at":1599044337,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"18132005737111129",
         "text":"#follow4followback",
         "created_at":1599050863,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17892839947604184",
         "text":"این همون ابریه ک یوسف رو همراهی و سایه میکرد تو جاده کنعان ب مصر😂",
         "created_at":1599077210,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17889416272642578",
         "text":"@moltafethani directeto chek kon. Harfamo bekhooneshoon kamel",
         "created_at":1599085527,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17861986094079646",
         "text":"@saghii_ans",
         "created_at":1599089116,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"18160539022037912",
         "text":"😊",
         "created_at":1599132917,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   },
   {
      "node":{
         "id":"17924474218425428",
         "text":"Fantastic",
         "created_at":1599177778,
         "did_report_as_spam":false,
         "owner":[
            "Object"
         ],
         "viewer_has_liked":false,
         "edge_liked_by":[
            "Object"
         ],
         "is_restricted_pending":false,
         "edge_threaded_comments":[
            "Object"
         ]
      }
   }
]{
   "node":{
      "id":"18121418407137139",
      "text":"❤️",
      "created_at":1598535765,
      "did_report_as_spam":false,
      "owner":{
         "id":"39904363898",
         "is_verified":false,
         "profile_pic_url":"https://instagram.fjed4-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fjed4-1.fna.fbcdn.net&_nc_ohc=OU-5fMy1ffUAX8p_6Gl&oh=f3d83474f194a25d413b66877903915c&oe=5F7A818F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2",
         "username":"shaswarsurchy66"
      },
      "viewer_has_liked":false,
      "edge_liked_by":{
         "count":0
      },
      "is_restricted_pending":false,
      "edge_threaded_comments":{
         "count":0,
         "page_info":{
            "has_next_page":false,
            "end_cursor":null
         },
         "edges":[
            
         ]
      }
   }
}
```
</p></details>

<br><hr><br>

### postDimensions

```
const instagrammer = require("instagrammer");
const postId = 'CCq1D_cMYMF';

instagrammer.postDimensions(postId).then(res => console.log(JSON.stringify(res)));
```

<details><summary>Example output response</summary><p>

```json
{"height":1350,"width":1080}
```
</p></details>

<br><hr><br>

### postCaption

```
const instagrammer = require("instagrammer");
const postId = 'CCq1D_cMYMF';

instagrammer.postDimensions(postId).then(res => console.log(JSON.stringify(res)));
```
<details><summary>Example output response</summary><p>

```json
"A puffy white cloud floating over hills."
```
</p></details>

<br><hr><br>

### isPostVideo

```
const instagrammer = require('../index');
const postId = 'CCq1D_cMYMF';

instagrammer.isPostVideo(postId).then(res => console.log(JSON.stringify(res)));
```
<details><summary>Example output response</summary><p>

```json
"true" or "false"
```
</p></details>

<br><hr><br>

### isCaptionEdited

```
const instagrammer = require('../index');
const postId = 'CCq1D_cMYMF';

instagrammer.isCaptionEdited(postId).then(res => console.log(JSON.stringify(res)));
```
<details><summary>Example output response</summary><p>

```json
"true" or "false"
```
</p></details>

<br><hr><br>


### isCommentsDisabled

```
const instagrammer = require('../index');
const postId = 'CCq1D_cMYMF';

instagrammer.isCommentsDisabled(postId).then(res => console.log(JSON.stringify(res)));
```
<details><summary>Example output response</summary><p>

```json
"true" or "false"
```
</p></details>

<br><hr><br>

### takenTimestamp

```
const instagrammer = require('../index');
const postId = 'CCq1D_cMYMF';

instagrammer.takenTimestamp(postId).then(res => console.log(JSON.stringify(res)));
```
<details><summary>Example output response</summary><p>

```json
1594830002
```
</p></details>


<br><hr><br>

## Contributing

We’re really happy to accept contributions from the community, that’s the main reason why we open-sourced it!

<br>

developed by: Khaled Alam (khaledalam.net@gmail.com)
