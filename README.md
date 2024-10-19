# Nuxt Minimal Starter

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## .env
> Create a .env file
```dotenv

BETTER_AUTH_SECRET= # Let your cat walk on the keyboard
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_TRUSTED_ORIGINS="http://localhost:3000,https://discord.com"
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/better-auth?schema=public"

DISCORD_CLIENT_ID= # discord app id
DISCORD_CLIENT_SECRET= # discord app oauth2 secret

```

## Docker - Postgres
```bash
docker run --name pg-better-auth -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres
```

## Create db on postgres
```bash
su - postgres
createdb better-auth
```

## Migrate on Postgres
```bash
npx @better-auth/cli migrate
```
