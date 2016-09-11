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

