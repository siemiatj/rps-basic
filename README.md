# Intro

This is a basic example of a plugin for the [react-plugin-system](https://github.com/siemiatj/react-plugin-system).

It's intended to be a completely separate app running inside the parent application. So although it merges it's redux state into the main tree, no interaction whatsoever is available or planned.

For more information on how to build and use plugins for this system consult the mentioned repository and it's documentation.

## Why would you need a plugin like this ?

Think dashboards created by customers, payments or an e-commerce module.

# Running

As simple as:

```
npm start
```

This will load a server and hot-reload your source. Mind that this is not a complete app, so you have to link your application to the files created by the development server.

# Bundling

Running `npm run build` will create a bundle, that you can copy and use in your app.

# Testing

No tests yet. Not sure if they're needed in this case.

# Contributing

PRs welcome as always. Lint config included so should be fairly straightforward to get started. Just check issues or suggest improvements by creating a new one.

# License and other boring bull$hit

This is MIT-licensed. Do whatever you want with it. Any links back to this repo would be nice though.

Kuba
[saskla.cz](https://saskla.cz)
