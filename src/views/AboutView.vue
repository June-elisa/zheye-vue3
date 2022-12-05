<template>
  <div class="about">
    <h1>Reya专栏</h1>
    <div class="article">
      <h1>This is an about page</h1>
      <ul class="article_content">
        <li>今天是啥子日子</li>
        <li>今天是立夏</li>
        <li>哆啦A梦</li>
        <li>野原广志</li>
        <li>野原美伢</li>
        <li>野原新之助</li>
        <li>野原葵</li>
        <li>野原小白</li>
      </ul>
    </div>

    <div class="sidebar">
      <h1>目录</h1>
      <ol>
        <li class="active">一、变量&nbsp;</li>
        <li class="">二、嵌套</li>
        <li class="">三、继承&nbsp;@extend&nbsp;</li>
        <li class="">四、混入&nbsp;@mixin 、@include</li>
        <li class="">五、引入外部文件</li>
        <li class="sub-box">
          <ol>
            <li class="">@import</li>
            <li class="">Partials</li>
          </ol>
        </li>
        <li class="">六、！default，！global</li>
        <li class="">七、语句</li>
        <li class="sub-box">
          <ol>
            <li class="">7.1 条件语句 @if,@else if,@else</li>
            <li class="">7.2 循环语句 @for ,@while（平时用的比较少，暂时先了解）</li>
          </ol>
        </li>
        <li class="">八、自定义函数&nbsp;@function</li>
        <li class="">九、颜色函数</li>
      </ol>
    </div>

    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>

    <div class="footer">
      <span>关于这篇文章</span>
      <span>@copyright:Reya</span>
      <span>联系我们</span>
      <el-button type="primary">Primary</el-button>
      <el-icon class="is-loading">
        <loading />
      </el-icon>
    </div>

  </div>
</template>
<style lang="scss">
$base-color:rgb(225, 13, 13);
$base-color:blue !default;
$side:top;
$side:bottom;

@mixin myCSS($color:blue, $backgroundColor:yellow) {
  color: $color;
  background-color: $backgroundColor;
}

ol,
ul {
  list-style: none;
}

.about {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(161, 195, 204);
  @include myCSS(purple);

  h1 {
    // color: $base-color;
    color: lighten($base-color, 20%);
  }

  .article {
    width: 200px;
    background-color: pink;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px;
    margin-top: 10px;
    border-#{$side}: 2px solid blue;

    &:hover {
      color: aqua;
    }

    &_content {
      font-style: italic;
      font-weight: 700;
    }

  }

  .sidebar {
    // @extend .article;
    position: absolute;
    left: 10px;
    top: 200px;
    text-align: left;
    background: #fff;
    width: 300px;
    border-#{$side}: 2px solid blue;
  }

  .footer {
    width: 100%;
    position: fixed;
    z-index: 302;
    bottom: 0;
    left: 0;
    height: 39px;
    padding-top: 1px;
    overflow: hidden;
    zoom: 1;
    margin: 0;
    line-height: 39px;
    background: #fff;

    span {
      // padding: 0 20px;
      // color: $base-color;
    }
  }
}
</style>
