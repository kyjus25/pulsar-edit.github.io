<script setup>
    import CommonWrapper from '@theme-hope/components/CommonWrapper.js';
    import { useRoute } from 'vue-router';
    const route = useRoute()
    console.log('route.params', route.params);
    console.log('route.query', route.query);
</script>

<template>
    <CommonWrapper>
        <main class="page" id="main-content">
            <div class="page-title">
                <h1>Packages</h1>
            </div>
            <div class="theme-hope-content">
                <p>Package layout working!</p>
            </div>
        </main>
    </CommonWrapper>
</template>