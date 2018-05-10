# Sails ToolBox Generator TS

A `tgt` generator for use with the Sails command-line interface.


## Installation

```sh
$ npm install sails-generate-tgt --save
```

Then merge the following into your `.sailsrc` file:

```json
{
  "modules": {
    "tgt": "sails-generate-tgt"
  }
}
```

> Note that instead of `"sails-generate-tgt"`, you can also choose to provide the path to the generator locally (e.g. "./generators/tgt").
> This is useful if, for example, you have specific best practices for particular projects or teams within your organization, and you want to be able to check in generators to your code repository.
>
> Certain generators are installed by default in Sails, but they can be overridden.  Other generators add support for generating entirely new kinds of things.
> Check out [Concepts > Extending Sails > Generators](https://sailsjs.com/docs/concepts/extending-sails/generators) for information on installing generator overrides / custom generators and information on building your own generators.



## Usage

```bash
$ sails generate tgt [controller / model] [name]
```

## WIP
> The generator of the model is still in development so it is recommended to only use the controller generator

## Bugs &nbsp; [![NPM version](https://badge.fury.io/js/@sebas/sails-generate-tgt.svg)](http://npmjs.com/package/sails-generate-tgt)

To report a bug, [click here](https://sailsjs.com/bugs).


## Contributing

Please observe the guidelines and conventions laid out in the [Sails project contribution guide](https://sailsjs.com/documentation/contributing) when opening issues or submitting pull requests.

[![NPM](https://nodei.co/npm/sails-generate-tgt.png?downloads=true)](http://npmjs.com/package/sails-generate-tgt)



## License

This cts generator is available under the **MIT license**.

The [Sails framework](https://sailsjs.com) is free and open-source under the [MIT License](https://sailsjs.com/license).


![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

## Log Version

### v1.0.5
- FIX: generator controller

### v1.0.4
- The generator for controller and model is reduced to a single template
- Work continues on the generator of the model
- It works to correct the `,` at the end of each action in the generated controller

### v1.0.3
- Controller generator
- WIP model generator
- Multi template
