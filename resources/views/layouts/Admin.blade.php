<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>پنل مدیریت</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/admin.css') }}" rel="stylesheet">
</head>
<body>

<div class="container-fluid">
    <div class="page_sidebar">
        <span class="fa fa-bars" id="sidebarToggle"></span>
        <ul id="sidebar_menu" class="">
            <li>
                <a>
                    <span class="fa fa-shopping-cart"> </span>
                    <span class="sidebar_menu_text" >محصولات</span>
                    <span class="fa fa-angle-left"> </span>
                </a>
                <div class="child_menu">
                    <a href="#" >مدیریت محصولات</a>
                    <a href="#" >افزودن محصول</a>
                    <a href="#" >مدیریت دسته ها</a>
                </div>
            </li>
            <li>
                <a>
                    <span class="fa fa-sliders"> </span>
                    <span class="sidebar_menu_text" >اسلایدر</span>
                    <span class="fa fa-angle-left"> </span>
                </a>
                <div class="child_menu">
                    <a href="#" > مدیریت اسلایدر</a>
                    <a href="#" >افزودن اسلایدرجدید</a>
                </div>
            </li>
        </ul>
    </div>
    <div class="page_content"  >sdfdsffgfdgfdgfdgdfgdsfsdfsdfsd</div>
</div>

<script src="{{ asset('js/app.js') }}" defer></script>
<script src="{{ asset('js/admin.js') }}" defer></script>
</body>
</html>
