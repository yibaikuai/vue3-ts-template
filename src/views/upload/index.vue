<template>
    <div>
        <el-upload
            class="upload-area"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
        >
            <IconFont icon="mdi:cloud-upload-outline" class="upload-icon" />
            <div class="el-upload__text">
                {{ $t('upload.dragWords') }}
                <em>{{ $t('upload.clickWords') }}</em>
            </div>
            <template #tip>
                <div class="el-upload__tip">
                    jpg/png files with a size less than 500kb
                </div>
            </template>
        </el-upload>
        <el-divider>{{ $t('upload.result') }}</el-divider>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.upload-area {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .upload-icon {
        font-size: 70px;
        color: var(--text-color);
    }

    .el-upload__text {
        display: flex;
        flex-direction: column;
        align-items: center;

        em {
            color: #409eff;
        }
    }

    .el-upload__tip {
        margin-top: 10px;
        color: #c0c4cc;
    }
}

:deep(.el-upload) {
    width: 300px;
    height: 100px;
    padding: 0 0;
    //border-radius: 20px;
}

:deep(.el-upload-dragger) {
    width: 300px;
    height: 150px;
    padding: 0 0;
    border-radius: 20px;
    border: 4px dashed var(--border-color);
    background-color: var(--bar-bg-color);
    transition: 0.5s;
}

:deep(.el-upload-dragger:hover) {
    border: 4px dashed var(--theme-color);
    transform: scale(1.05);
}

:deep(.el-divider__text) {
    background-color: var(--content-bg-color);
    color: var(--text-color);
    border-radius: 5px;
    border: 1px solid var(--border-color);
}
</style>
