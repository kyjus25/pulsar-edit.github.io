<script setup>
    import CommonWrapper from '@theme-hope/components/CommonWrapper.js';
    import PackageCard from '../components/PackageCard.vue';
    // TODO: API needs cors - Justin White <kyjus25>
    // https://api.pulsar-edit.dev/api/packages/featured
    import featured from './featured.json';
    console.log(featured);
</script>

<template>
    <CommonWrapper>
        <div class="page blog packages">
            <div class="blog-page-wrapper">
                <main class="blog-main" id="main-content">
                    <div class="page-title">
                        <h1>Featured Packages</h1>
                        <form class="search-box" role="search">
                            <input type="search" placeholder="Search Packages..." autocomplete="off" spellcheck="false">
                        </form>
                    </div>
                    <div class="theme-hope-content">
                        <div id="article-list" class="article-wrapper" style="transition: transform 0.25s ease-in-out 0.24s, opacity 0.25s ease-in-out 0.24s; transform: translateY(0px); opacity: 1;">
                            <PackageCard v-for="item in featured" :item="item" :link="false"  />
                        </div>
                    </div>
                </main>
                <aside class="blog-info-wrapper">
                    <br />
                    <div class="blogger-info" vocab="https://schema.org/" typeof="Person">
                        <div class="blogger"></div>
                        <div class="num-wrapper">
                            <div>
                                <div class="num">25</div>
                                <div>Trending</div>
                            </div>
                            <div>
                                <div class="num">5</div>
                                <div>New</div>
                            </div>
                            <div>
                                <div class="num">10,000</div>
                                <div>Total</div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-info-list">
                        
                        <div class="sticky-article-wrapper">
                            <div class="title">
                                <i class="fas fa-award"></i>
                                Featured
                            </div>
                        <ul class="sticky-article-list">
                            <li v-for="item in featured"><a href="#">{{item.name}}</a></li>
                        </ul>
                        </div>
                        <!---->
                        <!---->
                        <!---->
                    </div>
                </aside>
            </div>
        </div>
    </CommonWrapper>
</template>
