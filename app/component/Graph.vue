<vue-chart :columns="columns" :rows="rows" :options="options"></vue-chart>


<script>
        var rowData = [
            ['1:00', 21],
            ['6:21', 20],
            ['11:43', 23],
            ['17:14', 25]
        ]
        Vue.use(VueCharts);
        Vue.use(VueResource);
        new Vue({
            el: 'app',
            http: {
                root: '/root',
                headers: {
                    Authorization: 'Basic YXBpOnBhc3N3b3Jk'
                }
            },
            data: function () {
                return {
                    columns: [{
                        'type': 'string',
                        'label': 'Hour'
                    }, {
                        'type': 'number',
                        'label': 'Temperature'
                    }],
                    rows: rowData,
                    options: {
                        title: 'Room Temperature',
                        hAxis: {
                            title: 'Hour',
                            // minValue: '2004',
                            // maxValue: '2007'
                        },
                        vAxis: {
                            title: 'Temperature',
                            minValue: 0,
                            maxValue: 30
                        },
                        width: 900,
                        height: 500,
                        curveType: 'function'
                    }
                }
            },
            mounted: function () {
                this.$http.get('/api/temperature').then(function (response) {
                    rowData = response.body.result;
                    console.log('hi there console !!')
                })
            }
        })
</script>