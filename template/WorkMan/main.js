import { mapMutations } from 'vuex'

export default {
    name: 'DemoAPP',
    data () {
        return {
            //how set, see: https://github.com/ektx/v-menubar
            nav: {
                type: 'main',
                data: [
                    {
                        title: 'DemoApp',
                        children: [
                            {
                                title: '退出',
                                fun: this.EXIT_APP
                            }
                        ]
                    },
                    {
                        title: 'Edit',
                        children: [
                            {
                                title: 'hello',
                                to: '/'
                            }
                        ]    
                    }
                ]
            }
            // your data
        }
    },
    mounted: function () {
        // [SYMBOL] 设置缓存应用
        this['Main/setToAlive']({
            title: 'DemoApp', // app名称
            cache: 'DemoApp', // 缓存名
            path: '/demoApp'  // 路由中访问路径
        })
        // [SYMBOL] 设置主菜单
        this.SET_MAIN_NAV()
    },
    activated: function () {
        // [SYMBOL] 设置主菜单
        this.SET_MAIN_NAV()
    },
    methods: {
        // [SYMBOL] 
        ...mapMutations(['Main/setNav', 'Main/setToAlive', 'Main/removeAlive']),

        // [SYMBOL] exit app
        EXIT_APP () {
            this.$router.push({path: '/'})
            this['Main/removeAlive']('todolist')
        },

        // [SYMBOL] set default nav
        SET_MAIN_NAV () {
            this['Main/setNav']( this.nav )
        },

        // add your methods ...
    }
}