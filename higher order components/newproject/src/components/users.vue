<template>
    <el-card>
        <div slot="header" class="clearfix">
            <h2>{{ header }}</h2>
        </div>
    <el-table :data="items" style="width:100%">
        <el-table-column prop="date" label="Date" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="80"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
        <el-table-column fixed="right" label="Operations" width="120">
            <template slot-scope="scope">
                <el-button @click.native.prevent="$emit('deleteItem', scope.$index, 'deleteUser')" type="text"> Remove </el-button>
            </template>
        </el-table-column>
    </el-table>
    </el-card>
</template>

<script>
import service from '../service';
//import list from '../mixins/list';

export default {
    //mixins: [list],
    props: ['items'],
    data() {
        return {
            header: 'Users',
            //listName: 'users'
            //users: []
        }
    },
    methods: {
        filterDate(value, row) {
            return row.date === value;
        }
    }    
}
</script>

