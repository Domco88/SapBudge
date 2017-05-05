<template>
    <h3>and this is Learning.http</h3>
    <p>our message is: {{this.msg}} </p>
</template>

<script>

    export default {
         data () {
    	    return {
    		    msg: 'Hello msg !!'
    	    }
        },    
        // mounted: () => {
        //     this.$http.get('/api/temperature').then(
        //         respone => this.message = respone.body.message
        //         respone => console.log(respone)
        //     )
        // }
    }

</script>