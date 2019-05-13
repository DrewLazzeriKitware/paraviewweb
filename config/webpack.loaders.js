const autoprefixerPlugin = require('autoprefixer')(
  'last 2 version',
  'ie >= 10'
);

module.exports = [
  {
    test: /\.svg$/,
    loader: 'svg-sprite-loader?runtimeCompat=true',
    exclude: /fonts/,
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=60000&mimetype=application/font-woff',
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=60000',
    include: /fonts/,
  },
  {
    test: /\.(png|jpg)$/,
    loader: 'url-loader?limit=8192',
  },
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [autoprefixerPlugin],
        },
      },
    ],
  },
  {
    test: /\.mcss$/,
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]-[local]_[sha512:hash:base32:5]',
          modules: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [autoprefixerPlugin],
        },
      },
    ],
  },
  {
    test: /\.c$/i,
    loader: 'shader-loader',
  },
  {
    test: /\.html$/,
    loader: 'html-loader',
  },
  {
    test: /\.isvg$/,
    loader: 'html-loader?attrs=false',
  },
  {
    test: /\.js$/,
    include: /node_modules(\/|\\)paraviewweb(\/|\\)/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  {
    test: /\.js$/,
    include: /node_modules(\/|\\)vtk.js(\/|\\)/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  {
    test: /\.js$/,
    include: /node_modules(\/|\\)wslink(\/|\\)/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  {
    test: /\.glsl$/,
    loader: 'shader-loader',
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
];
