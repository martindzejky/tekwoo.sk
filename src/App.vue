<template>
    <Navigation />

    <Suspense>
        <RouterView />
    </Suspense>
</template>
<script setup lang="ts">
import Navigation from '@/components/Navigation.vue';
</script>
