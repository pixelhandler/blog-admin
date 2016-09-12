# Blog-admin

Steps used to setup this repo as a test for using ember-jsonapi-resources addon:

    ember new blog-admin
    cd blog-admin
    npm rm ember-data --save-dev
    ember install ember-jsonapi-resources

If working on ember-jsonapi-resources locally use npm link:

    npm link ember-jsonapi-resources

Generate some resources:

    ember generate jsonapi-resource post title:string slug:string date \
      excerpt:string body:string author:has-one:author \
      comments:has-many:comments

    ember generate jsonapi-resource author name:string email:string \
      posts:has-many:posts

    ember generate jsonapi-resource comment body:string \
      post:has-one:post commenter:has-one:commenter

    ember generate jsonapi-resource commenter name:string \
      email:string hash comments:has-many:comments

Setup a proxy to a live API:

    ember generate http-proxy api https://pixelhandler.com

Setup the host and API path config:

    vim config/environment.js

```
     APP: {
       // Here you can pass flags/options to your application instance
       // when it is created
+      API_HOST: 'https://pixelhandler.com',
+      API_PATH: 'api/v1'
     }
```

Install an addon to use Markdown syntax:

    ember install ember-cli-showdown

Generate some routes and templates:

    ember generate route application
    ember generate route application-error
    ember generate route index
    ember generate route post
    ember generate route post-error
    ember generate route post/detail
    ember generate template post/comments

Need a controller for comments in named outlet:

    ember generate controller post/comments

Create a form component:

    ember generate component form-post
    ember install ember-buffered-proxy

Add routes for admin use:

    ember generate route admin/create
    ember generate route admin/index
    ember generate route admin/edit
    ember generate route admin/edit-error

Add mixin for error handling:

    ember generate mixin application-errors

Add edit controller

    ember generate controller admin/edit

Create code for listing, details pages and edit forms, etc.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd blog-admin`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

