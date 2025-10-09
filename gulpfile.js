// ==============================================================
// This is file tells gulp how to build the project.
// Find more information about Gulp on http://gulpjs.com
// ==============================================================
// To list available tasks, run: > gulp --tasks
// ==============================================================
const
  buildList = (() => {
    const o = {};
    o.scss = `_scss/**/*.scss`;
    ['html', 'txt', 'md'].forEach(type => {
      o[type] = `**/*.${type}.pug`;
    });
    return o;
  })(),
  watchList = buildList;
if (!buildList || !watchList) { throw new Error('Error reading gulp list'); }
const
  site = '/',
  assets = '/assets',
  log = console.log,
  slog = (what, source) => log(`Writing ${what} from: '${source || '(none)'}'`),
  redMessage = (message) => '\x1B[31m' + message + '\x1B[0m',
  onError = function (error) {
    const
      { message, msg, code, fileName, line, column } = error,
      logs = [redMessage(`Error: [${message || (code + ' : ' + msg)}]`)];
    if (fileName) logs.push(fileName + ((line && column) ? ` [${line}${column ? '|' + column : ''}]` : ''));
    log(logs.join('\n'));
    this.emit('end');
  },
  isEmpty = (...oo) => oo.every(o => Array.isArray(o) && o.length > 0),
  { src, dest, series, parallel, watch } = require('gulp'),
  pug = require('gulp-pug'), // read pug write html,txt,md
  sass = require('gulp-sass')(require("sass")), // read sass write css
  cleanCSS = require('gulp-clean-css'), // minify css
  rename = require('gulp-rename'), // name file extension
  ext = extname => rename((path) => {
    path.basename = path.basename.substring(0, path.basename.lastIndexOf('.'));
    path.extname = extname;
  }),
  watchOpt = {
    ignoreInitial: false
  },
  watch_ = (fn, src, dest, opt = watchOpt) => function watcher() {
    if (isEmpty(src, dest)) {
      log(`Watching: ${redMessage('[Error]')}\n- [src]: ${src || '(undefined)'}\n- [dest]: ${dest || '(undefined)'}`);
    }
    else {
      log(`Watching:${Array.isArray(src)?src.map(item => '\n- ' + item).join('\n'):' '+src}`);
      watch(src, opt, fn(src, dest));
    }
  },
  html = (source, destination) => async function html_writer() {
    slog('HTML', source);
    return src(source)
      .on('error', onError)
      .pipe(pug({ pretty: true }))
      .pipe(ext('.html'))
      .pipe(dest(destination));
  },
  txt = (source, destination) => async function txt_writer() {
    slog('TXT', source);
    return src(source)
      .on('error', onError)
      .pipe(pug())
      .pipe(ext('.txt'))
      .pipe(dest(destination));
  },
  md = (source, destination) => async function md_writer() {
    slog('MD', source);
    return src(source)
      .on('error', onError)
      .pipe(pug())
      .pipe(ext('.md'))
      .pipe(dest(destination));
  },
  sassOpt = {
    outputStyle: 'compressed' // compressed | expanded
  },
  scss = (source, destination, opt = sassOpt) => async function scss_writer() {
    slog('SCSS', source);
    return src(source)
      .on('error', onError)
      .pipe(sass(opt))
      .pipe(cleanCSS())
      .pipe(dest(destination));
  };
const
  builders = parallel(
    html(buildList.html, site),
    txt(buildList.txt, site),
    md(buildList.md, site),
    scss(buildList.scss, assets),
  ),
  watchers = parallel(
    watch_(html, watchList.html, site),
    watch_(txt, watchList.txt, site),
    watch_(md, watchList.md, site),
    watch_(scss, watchList.scss, assets),
  ),
  test = async () => {
    log('Build List:', buildList);
    log('Watch List:', watchList);
  };
Object.assign(exports, {
  test,
  builders,
  default: builders,
  watch: watchers,
});