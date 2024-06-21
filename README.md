# [maaybe](.)

![npm bundle size](https://img.shields.io/bundlephobia/min/maaybe)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/maaybe)
![NPM Version](https://img.shields.io/npm/v/maaybe)
![NPM Downloads](https://img.shields.io/npm/dy/maaybe)
![Jest Coverage](https://img.shields.io/badge/coverage-100%25-green?logo=jest)

maaybe introduces a new way to think about values.

You may need maaybe or maybe not. But since you maybe need it, maybe just install it. Maybe you don't need maaybe, but having maaybe installed may make your life merrier.

![TypeScript](https://img.shields.io/badge/TypeScript-5-4476c0?style=for-the-badge&logo=typescript)
![PNPM](https://img.shields.io/badge/pnpm-9-f69220?style=for-the-badge&logo=pnpm)

---

## What is `maaybe`?

`maaybe` is a library that introduces a new way to think about values. It introduces the value `maybe`. If you know that the value will exist in the future, but it doesn't exist initially, you can use `maybe` to represent that value.

For example, if you have `isLoggedIn`, you can give it the value `maybe` when the data is still loading, and then update it to `true` or `false` when the data is available. This allows you to handle the case where the data is not available yet, without having to write a lot of conditional logic.

> TLDR `maybe` is just an alias for `undefined`.

## [Development](./packages/maaybe)

You can learn more about the development of maaybe [here](./packages/maaybe)

## Usage

```sh
pnpm install maaybe
```

```tsx
// your main.ts or index.ts entry file
import 'maaybe';

// any file in the project
function SecureApp() {
  const [isLoggedIn, setIsLoggedIn] = useState<maybe>(maybe);

  useEffect(() => {
    getUser().then((user) => {
      setIsLoggedIn(!!user);
    });
  }, []);

  if (isLoggedIn === maybe) {
    return <Loading />;
  }

  if (isLoggedIn === false) {
    return <Login />;
  }

  return <Home />;
}


// any file in the project
function ShowUser() {
  const [user, setUser] = useState<maybe<User>>(maybe);

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
    });
  }, []);

  if (isMaybe(user)) {
    return <Loading />;
  }

  // This also works
  // if (user === maybe) {
  //   return <Loading />;
  // }

  if (user === null) {
    return <Login />;
  }

  return <UserProfile user={user} />;
}
```

## API

### The value `maybe`

```ts
const explicitlyMaybe = maybe;

// The following are all true
maybe === maybe;
maybe !== null;
maybe !== undefined;
maybe !== 0;
maybe !== '';
maybe !== {};
maybe !== [];
maybe !== (() => void null);
maybe !== true;
maybe !== false;
isMaybe(maybe);
```

### The type `maybe`

```ts
const thisMaybeMaybe: maybe;

// The following statements can be true
thisMaybeMaybe === maybe;
thisMaybeMaybe === true;
thisMaybeMaybe === false;
```

```ts
const thisMaybeMaybe: maybe;

// The following statements can be true but only one at a time
thisMaybeMaybe === maybe;
thisMaybeMaybe === true;
thisMaybeMaybe === false;
```

```ts
const thisMaybeMaybe: maybe<User>;

// The following statements can be true but only one at a time
thisMaybeMaybe === maybe;
thisMaybeMaybe === null;
thisMaybeMaybe instanceof User;
```
