<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

interface ExperienceItem {
  position: string
  date: string
  freelance?: boolean
  company: {
    name: string
    url: string
    logo: string
    color: string
  }
}

const props = defineProps<{
  page: {
    experience: {
      title: string
      items: ExperienceItem[]
    }
  }
  showTitle?: boolean
}>()

const sectionTitle = computed(() => (props.showTitle === false ? undefined : props.page.experience.title))
</script>

<template>
  <UPageSection
    id="work-experience"
    :title="sectionTitle"
    :ui="{
      container: '!p-0 gap-6 sm:gap-6',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="relative mx-auto max-w-3xl">
        <div class="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
        <div class="flex flex-col gap-4">
          <Motion
            v-for="(experience, index) in page.experience.items"
            :key="index"
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ delay: 0.2 * index }"
            :in-view-options="{ once: true }"
          >
            <div class="relative pl-10 sm:pl-12">
              <div
                class="absolute left-[7px] top-5 size-3 rounded-full border border-primary/40 bg-primary/20 shadow-[0_0_0_4px_rgba(0,0,0,0.03)]"
                aria-hidden="true"
              />
              <div class="rounded-xl border border-muted/60 bg-elevated/40 p-4 sm:p-5">
                <div class="flex flex-wrap items-center gap-2 sm:gap-3">
                  <p class="text-sm font-medium text-default">
                    {{ experience.position }}
                  </p>
                  <USeparator class="hidden sm:block" />
                  <p class="text-sm text-muted whitespace-nowrap">
                    {{ experience.date }}
                  </p>
                  <span
                    v-if="experience.freelance"
                    class="text-xs uppercase tracking-wide text-primary/80 bg-primary/10 rounded-full px-2 py-1"
                  >
                    Freelance
                  </span>
                </div>
                <div class="mt-2 flex items-center gap-2">
                  <ULink
                    class="inline-flex items-center gap-2 text-sm"
                    :to="experience.company.url"
                    target="_blank"
                  >
                    <span
                      class="inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs sm:text-sm bg-muted/30"
                      :style="{ color: experience.company.color }"
                    >
                      <UIcon :name="experience.company.logo" />
                      <span class="font-medium">{{ experience.company.name }}</span>
                    </span>
                    <UIcon name="i-lucide-arrow-up-right" class="size-4 text-muted" />
                  </ULink>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>
