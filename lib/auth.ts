import { betterAuth } from "better-auth";
import pg from 'pg';

export const auth = betterAuth({
    appName: 'bot',
    database: new pg.Pool({
        connectionString: process.env.DATABASE_URL
    }),
    socialProviders: {
        discord: {
            scope: ['identify', 'email', "guilds"],
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
        },
    }
});