module.exports = {
  presets: [
    '@babel/preset-env', //converte JS mais moderno em JS mais antigo para o Browser
    '@babel/preset-react', // Add as funcionalidades do React na conversão
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ],
}