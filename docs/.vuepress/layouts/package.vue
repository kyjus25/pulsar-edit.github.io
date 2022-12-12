<script setup>
    import * as md from 'markdown-it';
    import CommonWrapper from '@theme-hope/components/CommonWrapper.js';
    import PackageCard from '../components/PackageCard.vue';
    import { useRoute } from 'vue-router';
    import featured from './featured.json';
    const route = useRoute()
    console.log('route.params', route.params);
    console.log('route.query', route.query);
    console.log(featured[0]);
    console.log(md);
    
</script>

<template>
    <CommonWrapper>
        <main class="page" id="main-content">
            <div class="page-title">
                <PackageCard :item="featured[0]" :link="false" />
            </div>
            <div class="theme-hope-content">
                <p>Package layout working!</p>
                {{featured[0].readme}}
            </div>
        </main>
    </CommonWrapper>
</template>