<template>
    <div id="app">
        <ol>
            <li>{{$store.state.name}}</li>
            <li>{{$route.name}}</li>
            <li>{{msg}}</li>
            <li>{{name}}</li>
            <li>{{$store.state.list}}</li>
            <li>{{list}}</li>
            <li>{{numA}}</li>
            <li>{{num1}}</li>
            <li>{{completed}}</li>
            <li>{{listen}}</li>
           <li>{{this.$store.state.count}}
             <button @click="reduceC(5)">减少n</button></li>
          <li>{{this.$store.state.count}}
            <button @click="reduce">减少n</button></li>
        </ol>

    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations,mapActions} from 'vuex'

    export default {
        data() {
            return {
                msg: '空值'
            }
        },
        created() {
            this.msg = this.$store.state.name
        },
        computed: {//简化
            numA() {
                return this.$store.getters.num1 + this.$store.getters.num2
            },
            ...mapState(['name', "count", "list"],),
            ...mapGetters(['num1', "completed", "listen"]),
        },
        methods:{
          ... mapMutations(["reduceC"]),
          reduce(){
            this.$store.dispatch('decrementCAsync')
          }
        }
        /*  methods:{
            reduceC(n){
              this.$store.commit('reduceC',n)
            }
          }*/
        //watch (newVal,oldVal){只能用来监控整个对象或单个变量，比较适合的场景是一个数据影响多个数据}
        /*  computed:{//较适合对多个变量或者对象进行处理后返回一个结果值
            name1(){//返回的值
              return this.$store.state.name+'比redux简单多了！！！'//监控的值
            },
            list(){
              return this.$store.state.list.filter(item=>item.completed)
            },
            numA(){
              return this.$store.getters.num1+this.$store.getters.num2
            },
          }*/
// computed:{//属性名随便取，建议同名
//   numA(){
//     return this.$store.getters.num1+this.$store.getters.num2
//   },
//   completed(){
//     return this.$store.getters.completed
//   },
//   listen(){
//     return this.$store.getters.listen
//   },
// }
    }

</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
