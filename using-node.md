Notes on Using Gazelle With Node.js
-----------------------------------

Gazelle uses [require.js][] to build its own module system.
Require.js can also be used with [node.js][] although certain
modifications in usage from the browser case are needed.

As in the browser, scripts should be located in a `scripts` directory
in your project.  The scripts directory should contain a hierarchical
structure of Gazelle modules and javascript code which conforms to the
require.js specification.  

Above this `scripts` directory, npm needs to be used to install any
node specific modules, including require.js.  At the very least, one
needs to

    npm install requirejs

In order to synchronize compile and run time locations, you should use
nodejs to run your main program from the top level of the scripts
directory.

Eg, if you have a `node-main.gazelle` in `./scripts/` and have
configured node and require.js correctly, you can run your node
program (after compiling) via

    cd scripts
    nodejs node-main.js

