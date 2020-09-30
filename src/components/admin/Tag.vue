<template>
  <div>
    <el-dialog title="信息填写" :visible.sync="dialogFormVisible">
      <el-form label-position="left" label-width="80px" :model="form">
        <el-form-item label="标签名:" >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="标签描述:" >
          <el-input v-model="form.descrition" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="create">确 定</el-button>
      </div>
    </el-dialog>
    <el-table :data="tableDate" border style="width: 100%">
      <el-table-column fixed prop="creatTime" label="日期" width="auto">
      </el-table-column>
      <el-table-column fixed prop="id" label="ID" width="auto">
      </el-table-column
      ><el-table-column fixed prop="name" label="名称" width="auto">
      </el-table-column>
      <el-table-column fixed prop="description" label="描述" width="auto">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="auto">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row.id)"
            size="small"
            type="danger"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button
      style="position: absolute; right: 100px; margin: 0 auto"
      type="info"
      @click="dialogFormVisible = true"
      >添加标签</el-button
    >
    <el-pagination
      background
      layout="total, prev, pager, next"
      :total="total"
      :current-page="currentPage"
      :page-size="size"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import { deletee, list, create } from "../../api/tag";
import { Message } from "element-ui";
export default {
  data() {
    return {
      tableDate: [],
      dialogFormVisible: false,
      form: {},

      currentPage: 1,
      total: 0,
      size: 5,
    };
  },
  methods: {
    create() {
      create(this.form).then((res) => {
        if (res.code === 200) {
          Message.info(res.data);
        }
      });
      this.dialogFormVisible = false;
    },
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
    mounted() {
      this.handleCurrentChange(1);
    },
  },
};
</script>

<style>
</style>