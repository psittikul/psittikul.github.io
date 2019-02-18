<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Sample FirebaseUI App</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- Firebase initialization snippet -->
        <script src="https://www.gstatic.com/firebasejs/5.5.6/firebase.js"></script>
        <script>
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyDh7YlCtIAhqM7kBJl7lk7DIAx1w9g_L_Y",
                authDomain: "podpals-afa3c.firebaseapp.com",
                databaseURL: "https://podpals-afa3c.firebaseio.com",
                projectId: "podpals-afa3c",
                storageBucket: "podpals-afa3c.appspot.com",
                messagingSenderId: "681268593249"
            };
            firebase.initializeApp(config);
        </script>

        <script src="https://cdn.firebase.com/libs/firebaseui/3.4.1/firebaseui.js"></script>
        <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.4.1/firebaseui.css" />
        <script type="text/javascript">
            // FirebaseUI config.
            var uiConfig = {
                callbacks: {
                    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                        // User successfully signed in.
                        // Return type determines whether we continue the redirect automatically
                        // or whether we leave that to developer to handle.
                        console.log("successful login");
                        firebase.auth().onAuthStateChanged(function (user) {
                            if (user != null) {
                                user.providerData.forEach(function (profile) {
                                    console.log("Sign-in provider: " + profile.providerId);
                                    console.log("  Provider-specific UID: " + profile.uid);
                                    console.log("  Name: " + profile.displayName);
                                    console.log("  Email: " + profile.email);
                                    console.log("  Photo URL: " + profile.photoURL);
                                });
                            }
                        });
                        return true;
                    },
                },
                signInSuccessUrl: '/podpals/index.php',
                signInOptions: [
                    // Leave the lines as is for the providers you want to offer your users.
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                    //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                    //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
                    firebase.auth.EmailAuthProvider.PROVIDER_ID
                    //   firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                    //   firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
                ]
                // tosUrl and privacyPolicyUrl accept either url string or a callback
                // function.
                // Terms of service url/callback.
                //tosUrl: '<your-tos-url>',
                // Privacy policy url/callback.
                // privacyPolicyUrl: function() {
                //   window.location.assign('<your-privacy-policy-url>');
                // }
            };

            // Initialize the FirebaseUI Widget using Firebase.
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            // The start method will wait until the DOM is loaded.
            ui.start('#firebaseui-auth-container', uiConfig);
        </script>
    </head>
    <body>
        <!-- The surrounding HTML is left untouched by FirebaseUI.
Your app may use that space for branding, controls and other customizations.-->
        <h1>Welcome to My Awesome App</h1>
        <div id="firebaseui-auth-container">


        </div>
    </body>
</html>