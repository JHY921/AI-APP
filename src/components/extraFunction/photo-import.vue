<template>
    <div class="overBox">
      <div class="upImgBox">
        <p>上报图片1</p>
        <div class="uploaderBox">
          <van-uploader @oversize="onOversize" @delete="(file, detail) => commondeleteClzp(file, detail, 'baxxPthoto')"
            :before-read="beforeRead" :after-read="(file, detail) => commonuploadFiles(file, detail, 'baxxPthoto')" v-model="form.baxxPthoto"
            :max-count="2" :max-size="5 * 1024 * 1024" accept="image/*" />
        </div>
      </div>
      <div class="bonBomTwoBox">
        <van-button block type="info" @click="confirmOn">确定</van-button>
      </div>
    </div>
  </template>
  <script>
//   import { uploadFiles, deleteFiles } from '@/api/publicApi' //上传、删除接口
  export default {
    data() {
      return {
        // 提交信息
        form: {
          baxxPthoto: [],
          xgghpPhoto: [],
          zzsPhoto: []
        }
      }
    },
    methods: {
      // 提交
      confirmOn() {
        console.log(this.form)
      },
      //校验图片的格式
      beforeRead(file) {
        if (!/(jpg|jpeg|png|JPG|PNG|gif|GIF)/i.test(file.type)) {
          this.$toast('请上传正确格式的图片')
          return false
        }
        return true
      },
      //校验上传图片大小
      onOversize(file) {
        this.$toast('文件大小不能超过5MB')
      },
      //现场照片上传
      commonuploadFiles(file, detail, name) {
        let formData = new FormData()
        formData.append('file', file.file)
        this.form[name].splice(detail.index, 1)
        uploadFiles(formData).then(res => {
          if (res.code == '10000') {
            this.form[name].push({ url: res.data.realPath })
          } else if (res.code != '10000') {
            this.$toast('网络异常，请重新上传')
          }
        })
      },
      // 删除方法
      getDelUrl(url) {
        let delurl = ''
        if (url) {
          let arr = url.split('file-ydzf-app') //删除传参：截取file-ydzf-app后面的
          if (arr.length) {
            delurl = arr[1]
          }
        }
        return delurl
      },
      // 删除
      commondeleteClzp(file, detail, name) {
        let urlStr = this.getDelUrl(file.url)
        this.form[name].splice(detail.index, 0)
        deleteFiles({ filePath: urlStr }).then(res => {
          if (res.code == 10000) {
            this.$toast('删除成功！')
          }
        })
      }
    }
  }
  </script>
  <style scoped lang="scss">
  .overBox {
    padding: 10px;
    background: white;
  }
  .upImgBox {
    padding: 10px 0px 10px 0px;
    border-bottom: 1px solid rgb(233, 234, 234);
    display: flex;
    align-items: center;
    margin: 0px 16px;
    font-size: 14px;
    font-weight: bold;
    color: #000f32;
  }
  .uploaderBox {
    margin-left: 10px;
  }
  ::v-deep .van-uploader__file {
    width: 60px;
    height: 60px;
  }
  </style>
  
  