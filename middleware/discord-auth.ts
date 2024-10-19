import { authClient } from "~/lib/client";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { data: session } = await authClient.useSession(useFetch);
    if (!session.value) {
        authClient.signIn.social({
            provider: 'discord'
        });
    }
});