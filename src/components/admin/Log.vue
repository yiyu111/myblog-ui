<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="id" label="ID" width="auto">
      </el-table-column>
      <el-table-column fixed prop="date" label="目的" width="auto">
      </el-table-column>
      <el-table-column fixed prop="type" label="类型" width="auto">
      </el-table-column>
      <el-table-column fixed prop="operator" label="操作人" width="auto">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="auto">
        <template slot-scope="scope">
          <el-button
            @click="deleteClick(scope.row.id)"
            size="small"
            type="danger"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page="currentPage"
        :page-size="size"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { list } from "../../api/syslog";
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      total: 0,
      size: 5,
    };
  },
  methods: {
    handleCurrentChange(c) {
      this.currentPage = c;
      const _this = this;
      list(this.currentPage, this.size).then((res) => {
        if (res.code === 200) {
          _this.tableDate = res.data.records;
          _this.total = res.data.total;
        }
      });
    },
  },
  mounted() {
    this.handleCurrentChange(1);
  },
};
</script>

<style>
</style>