<script setup lang="ts">
const { global } = useAppConfig()

const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const skills = [
  { name: 'React Native', icon: 'i-simple-icons-react' },
  { name: 'Flutter', icon: 'i-simple-icons-flutter' },
  { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs' },
  { name: 'Nuxt.js', icon: 'i-simple-icons-nuxtdotjs' },
  { name: 'TypeScript', icon: 'i-simple-icons-typescript' },
  { name: 'TailwindCSS', icon: 'i-simple-icons-tailwindcss' },
  { name: 'Firebase', icon: 'i-simple-icons-firebase' },
  { name: 'Node.js', icon: 'i-simple-icons-nodedotjs' },
  { name: 'GraphQL', icon: 'i-simple-icons-graphql' }
]

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    
    <UPageSection
      :ui="{
        container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-12 items-center'
      }"
    >
      <LandingAbout :page />
      
      <!-- Tech Stack Grid replacing photos -->
      <div class="hidden lg:grid grid-cols-3 gap-4 p-8 bg-elevated/20 rounded-3xl border border-muted/10 relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div
          v-for="(skill, idx) in skills"
          :key="skill.name"
          class="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 border border-muted/10 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 group/item"
          :class="[
            idx === 1 ? 'translate-y-4' : '',
            idx === 4 ? '-translate-y-4' : '',
            idx === 7 ? 'translate-y-4' : ''
          ]"
        >
          <UIcon :name="skill.icon" class="size-8 text-muted group-hover/item:text-primary transition-colors" />
          <span class="text-[10px] font-bold uppercase tracking-widest text-muted/60 group-hover/item:text-primary/80 transition-colors text-center">
            {{ skill.name }}
          </span>
        </div>
      </div>
    </UPageSection>

    <LandingWork :page />
    
    <LandingWorkExperience :page />

    <LandingFAQ :page />

    <UPageSection
      class="pb-24"
      :ui="{
        container: 'text-center'
      }"
    >
      <div class="max-w-2xl mx-auto space-y-8 py-12 px-6 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/10">
        <h2 class="text-4xl font-bold tracking-tight sm:text-5xl capitalize">
          Let's build something <span class="text-primary italic">exceptional</span>
        </h2>
        <p class="text-lg text-muted max-w-lg mx-auto">
          Searching for a developer who can bridge the gap between complex logic and beautiful design? Let's connect.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton
            label="Send Message"
            size="xl"
            icon="i-lucide-send"
            :to="`mailto:${global.email}`"
            target="_blank"
            external
            class="w-full sm:w-auto px-8"
          />
          <UButton
            label="Schedule a Call"
            size="xl"
            color="neutral"
            variant="ghost"
            icon="i-lucide-calendar"
            :to="global.meetingLink"
            target="_blank"
            class="w-full sm:w-auto"
          />
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>


