module.exports = {
  presets: [
    ['@babel/preset-env', { targets: 'defaults' }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: [
    ['istanbul', { exclude: ['src/tests/**', '**/*.spec.jsx'] }]
  ]
};
