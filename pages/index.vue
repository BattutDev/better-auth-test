<script setup lang="ts">

import { authClient } from "~/lib/client";

definePageMeta({
  middleware: 'discord-auth'
});

const session = await authClient.useSession(useFetch);

async function signOut() {
  await authClient.signOut();
  window.location.href = "/";
}

</script>

<template>
  <div>
    <div v-if="session.data.value">
      {{session.data}}
      <button @click="signOut">
        Sign out
      </button>
    </div>
  </div>
</template>