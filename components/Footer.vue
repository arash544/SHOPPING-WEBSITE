<template>
  <footer class="main-parent" id="lab_social_icon_footer">
    <link
      href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <ul>
      <li>
        <a href="https://www.facebook.com/bootsnipp">
          <i id="social-fb" class="fa fa-facebook-square fa-3x social"></i>
          
        </a>
      </li>

      <li>
        <a href="https://plus.google.com/+Bootsnipp-page">
          <i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/bootsnipp">
          <i id="social-tw" class="fa fa-twitter-square fa-3x social"></i>
        </a>
      </li>
      <li>
        <a href="mailto:#">
          <i id="social-em" class="fa fa-envelope-square fa-3x social"></i>
        </a>
      </li>
    </ul>
    <p>
      Copyright &copy; 2017 All Rights Reserved by
      <span class="foot" href="#">Scanfcode</span>.
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>

.main-parent {
  display: flex;
  width: 100%;
  bottom: 0;
  right: 0;
  left: 0;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-flow: wrap;
  height: 180px;
  background-color:black;
  opacity: .8;
}
ul {
  display: flex;
}
li {
  list-style-type: none;
}
a {
  color: white;
}
.foot {
  color: rgb(189, 102, 102);
}
p{
    color: white;
}
#lab_social_icon_footer .social:hover {
  -webkit-transform: scale(1.1);
}

#lab_social_icon_footer .social {
  -webkit-transform: scale(0.8);
  -webkit-transition-duration: 0.5s;
}

#lab_social_icon_footer #social-fb:hover {
  color: #3b5998;
}

#lab_social_icon_footer #social-tw:hover {
  color: #4099ff;
}

#lab_social_icon_footer #social-gp:hover {
  color: #d34836;
}

#lab_social_icon_footer #social-em:hover {
  color: #f39c12;
}
</style>