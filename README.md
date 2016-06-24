# CDC_Tencent_Web_Practice
######6_24 轮播图问题      
问题描述：     
在官网上取下的图片过大，无法在屏幕中显示一部分图片，无法使两个块级元素并列放置，图片无法居中     
解决方法：   
overflow: hidden;
display: inline-block;   
position: relative;
left: 50%;
-webkit-transform: translate(-50%, 0);
-moz-transform: translate(-50%, 0);
-ms-transform: translate(-50%, 0);
-o-transform: translate(-50%, 0);
transform: translate(-50%, 0);
