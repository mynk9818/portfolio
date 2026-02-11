<script setup lang="ts">
const { data: page } = await useAsyncData('work-experience', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const title = page.value?.experience?.title || 'Work Experience'
const description = page.value?.experience?.description
  || page.value?.seo?.description
  || 'A focused look at the roles and teams I have worked with.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="title"
      :description="description"
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left'
      }"
    />
    <LandingWorkExperience
      :page
      :show-title="false"
    />
  </UPage>
</template>

