# Auth Sensei

Auth Sensei is an authentication package for Next.js 13+ applications, similar to next-auth but with a focus on simplicity and ease of use.

## Installation

```bash
npm install auth-sensei
```

## Usage

1. Wrap your application with the `AuthSenseiProvider`:

```tsx
import { AuthSenseiProvider } from 'auth-sensei';

function MyApp({ Component, pageProps }) {
  return (
    <AuthSenseiProvider>
      <Component {...pageProps} />
    </AuthSenseiProvider>
  );
}

export default MyApp;
```

2. Use the `useAuthSensei` hook in your components:

```tsx
import { useAuthSensei } from 'auth-sensei';

function MyComponent() {
  const { user, signIn, signOut, loading } = useAuthSensei();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <div>
        Welcome, {user.name}!
        <button onClick={signOut}>Sign out</button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn({ email: 'user@example.com', password: 'password' })}>
      Sign in
    </button>
  );
}
```

3. Protect routes using the middleware:

Create a `middleware.ts` file in your project root:

```ts
export { middleware } from 'auth-sensei';

export const config = {
  matcher: ['/protected/:path*'],
};
```

## Features

- [x] Login
- [x] Register
- [x] Forgot Password
- [x] Reset Password
- [x] Change Password
- [ ] OAuth with Google and Github (coming soon)
- [ ] Magic Link Signin (coming soon)
- [x] Middleware for protecting routes in Next.js
- [x] Hook for getting the current session
- [x] Function for getting the current session from Next.js server actions or API routes
- [x] Context for wrapping the app
- [x] TypeScript support
- [ ] Next.js example (coming soon)
- [ ] Prisma adapter (coming soon)
- [ ] Prisma schema (coming soon)

## API

For detailed API documentation, please refer to the [API documentation](docs/API.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

in dev