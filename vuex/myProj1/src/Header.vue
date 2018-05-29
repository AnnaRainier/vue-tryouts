<template>
<div>
    <div>
        <slot></slot>
    </div>
    <div>
       <slot name="subtitle">default</slot> 
    </div>
    <div>
        <slot name="copyright"> Annie R. inc </slot>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    div {
        text-align: center;
    }
</style>

