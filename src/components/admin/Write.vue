<template>
  <el-main>
    <el-row>
      <el-col :span="24">
        <el-form
          ref="editForm"
          status-icon
          :model="editForm"
          :rules="rules"
          label-width="80px"
          style="box:flex;"
        >
          <el-form-item label="标题" prop="title">
            <el-input v-model="editForm.title"></el-input>
          </el-form-item>
          <el-form-item label="摘要" prop="description">
            <el-input type="textarea" v-model="editForm.description"></el-input>
          </el-form-item>
          <el-form-item label="标签">
            <el-select
              size="medium"
              style="width:450px; margin:0 700px 0 0;"
              v-model="editForm.tags"
              multiple
              placeholder="请选择标签"
            >
              <el-option
                v-for="item in tags"
                :key="item.id"
                :label="item.name"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="内容" prop="content">
            <mavon-editor :toolbars="toolbars" v-model="editForm.content" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('editForm')"
              >立即创建</el-button
            >
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { create } from "../../api/blog";
export default {
  name: "Write",
  data() {
    return {
      tags: [{ value: "sdf" }, { value: "sdffff" }],
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        // imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      editForm: {
        title: "",
        description: "",
        content: "",
        tags: [],
      },
      rules: {
        title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          { max: 50, message: "长度在 3 到 50 个字符", trigger: "blur" },
        ],
        description: [
          { required: true, message: "请输入摘要", trigger: "blur" },
          { min: 50, message: "不能少于50个字符" },
        ],
        content: [{ min: 50, message: "不能少于50个字符" }],
      },
    };
  },
  methods: {
    submitForm(editForm) {
      const _this = this;
      this.$refs[editForm].validate((valid) => {
        if (valid) {
          _this
            .$confirm("是否确定提交", "系统提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
            })
            .then(() =>
              create(this.editForm).then((res) => {
                if (res.code === 200)
                  _this.$alert("操作成功", "提示", {
                    confirmButtonText: "确定",
                  });
              })
            )
            .catch();
        } else {
          _this.$message({ type: "warning", message: "请按规范提交" });
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped></style>
