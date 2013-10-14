voytek
======

Custom [Yo](https://github.com/yeoman/yo) generator.

## Installation

1. Install [NodeJS](http://nodejs.org/). If you have [Homebrew](http://brew.sh/) installed, this can be done by executing:

        brew install node

2. Install Yo using npm:

        npm install -g yo

3. Clone this repo and `cd` into into it:

        git clone git@github.com:bedrich/generator-voytek.git && cd $_

4. Install dependencies:

        npm install

5. Link generator:

        npm link

## Usage

1. Create a new directory to host your app

        mkdir myapp && cd $_

2. Generate files by running:

        yo voytek

3. Follow the instructions on the prompt.

4. After all dependencies have been installed, run the server:

        grunt server

## Notes
        
The server is setup with livereload and should be accesibble at <http://localhost:8000>. SCSS files will be compiled automatically while the prompt running `grunt server` is open. In addition, all JS files inside the `js` directory will be linted on save.
