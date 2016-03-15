# Twitterwall

Displaying tweets filtered by hashtags.

## Run

```
$ npm isntall
$ node backend/server.js # On 1st console
$ ng serve               # On 2nd console
```

## Models

### Tweet

```json
"creator": "@user_name"
"text": "tweet",
"created_at": "creation_date",
"retweet_count": 2,
"favorite_count": 0,
"has_image": false|true,
"image_url_https": "https://some-url/image.jpg"
};
```
