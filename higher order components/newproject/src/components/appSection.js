import Vue from 'vue'
import service from '../service'

const appSection = (component, datasetName) => {
    return Vue.component('appSection', {
        render(createElement) {
            return createElement(component, {
                props: {
                    items: this.items
                },
                on: {
                    deleteItem: this.deleteItem
                }
            })
        },
        data() {
            return {
                items: []
            }
        },
        created() {
            this.items = service[datasetName]
       },
       methods: {
           deleteItem(index, functionName) {
               service[functionName](index)
           }
       }
    })
}

export default appSection;