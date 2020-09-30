<template>
  <div>
    <el-table :data="tableDate" border style="width: 100%">
      <el-table-column fixed prop="id" label="ID" width="auto">
      </el-table-column
      ><el-table-column fixed prop="title" label="标题" width="auto">
      </el-table-column>
      <el-table-column fixed prop="creatTime" label="日期" width="auto">
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
import { Message } from "element-ui";
import { list, deletee } from "../../api/blog";
export default {
  data() {
    return {
      tableDate: [{ id: 22, creatTime: "sadf", title: "sdfsdfssdfssdfssdfssdfssdfssdfssdfssdfssdfssdfssdfssdfssdfssdfssdfssdfsd" }],
      currentPage: 1,
      total: 0,
      size: 5,
    };
  },
  methods: {
    deleteClick(id) {
      this.$confirm("是否确定此操作", "系统提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          deletee(id).then((res) => {
            if (res.code == 200) {
              Message.info(res.data);
            }
          });
        })
        .catch();
    },
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
