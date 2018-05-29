import service from '../service'

export default {
    data() {
        return {
            items: []
        }
    },
    created() {
        this.items = service[this.listName]
        console.log('created in mixin')
    }
}