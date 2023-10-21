# Eco UI Design System

## Installation

```bash
yarn
```

## Publish a new version

```bash
yarn
yarn version --patch
yarn publish
```

## Run Storybook

```bash
yarn storybook
```


## Guided tour

### Colors

All colors are defined in `tokens` files.
You should always use values defined in tokens (aka no custom css !).

### Card component

### Primitives

#### Box

It's a `div` with `flex`.

Important properties are `direction`, `justify` and `align`

#### Text

It's a `span`

### Icons

They are in `assets/svg`

### Rules

- Do not pass a component as property
- Do not use spacing between elements (ie not `padding-top`)
