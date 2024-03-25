const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "./dist"),

    clean: false,
    publicPath: "./",
  },

  //
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    port: 5555,
    compress: true,
    hot: true,

    open: true,

    static: {
      directory: path.join(__dirname, "./dist"),
    },
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["node_modules"],
              },
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "videos/[name].[ext]",
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      cleanStaleWebpackAssets: false,
      verbose: true,
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        "!static-files*",
        "!directoryToExclude/**",
      ],
      cleanOnceBeforeBuildPatterns: [],
      cleanAfterEveryBuildPatterns: ["static*.*", "!static1.js"],

      // Allow clean patterns outside of process.cwd()
      //
      // requires dry option to be explicitly set
      //
      // default: false
      dangerouslyAllowCleanPatternsOutsideProject: true, // disables cleanOnceBeforeBuildPatterns
    }),
    new HtmlWebpackPlugin({
      title: "My web Page",
      template: "./src/index.html",
      filename: "./index.html", // Update filename if necessary
      inject: true, // Ensure assets are injected into the HTML
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
