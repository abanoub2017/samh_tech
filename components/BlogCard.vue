<template>
    <el-col class="blog-card my-1 " :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <el-card shadow="hover">
            <template #header>{{ card?.title }}</template>
            <el-image src="https://picsum.photos/640/360?grayscale" fit="contain" alt="Blog Post Image" lazy />
            <div class="card-content">
                <p>{{ card?.excerpt }}</p>
                <el-button type="primary" plain>Read More</el-button>

            </div>
        </el-card>
    </eL-col>
</template>

<script setup lang="ts">
const props = defineProps({
    card: Object
}) as any

useSeoMeta({
    title: props.card.title,
    ogTitle: props.card.title,
    description: props.card.excerpt,
    ogDescription: props.card.excerpt,
    ogImage: 'https://picsum.photos/640/360?grayscaleg',
})

</script>

<style scoped>
/* Style your blog card here */
</style>
