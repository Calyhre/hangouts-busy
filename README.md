Hangouts-busy
====

A small bot to reply automatically on every message you will receive on Hangouts.


Getting started quickly
----

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


Getting started less quickly
----

1. Clone this repo git clone https://github.com/Calyhre/hangouts-busy.git
2. Create an heroku app `heroku apps:create`
3. Set up your reply message `heroku config:set HANGOUT_MESSAGE="message"`
4. Set up your email/password `heroku config:set HANGOUT_USER=email@example.com HANGOUT_PASSWORD=password`  
  For more safety, please use an application specific password. You can get one here https://security.google.com/settings/security/apppasswords
5. Deploy `git push heroku master`
6. Enjoy !
