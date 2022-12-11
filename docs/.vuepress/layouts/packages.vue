<script setup>
    import CommonWrapper from '@theme-hope/components/CommonWrapper.js';
    import Sidebar from '@theme-hope/modules/sidebar/components/Sidebar.js';
    import BreadCrumb from '@theme-hope/components/BreadCrumb.js';
</script>

<template>
    <CommonWrapper>
        <div class="page blog">
            <div class="blog-page-wrapper">
                <main class="blog-main" id="main-content">
                    <div class="page-title">
                        <h1>Packages</h1>
                    </div>
                    <div class="theme-hope-content">
                        <p>Package layout working!</p>
                    </div>
                </main>
                <aside class="blog-info-wrapper">
                    <br />
                    <div class="blogger-info" vocab="https://schema.org/" typeof="Person">
                        <div class="blogger"></div>
                        <div class="num-wrapper">
                            <div>
                                <div class="num">10</div>
                                <div>Featured</div>
                            </div>
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
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon article-icon" viewBox="0 0 1024 1024" fill="currentColor" aria-label="article icon">
                                <path d="M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"></path>
                                </svg>
                                Featured
                            </div>
                        <ul class="sticky-article-list">
                            <li>Tst</li>
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
