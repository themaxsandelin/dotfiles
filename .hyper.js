module.exports = {
  config: {

    // Font stuff
    fontSize: 12,
    fontFamily: 'Hack, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // Cursor stuff
    cursorShape: 'BLOCK', // Available values: { 'BEAM': '|', 'UNDERLINE': '_', 'BLOCK, '█' }
    cursorBlink: false, // To blink or not to blink.
    cursorColor: '#528bff',

    // Dark theme
    foregroundColor: '#fff',
    backgroundColor: '#000',
    borderColor: '#000',
    css:  'ul.tabs_list li {'+
            'border: 0px;'+
            'background: #222;'+
            'color: #AAAAAA;'+
            'padding: 0px;'+
          '}'+

          'ul.tabs_list li:last-child {'+
            'border-top-right-radius: 4px;'+
          '}'+

          'ul.tabs_list li:not(.tab_active):hover {'+
            'color: #eee;'+
          '}'+

          'ul.tabs_list li.tab_active {'+
            'background: #000;'+
            'color: #fff;'+
          '}',

    // Light theme
    // foregroundColor: '#383A42',
    // backgroundColor: '#fafafa',
    // borderColor: '#fafafa',
    // css:  'ul.tabs_list li {'+
    //         'border: 0px;'+
    //         'background: #EAEAEB;'+
    //         'color: #AAAAAA;'+
    //         'padding: 0px;'+
    //       '}'+
    //
    //       'ul.tabs_list li:last-child {'+
    //         'border-top-right-radius: 4px;'+
    //       '}'+
    //
    //       'ul.tabs_list li:not(.tab_active):hover {'+
    //         'color: #858791;'+
    //       '}'+
    //
    //       'ul.tabs_list li.tab_active {'+
    //         'background: #fafafa;'+
    //         'color: #383A42;'+
    //       '}',

    // custom css to embed in the terminal window
    termCSS: '',

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '20px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#ffff00',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#33ff00',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#33ff00',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    // make sure to use a full path if the binary name doesn't work
    // (e.g `C:\\Windows\\System32\\bash.exe` instead of just `bash.exe`)
    // if you're using powershell, make sure to remove the `--login` below
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: 'SOUND',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
