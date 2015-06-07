# CodePen scraper

## Introduction

[CodePen](http://codepen.io/) offers a couple of RSS feeds for each user's [public](http://codepen.io/eduardoboucas/public/feed/) and [most popular](http://codepen.io/eduardoboucas/popular/feed/) pens, but there's a lot of information that's not in there.

A more comprehensive API is in the works, but in the meantime I created this little web scraper in Node.js that extracts some additional information from a user's profile on CodePen, such as:

- Number of followers for a user;
- Number of people a user is following;
- A list of all the user's public pens with information about each:
  - Number of comments;
  - Number of views;
  - Number of loves

## How to install

```
git clone https://github.com/eduardoboucas/codepen-scraper.git
cd codepen-scraper
node index.js <username>
```

## Example

```
node index.js eduardoboucas
```

returns:

```json
{
    "username": "eduardoboucas",
    "connections": {
        "followers": "21",
        "following": "0"
    },
    "pens": [
        {
            "title": "A split screen gallery",
            "url": "http://codepen.io/eduardoboucas/pen/qdaOWv",
            "comments": 0,
            "views": 239,
            "loves": 1
        },
        {
            "title": "BEM demo",
            "url": "http://codepen.io/eduardoboucas/pen/LVYoqO",
            "comments": 0,
            "views": 122,
            "loves": 1
        },
        {
            "title": "OSX Sublime Text with cursor",
            "url": "http://codepen.io/eduardoboucas/pen/EjKdWp",
            "comments": 9,
            "views": 2326,
            "loves": 83
        },
        {
            "title": "SCSS triangles mixin",
            "url": "http://codepen.io/eduardoboucas/pen/JomROG",
            "comments": 0,
            "views": 5544,
            "loves": 185
        },
        {
            "title": "include-media",
            "url": "http://codepen.io/eduardoboucas/pen/emzRry",
            "comments": 1,
            "views": 885,
            "loves": 17
        },
        {
            "title": "3D Isometric element in CSS",
            "url": "http://codepen.io/eduardoboucas/pen/dPRPvV",
            "comments": 1,
            "views": 2845,
            "loves": 99
        },
        {
            "title": "Collapsible nav with burger menu, no JS",
            "url": "http://codepen.io/eduardoboucas/pen/BNyKwO",
            "comments": 2,
            "views": 5080,
            "loves": 156
        },
        {
            "title": "Animated burger menu",
            "url": "http://codepen.io/eduardoboucas/pen/rayExg",
            "comments": 0,
            "views": 1902,
            "loves": 20
        },
        {
            "title": "(Blog) A cautious and calculated venture into Flexbox",
            "url": "http://codepen.io/eduardoboucas/pen/vEZBdo",
            "comments": 0,
            "views": 75,
            "loves": 0
        },
        {
            "title": "(Blog) Experimenting with Sass and Grids - Part 2/2",
            "url": "http://codepen.io/eduardoboucas/pen/PwpzRB",
            "comments": 0,
            "views": 90,
            "loves": 1
        },
        {
            "title": "(Blog) Experimenting with Sass and Grids - Part 1/2",
            "url": "http://codepen.io/eduardoboucas/pen/myWEpX",
            "comments": 0,
            "views": 81,
            "loves": 0
        }
    ],
    "penCount": 11
}
```
