# Тестовое задание для оценки навыков

Суть задачи - нужно исправить типы, и отрефакторить компонент `FavoriteCompaniesSelect` - перевести на Typescript и сделать там чистый и понятный код. В данный момент там чёрт ногу сломит, а компонент на самом деле очень простой.

В данный момент компонент работает правильно. В файле App.tsx есть несколько примеров использования - это сделано для того, чтобы можно было понять, как должен работать компонент. После рефакторинга он должен работать так же.
Названия пропсов могут быть другие, если это улучшит читаемость кода.

В файле `FavortieCompaniesSelect` есть константа `company_stats` - в рамках тестового это данные из json, но в реальных условиях они будут динамические, поэтому эти данные должны приходить в пропсы компонента.

Если для достижения идеального кода нужно будет полностью переписать компонент с нуля - без проблем.

## Цель тестового задания - очень краткий, понятный и правильно работающий код.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
