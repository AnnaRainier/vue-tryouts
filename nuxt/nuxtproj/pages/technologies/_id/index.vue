<template>
    <div>
        <div>
            {{ $route.params.id }}
            <h1> {{ tech.name }} </h1>
            <h2> {{ tech.description }} </h2>
        </div>
        
    </div>
</template>
<script>
export default {
    asyncData(context) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let tech = context.store.state.technologies
                .find(t => t.id == context.route.params.id);
                resolve({tech: tech})
            }, 2000)
        })
    }
}
</script>

