#!/bin/bash
# 将 PNG 图片批量转换为 WebP 格式的脚本
# @author: Lruihao
#
# 使用步骤：
# 1. 将 convert_png_to_webp.sh 放到包含 PNG 文件的目录中
# 2. 打开终端，给脚本添加执行权限：`chmod +x convert_png_to_webp.sh`
# 2. 运行脚本： `./convert_png_to_webp.sh`
#
# 执行该脚本后，当前目录中的所有 PNG 文件将被转换为 WebP 格式，
# 输出文件名将与原文件相同，只是扩展名变为 `.webp`。

# 设置输入目录为当前目录
input_dir="."

# 遍历每个 PNG 文件
for img in "$input_dir"/*.png; do
  # 检查文件是否存在
  if [[ -f "$img" ]]; then
    # 获取文件名（不带扩展名）
    filename=$(basename "$img" .png)
    # 转换为 WebP 格式
    cwebp -q 50 -lossless "$img" -o "$input_dir/$filename.webp"
    echo "已转换: $img 为 $input_dir/$filename.webp"
    # 转换后删除原文件
    rm "$img"
    echo "已删除: $img"
  fi
done
