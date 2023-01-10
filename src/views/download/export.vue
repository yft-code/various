<template>
  <div>
    文件导出,涉及文件流问题,封装的公共方法
  </div>
</template>

<script>
export default {
methods:{
   downBlobFiles(url, data, fileName) {
    return request({
        url: url,
        method: "post",
        responseType: "blob",
        data: data
    }).then(response => {
        // 处理返回的文件流
        const blob = response.data;
        if (blob && blob.size === 0) {
            this.$notify.error("内容为空，无法下载");
            return;
        }
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        window.setTimeout(function () {
            window.URL.revokeObjectURL(blob);
            document.body.removeChild(link);
        }, 0);
    });
}
}
}
</script>

<style>

</style>