<script setup>
    import * as md from 'markdown-it';
    import CommonWrapper from '@theme-hope/components/CommonWrapper.js';
    import PackageCard from '../components/PackageCard.vue';
    import { useRoute } from 'vue-router';
    import featured from './featured.json';
    const route = useRoute()
    console.log('route.params', route.params);
    console.log('route.query', route.query);
    const item = featured.find(i => i.name === route.params.id);
    
</script>

<template>
    <CommonWrapper>
        <main class="page" id="main-content">
            <div class="page-title">
                <br />
                <PackageCard :item="item" :link="false" />
            </div>
            <div v-if="item && item.readme" class="theme-hope-content" v-html="md().render(item.readme)"></div>
        </main>
    </CommonWrapper>
</template>