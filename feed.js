module.exports = function() {

  var harp = require("./harp.json")["globals"]
    , RSS = require("rss")
    , moment = require("moment")
    , fs = require("fs")
    , newsletters = require("./public/_data.json")["newsletters"]
    , rootUrl = harp.root_url[process.env.NODE_ENV]
    , imageRootUrl = rootUrl + "assets/images/"
    , outputFeed = "public/rss.xml"
  ;

  var feed = new RSS({
    title: harp.title,
    description: harp.description,
    feed_url: rootUrl + "rss.xml",
    site_url: rootUrl,
    image_url: imageRootUrl + "devnewsletters-128.png",
    managingEditor: harp.author,
    pubDate: moment().format("LLLL"),
    ttl: 60
  });

  newsletters.forEach(function(newsletter) {
    feed.item({
      title: "Newsletter: " + newsletter.title,
      description: newsletter.about,
      url: rootUrl + "/#" + newsletter.id,
      author: harp.author,
      enclosure: {
        url: imageRootUrl + newsletter.image
      }
    });
  });

  fs.writeFileSync(outputFeed, feed.xml());
  console.log("Generated RSS:", outputFeed);
};
