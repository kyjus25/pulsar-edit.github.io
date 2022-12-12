<script setup>
    import { useSiteData } from "@vuepress/client";
    import * as md_ from 'markdown-it';
    import CommonWrapper from '@theme-hope/components/CommonWrapper.js';
    import PackageCard from '../components/PackageCard.vue';
    import { useRoute } from 'vue-router';
    import featured from './featured.json';

    const md = md_;

    const route = useRoute();
    const { title } = useSiteData().value;

    console.log('route.params', route.params);
    console.log('route.query', route.query);
    const item = featured.find(i => i.name === route.params.id);

    const append = (property, content) => {
        var meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
    }

    document.title = `${route.params.id} | ${title}`;
    append('og:title', item.name);
    append('og:url', document.location);
    append('og:site_name', title);
    append('og:description', item.metadata.description);
    append('og:image', `https://web.pulsar-edit.dev/image/packages/${route.params.id}`);
    append('og:image:type', 'image/png');
    append('og:image:width', '1200');
    append('og:image:height', '600');
    append('og:type', 'object');
    append('og:locale', 'en_US');
    append('twitter:card', 'summary_large_image');
    append('twitter:image:src', `https://web.pulsar-edit.dev/image/packages/${route.params.id}`);
    append('twitter:title', item.name);
    append('twitter:description', item.metadata.description);
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