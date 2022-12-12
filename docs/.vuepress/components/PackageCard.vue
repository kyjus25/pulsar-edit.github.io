<script setup>
    const {item, link} = defineProps(['item', 'link']);
</script>

<template>
    <div class="article-item" style="transition: transform 0.25s ease-in-out 0s, opacity 0.25s ease-in-out 0s; transform: translateY(0px); opacity: 1;">
        <article class="article package-card" vocab="https://schema.org/" typeof="Article" style="transition: transform 0.25s ease-in-out 0s, opacity 0.25s ease-in-out 0s; transform: translateY(0px); opacity: 1;">
            <a :href="link === true ? `/packages/${item.name}` : '#'">
                <header class="title">
                    <span property="headline">{{item.name}}</span>
                </header>
                <div class="excerpt">
                    <p>{{item.metadata.description}}</p>
                </div>
                <hr class="hr">
                <div class="page-info">
                    <span class="author-info" aria-label="Author🖊" data-balloon-pos="down">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon author-icon" viewBox="0 0 1024 1024" fill="currentColor" aria-label="author icon">
                            <path d="M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"></path>
                        </svg>
                        <span>
                            <span class="author-item">{{item.repository.url.split('/')[3]}}</span>
                        </span>
                    </span>
                    <span class="download-info" aria-label="Downloads 🖥️" data-balloon-pos="down">
                        <i class="fas fa-download icon"></i>
                        <span>
                            <span class="author-item">{{item.downloads}}</span>
                        </span>
                    </span>
                    <span class="stargazer-info" aria-label="Stargazers ⭐" data-balloon-pos="down">
                        <i class="fas fa-star icon"></i>
                        <span>
                            <span class="author-item">{{item.stargazers_count || 0}}</span>
                        </span>
                    </span>
                    <span class="version-info" aria-label="Version 🏷️" data-balloon-pos="down">
                        <i class="fas fa-tag icon"></i>
                        <span>
                            <span class="author-item">{{item.metadata.version}}</span>
                        </span>
                    </span>
                    <span class="license-info" aria-label="License 🪪" data-balloon-pos="down">
                        <i class="fas fa-id-card icon"></i>
                        <span>
                            <span class="author-item">{{item.metadata.license}}</span>
                        </span>
                    </span>
                    <a href="" class="download">
                        <span class="download-action" aria-label="Download 🖥️" data-balloon-pos="down">
                            <i class="fas fa-download icon"></i>
                            <span class="author-item">Download</span>
                        </span>
                    </a>
                </div>
            </a>
        </article>
    </div>
</template>