const searchClient = algoliasearch('TLWRPEGMX3', 'adab2ba851e5172c35418259095c2f7b');

const search = instantsearch({
indexName: 'email-Index',
searchClient,
});

search.addWidgets([
instantsearch.widgets.searchBox({
container: '#searchbox',
}),

instantsearch.widgets.configure({
hitsPerPage: 16
}),

instantsearch.widgets.hits({
container: '#hits',
templates: {
item: `
<div>
<div class="hit-name">
{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
</div>
</div>
`,
},
}),

instantsearch.widgets.pagination({
container: '#pagination',
}),
]);

search.start();
