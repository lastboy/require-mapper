require-mapper
===============

<p>
Maps the project's local modules for an easy require access. <br>
With simple key value mapping, the project's modules can be addressed more easily
</p>

## Usage

### Just map your modules

<pre><code>var Mapper = require("require-mapper"),
        mapper = new Mapper();

mapper.map({
    "my.module": "src/My.js"
});
</code></pre>

### And then...

Load your module using the map's keys:

<pre><code>_require("my.module")
  </code></pre>


### Customize on initial phase (optional)

* methodname    - The method name to be used for require the modules
* basepath      - The base path for resolving the modules (default: ".")
* data          - The modules map

<pre><code>var Mapper = require("require-mapper"),
        mapper = new Mapper();

mapper.init({
    methodname: "requirexxx"
    basepath: "../",
    data:{
        "foo.module": "src/foo/Foo.js"
    }
});

// use your custom require method name
requirexxx("foo.module");
  </code></pre>


