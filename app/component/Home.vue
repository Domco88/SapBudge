<template>
	<div>
        <h1>This is Home page !</h1>
	</div>
</template>

<script>

// export default {
//     data () {
//     	return {
//     		articleList: [],
//     	}
//     },
//     mounted: function(){
//         Date.prototype.format = function(format) {
//             var o = {
//                 "M+": this.getMonth() + 1, //month
//                 "d+": this.getDate(), //day
//                 "h+": this.getHours(), //hour
//                 "m+": this.getMinutes(), //minute
//                 "s+": this.getSeconds(), //second
//                 "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
//                 "S": this.getMilliseconds() //millisecond
//             }
//             if (/(y+)/.test(format)) {
//                 format = format.replace(RegExp.$1,(this.getFullYear() + "").substr(4 - RegExp.$1.length));
//             }
//             for (var k in o){
//                 if (new RegExp("(" + k + ")").test(format)){
//                     format = format.replace(RegExp.$1,RegExp.$1.length == 1 ? o[k] :("00" + o[k]).substr(("" + o[k]).length));
//                 }
//             }
//             return format;
//         }
//     	marked.setOptions({
//             renderer: new marked.Renderer(),
//             gfm: true,
//             tables: true,
//             breaks: false,
//             pedantic: false,
//             sanitize: false,
//             smartLists: true,
//             smartypants: false,
//             highlight: function (code) {
//                 return highlight.highlightAuto(code).value;
//             }
//         })
//         if(this.$route.query.tagId){
//             this.$http.post('/api/articleList', {
//                 tagId: this.$route.query.tagId
//             }).then(
//                 respone => this.articleList = respone.body.reverse(),
//                 respone => console.log(respone)
//             )
//         } else {
//             this.fetchData()
//         }
//     },
//     methods: {
//     	articleDetails: function(id){
//     		this.$router.push('/articleDetails'+id+'')
//     	},
//     	fetchData: function(){
//     	    this.$http.get('/api/articleList').then(
//                 respone => {
//                     this.articleList = respone.body.reverse();
//                 },
//                 respone => console.log('erroe'+respone)
//             )
//     	}
//     },
//     directives: {
//         compiledMarkdown: {
//             bind: function(el){
//                 el.innerHTML = marked(el.innerText)
//                 if(el.querySelector('pre')){
//                     el.querySelector('pre').style.display = "none"
//                 }
//                 if(el.querySelector('blockquote')){
//                     el.querySelector('blockquote').style.display = "none"
//                 }
//             }
//         }
//     },
//     watch: {
//         '$route': 'fetchData'
//     },
// }
</script>