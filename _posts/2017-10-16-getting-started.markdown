---
layout: post
title:  "Getting started"
date:   2017-10-16 09:21:06 +0200
categories: jekyll update
permalink: /getting-started/
---

{% include side-menu.html %}

{% include post-content-open.html %}

The simplest way to use a visualization created in CARTO on an external site is as follows.

{% highlight javascript linenos %}
<link rel="stylesheet" href="http://libs.cartocdn.com/cartodb.js/v3/3.15/themes/css/cartodb.css" />
...
<div id="map"></div>
...
<script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.js"></script>
<script>
// get the viz.json url from the CARTO Editor
// - click on visualize
// - create new visualization
// - make visualization public
// - click on publish
// - go to API tab

window.onload = function() {
  cartodb.createVis('map', 'http://documentation.carto.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json');
}
</script>
{% endhighlight %}


[Grab the complete example source code](#)

## Using the CARTO.js LibraryPermalink
CARTO.js can be used to embed a visualization you have designed using CARTO’s user interface, or to dynamically create visualizations from scratch, using your data. If you want to create new maps on your webpage, jump to Creating a visualization from scratch. If you already have maps on your webpage and want to add CARTO visualizations to them, read Adding CARTO layers to an existing map.

You can also use the CARTO APIs to create visualizations programmatically. This can be useful when the visualizations react to user interactions. To read more about it, jump to Creating visualizations at runtime.

| Arguments            | Description                                                                |
| -------------------- |----------------------------------------------------------------------------|
| map_id               | a DOM object                                                               |
| vizjson_url          | url of the vizjson object.                                                 |
| callback(vis,layers) | if a function is specified, it is called once the visualization is created.|

### Other Mapping Libraries
We have also made it easy for you to build maps using the mapping library of your choice. Whether you are using Leaflet or something else, our CARTO.js code remains the same. This makes our API documentation simple and straightforward. It also makes it easy for you to consistently develop, or maintain, multiple maps online.

{% include note.html content="CARTO.js automatically includes dependencies from other mapping libraries (such as Leaflet, jQuery, Mustache, Underscore, and so on). You do not have to manually include these libraries, or worry about other mapping library version control, when you are using CARTO.js. If you need to see which version of other mapping libraries are included, view the vendor folder for each CARTO.js release." %}

## Creating a Visualization from ScratchPermalink
This is the easiest way to quickly get a CARTO map onto your webpage. Use this method when there is no map in your application, and you want to add the visualization to hack over it. CARTO.js handles all the details of loading a map interface, basemap, and your CARTO visualization.

You can start by giving CARTO.js the DIV ID from your HTML where you want to place your map, and the viz.json URL of your visualization (which you can get from the Publish your map options).

## Next steps

Once the form, with the stored payment token, is submitted to your server, you'll want to use the payment details just collected. Usually this means one of three actions:


{% include note-concept.html content="<h4>General Concepts</h4>Give your mobile or tablets apps the power of interactive maps." %}

## Questions?
We're always happy to help with code or other questions you might have! Search our site for more information or [send us an email](#)!
