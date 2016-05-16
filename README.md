# Html/SASS prototype-boilerplate for Webpack

Start by copying and renaming the prototype-boilerplate

Each folder represents a page view or component.

Assuming you have the newest version of Node and npm installed run the following from within the folder.

```npm install```

This will install all the require node modules in the context of the folder.

`npm start`

This will start the webpack dev server on `localhost:8080`

The server is configured to watch for changes to index.tpl.html file and any scss files in this folder or any subfolders. On change the dev server will live reload the content.

Only modify the index.tpl.html as it triggers the live reload for html changes.

As for the style please use whatever folder structure you need. If you add more files just make a reference to them in the index.js file.

Example:

```require("!style!css!sass!./style/sample.scss");```
