<template>
  <span>
    Kids ages: <span v-for="(child, index) in children">
    <span>{{ child.age }}</span><span v-if="(index < children.length - 1)">, </span>
</span>
</span>
</template>

<script>
export default {
  name: 'ChildInfo',
  props: ['children']
}
</script>
