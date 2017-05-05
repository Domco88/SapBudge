<template>
    <div id="app">
        <div>
            <div>
                <ul>
                    <router-link to="/"><li>Home</li></router-link>
                    <router-link to="/graph"><li>Graph</li></router-link>
                    <router-link to="/learning"><li>Learning</li></router-link>
                    <router-link to="/learning/http"><li>Learning http</li></router-link>
                </ul>
            </div>
        </div>
        <div>
                <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app'

    // mounted: function(){
    //      this.$http.get('/api/personalInformation').then(
    //           respone => {
    //                this.name = respone.body[0].name,
    //                this.individualitySignature = respone.body[0].individualitySignature
    //           },
    //           respone => console.log(respone)
    //      )
    //      this.$http.get('/api/getArticleLabel').then(
    //           respone => this.tagNumber = respone.body.length,
    //           respone => console.log(respone)
    //      )
    //      this.$http.get('/api/articleList').then(
    // 		  respone => this.articleNumber = respone.body.length,
    // 		  respone => console.log(respone)
    // 	 )
    // },

}
</script>