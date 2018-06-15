# Twitter-Wall

Displaying tweets filtered by hashtags.

## Prerequisites

> **Please note:** This app needs Node version 8 or higher.

## Setup

### Configure Access to Twitter API

To get the Twitter Wall to run you need to enter the consumer key and the consumer secret from Twitter.
You will get these keys from https://apps.twitter.com/ by creating a new App.

Please add the **consumer key** and the **consumer secret** to `./backend/config.example.js`.
Afterwards rename **config.example.js** to `config.js`.

### Install project dependencies

```bash
$ npm i -g yarn
$ yarn
```

## Run

```bash
# console one - Front End
$ yarn start
# console two - Backend
$ yarn start:api
```

## Models

### Tweet

```json
{
    "creator": "@user_name"
    "text": "tweet",
    "created_at": "creation_date",
    "retweet_count": 2,
    "favorite_count": 0,
    "has_image": false|true,
    "image_url_https": "https://some-url/image.jpg"
};
```
