<template>
    <div class="nav-breadcrumb-wrap">
    <div class="container">
      <nav class="nav-breadcrumb">
        <a href="/">Home</a>
         <!-- 此处使用插槽，如果有多个 <slot name="slot-name"> -->
        <slot></slot>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>
