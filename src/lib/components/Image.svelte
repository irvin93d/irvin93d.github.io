<script lang="ts">
  import { onMount } from "svelte"
  import { twMerge } from "tailwind-merge"

  export let src: string
  export let alt: string
  export let priority: boolean = false
  export let imageClass: string = ""
  export { clazz as class }

  let clazz: string = ""

  // TODO Use an intersection observer here
  let visible = false
  let loaded = false

  let self: HTMLImageElement
  onMount(() => {
    if (self.complete) {
      loaded = true
    }
  })
</script>

<div class={twMerge("relative overflow-hidden", clazz)}>
  <img
    bind:this={self}
    class={twMerge(
      "object-cover transition-opacity",
      loaded ? "opacity-100" : "opacity-0",
      imageClass,
    )}
    {alt}
    loading={priority || visible ? "eager" : "lazy"}
    {src}
    on:load|once={() => {
      loaded = true
    }}
  />
  <slot {loaded} {visible} />
</div>
