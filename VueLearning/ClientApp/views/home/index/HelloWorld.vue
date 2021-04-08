<template>
    <div>

        <b-container class="test-global-css test-scoped-css">
            Hello {{ name }} from Vue!
        </b-container>

        <b-button>This is vue-bootstrap </b-button>
        <b-list-group>
            <b-list-group-item v-for="data in dataarray" :key="data"
                               href="#" @click="getObject($event)">click On me</b-list-group-item>

        </b-list-group>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                name: "babes",
                dataarray:["cat"]
            }
        },
        methods: {
            getObject: function (obj) {
                console.log(obj.target.text);
            }
        }
    };
</script>

<style scoped lang="scss">
    $fontColor: #FFF;

    .test-scoped-css {
        color: $fontColor;
    }
</style>
