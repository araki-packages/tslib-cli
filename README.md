# lib-template-node

## 初回設定


1. 下記の`package.json`の編集を行う。

```json:package.json
  "name": "@araki-packages/lib-template-node",
  "version": "1.0.0",
  "description": "",
  "main": "dist/rollup-plugin-babel.cjs.js",
  "module": "dist/rollup-plugin-babel.esm.js",
  "types": "dist/types/index.d.ts",
  "llfe": {
    "name": "RollupPluginBabel",
    "file": "dist/rollup-plugin-babel.min.js"
  },
  "author": {
    "name": "ArakiTkaki",
    "email": "arakitakaki.work@gmail.com"
  },
```

※ IIFEに関してはCDNを設定している方のみに公開する方法です。

## npmへパッケージを公開する

- [初めてのnpm パッケージ公開](https://qiita.com/TsutomuNakamura/items/f943e0490d509f128ae2)

## publish references

```sh
> npm version major # メジャーバージョンのアップグレード
> npm version minor # マイナーバージョンのアップグレード
> npm version patch # パッチバージョンのアップグレード
```

バージョニング管理に関しては下記を参照

- [semverとnpm](http://64.hateblo.jp/entry/2014/04/25/045940)

> majorは後方互換性のないAPIの変更時に
> minorは後方互換性のある機能追加時に
> patchは後方互換性のあるバグ修正時に

## publish bat

```sh
# gitのコミットとlintを終わらせる
> npm run build
> npm version patch
> npm publish
```

# README TEMPLATE

## Install

```sh
> npm install {package_name}

# or

> yarn add {package_name}
```

## Usage

example codes

## Documentation

document url

## Licens

MIT

Copyright (c) {hogehoge}

