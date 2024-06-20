# [maaybe](.)

maaybe introduces a new way to think about values.

You may need maaybe or maybe not. But since you maybe need it, maybe just install it. Maybe you don't need maaybe, but having maaybe installed may make your life merrier.

![TypeScript](https://img.shields.io/badge/TypeScript-5-4476c0?style=for-the-badge&logo=typescript)

---

## What is `maaybe`?

`maaybe` is a library that introduces a new way to think about values. It introduces the value `maybe`. If you know that the value will exist in the future, but it doesn't exist initially, you can use `maybe` to represent that value.

For example, if you have `isLoggedIn`, you can give it the value `maybe` when the data is still loading, and then update it to `true` or `false` when the data is available. This allows you to handle the case where the data is not available yet, without having to write a lot of conditional logic.

## [Development](./packages/maaybe)

You can learn more about the development of Maaybe [here](./packages/maaybe)

## Usage

```tsx
// your main.ts or index.ts entry file
import 'maaybe';

// any file in the project
function SecureApp() {
  const [isLoggedIn, setIsLoggedIn] = useState<Maybe | boolean>(maybe);

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
```
