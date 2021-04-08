<template>
    <h1 class="display-1">This is a {{testName}}</h1>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
                testName:'testingController',
            }
        }
    };
</script>