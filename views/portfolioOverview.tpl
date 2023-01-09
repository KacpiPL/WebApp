<!DOCTYPE html>
% rebase('base.tpl', title='Portfolio Overview')
<html>
<head>
  <link rel="stylesheet" type="text/css" href="/static/css/style.css">
  <title>{{title}}</title>
</head>
<body>
  <div id="container">
    <div id="header">
      <h1>{{title}}</h1>
      <div id="user">
        <img src="/picture/userIcon.png" alt="User Icon">
        <span>{{user}}</span>
      </div>
    </div>
    <div id="nav">
      <ul>
        <li><a href="#">Portfolio Overview</a></li>
        <li><a href="#">Stock Market Info</a></li>
        <li><a href="#">Portfolio Editor</a></li>
        <li><a href="#">Personal Data</a></li>
        <li><a href="#">Change Password</a></li>
      </ul>
    </div>
    <div id="content">
      {{!content}}
    </div>
  </div>
</body>
</html>