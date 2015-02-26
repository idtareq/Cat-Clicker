<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Cat Clicker</title>	
    <!-- <link rel="stylesheet" href="bootstrap.min.css"> -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.2/css/bootstrap.min.css"> 

     <link rel="stylesheet" href="jquery.sidr.light.css">
    <style>
         @import url('http://fonts.googleapis.com/css?family=Montserrat|Bitter'); 
        html {
        overflow-y: scroll; 
        }
        body {
            font-family: 'Montserrat';
            font-size: 62.5%;
            padding-top: 10px;
        }
        .clicks {
            font-size: 4.5em;
        }
        #simple-menu {
            font-size: 4.5em;
        }
        li {
            font-size: 100%;
            font-weight: bold;
        }
        footer {
            font-size: 3em;
        }
        #catName {
            font-size: 4.5em;
        }
        svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 200%;
          pointer-events: none;
        }
        circle {
          fill: rgba(255,55,55,0.5);
          pointer-events: none;
        }
        .catimg {
            width: 100%;
            max-width: 800px;
            display: block;
            margin: 7px auto;
            height: auto;
        }
        .imagecontainer {
            background: url('loading.GIF') 0 0 no-repeat;
            background-position: center center;
            min-height: 70px;
        }

    </style>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <div class="container-fluid">
    <div class="row-fluid">
        <div class="col col-xs-12">
           <a id="simple-menu" class="label label-primary" href="#sidr">Pick a cat</a>
            <br>
            <br>
            <br>
            <div id="sidr">
              <!-- Your content -->
              <ul id="LeftSide" >
              </ul>
            </div>
        </div>
    </div>
      <div class="row-fluid">

        <div class="col col-xs-12">
          
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 id="catName" class="panel-title"></h3>
            </div>
            <div id="Main" class="panel-body">
                <p class="label label-success clicks"></p>
                <br><br>
                <div class="imagecontainer img-responsive">
                    <img src="https://i.imgur.com/dQX78lP.jpg" class="catimg img-rounded">
                </div>
            </div>
        </div>

          <!--/row-->
        </div><!--/span-->
      </div><!--/row-->

      <hr>

      <footer>
        <p>idtareq 2015</p>
      </footer>

    </div> 
<!--
    <script src="jquery-1.11.2.min.js" type="text/javascript"></script>
    <script src="jquery.easing.1.3.js" type="text/javascript"></script>
-->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" type="text/javascript"></script>

    <script src="app.js" type="text/javascript"></script>
    <script src="jquery.sidr.min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function() {
          $('#simple-menu').sidr();
        });
    </script>
<!--     <script src="bootstrap.min.js" type="text/javascript"></script> -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.2/js/bootstrap.min.js" type="text/javascript"></script>  


<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-60163827-1', 'auto');
ga('send', 'pageview');

</script>

</body>
</html>