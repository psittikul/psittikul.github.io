<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <!--
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
-->

    <title>PodPals</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">


    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Pacifico|Oswald" rel="stylesheet">
    <link rel="stylesheet" href="styles/index-styles.css">
</head>

<body>

    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <a class="navbar-brand" href="#"><img src="styles/site-images/podpals_logo_round.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto top-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Groups</a>
                    <!-- PHP will populate this dropdown with the groups associated with the current user's ID, which is stored as a session variable (not sure how OAuth works with this though?) -->
                    <div class="dropdown-menu" id="groups-dropdown" aria-labelledby="dropdown01">
                        <a class="dropdown-item" href="#">Boo &#10084;</a>
                        <a class="dropdown-item" href="#">Squad</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Manage Groups</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

    <main role="main" class="container-fluid">
        <div class="group-row container-fluid">
            <h2 class="group-name interaction "><a class="interaction-link" href="boo.html">Boo &#10084;</a></h2>
            <div class="group-sec">
                <div class="contact-sec">
                    <div class="contact-pic">
                        <a href="boo.html"><img src="site-images/boo-pro-pic.png" /></a>
                    </div>
                </div>

                <div class="photos-sec">

                </div>
            </div>
        </div>
        <div class="group-row container-fluid">
            <h2 class="group-name interaction interaction-link">Squad</h2>
            <div class="group-sec">
                <div class="contact-sec">
                    <div class="contact-pic">
                        <img src="images/group-pic-min.png" />
                    </div>
                </div>
                <div class="photos-sec">

                </div>
            </div>
        </div>

    </main>
    <!-- /.container -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>

</html>
