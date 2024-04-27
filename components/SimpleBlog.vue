<template>
    <section class="simple-blog">
        <h2>{{ $t('simpleBlog.title') }}</h2>
        <div class="blog-cards">
            <el-row :gutter="20" class=" align-item-center ">
                <BlogCard v-for="card in blogPosts" :key="card.id" :card="card" />
            </el-row>
        </div>
    </section>
</template>

<script setup lang="ts">


const blogPosts = ref([
    {
        id: 1,
        // image: '/blog-post-1.jpg',
        title: 'Exploring the Wonders of Paris',
        excerpt: 'Experience the romance and charm of the City of Lights...',
        link: '#',
    },
    {
        id: 2,
        // image: '/blog-post-1.jpg',
        title: 'Exploring the Wonders of Paris 2',
        excerpt: 'Experience the romance and charm of the City of Lights...',
        link: '#',
    },
    {
        id: 3,
        // image: '/blog-post-1.jpg',
        title: 'Exploring the Wonders of Paris 2',
        excerpt: 'Experience the romance and charm of the City of Lights...',
        link: '#',
    },

])

</script>

<style scoped>
/* Style your blog section and cards here */
</style>
