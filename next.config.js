module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(pdf|node)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      });
  
      return config;
    },
  };
