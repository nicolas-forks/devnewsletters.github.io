# DevNewsletters

This is the repository of the site https://devnewsletters.github.io to submit ebook links.

## How to add a newsletter?

**Before start it, all books you add must be freeware and for web developers**

First of all you need to [fork this repository](https://github.com/devnewsletters/devnewsletters.github.io/fork).

With this project in your hands, edit the `/public/_data.json` and add your newsletter respecting these parameters:

``` javascript
{
  "newsletters": [
    {
      "id": "newsletter-title",
      "title": "Newsletter Title",
      "url": "http://newsletter.title",
      "image": "newsletter-title.jpg",
      "about": "Quick description about what the newsletter is"
    }
  ]
}
```

Obs.: **All image must be an jpeg/jpg with 672x414 size**.

Look this example (`public/_data.json`):

``` javascript
{
  "newsletters": [
    {
      "id": "frontend-focus",
      "title": "Frontend Focus",
      "url": "http://frontendfocus.co",
      "image": "frontend-focus.jpg",
      "about": "A once–weekly roundup of the best frontend links. HTML, CSS, WebGL, Canvas, and more."
    }
  ]
}
```

## Development mode

To run this project in **development mode**, you need have [Node.js](http://nodejs.org) and [Grunt](http://gruntjs.com) installed.

To install Node.js, just [follow this wiki rules](http://nodejs.org/download)

To install Grunt, just run the command below:

``` bash
npm install grunt-cli -g
```

To get and run this project:

``` bash
git clone git@github.com:devnewsletters/devnewsletters.github.io.git
cd devnewsletters
grunt serve
```

And access in your browser the url: [http://localhost:3000](http://localhost:3000).

## Author

Caio Ribeiro Pereira - [@crp_underground](http://twitter.com/crp_underground)

## License

MIT - http://caio-ribeiro-pereira.mit-license.org
