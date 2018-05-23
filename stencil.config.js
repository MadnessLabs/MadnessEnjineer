const sass = require('@stencil/sass');

exports.config = {
  copy: [
    {
      src: '../node_modules/grapesjs/dist/css',
      dest: 'assets/css'
    },
    {
      src: '../node_modules/grapesjs/dist/**.min.js',
      dest: 'assets/js'
    },
    {
      src: '../node_modules/grapesjs/dist/fonts',
      dest: 'assets/fonts'
    }, 
    {
      src: '../node_modules/grapesjs-preset-newsletter/dist/*.css',
      dest: 'assets/css'
    },
    {
      src: '../node_modules/grapesjs-preset-newsletter/dist/*.min.js',
      dest: 'assets/js'
    },
    {
      src: '../node_modules/firebase/firebase-*.js',
      dest: 'assets/js'
    }
  ],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'src/sw.js'
      }
    }
  ],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  plugins: [
    sass()
  ],
  enableCache: false
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
