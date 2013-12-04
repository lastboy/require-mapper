require-mapper
===============

= WIP....

<p>Maps the local modules for an easy require access. With simple key value mapping the project's modules can be addressed easily</p>

## Usage

### First
* Initialize the require-mapper module
  <pre><code>require("require-maper").init({basepath: "../",
    data:{
        "foo.module": "src/foo/Foo.js"
    }
  });
  </code></pre>

  By default the base path set to "."

### Then, you can optionally map additional modules

 <pre><code>require("require-maper").map({
    data:{
        "my.module": "src/My.js"
    }
  });
  </code></pre>