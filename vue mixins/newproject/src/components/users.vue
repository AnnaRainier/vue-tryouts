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
                <el-button @click.native.prevent="deleteUser(scope.$index)" type="text"> Remove </el-button>
            </template>
        </el-table-column>
    </el-table>
    </el-card>
</template>

<script>
import service from '../service';
import list from '../mixins/list';

export default {
    mixins: [list],
    data() {
        return {
            header: 'Users',
            listName: 'users'
        }
    },
    created() {
        console.log('created in users')
    },
    methods: {
        deleteUser(index) {
            service.deleteUser(index);
        },
        filterDate(value, row) {
            return row.date === value;
        }
    }    
}
</script>

