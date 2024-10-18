function authStateListener() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid
      location.href = 'culturalconnections.html'
    } else {
    }
  })
}

window.addEventListener('load', function () {
  authStateListener()

  document.getElementById('sign-in-button').addEventListener('click', function () {
    let provider = new firebase.auth.GoogleAuthProvider()

    provider.addScope('email')
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        console.log('Logging sucessfully', result.user)
        location.href = 'culturalconnections.html'
      })
      .catch(function (error) {
        console.log('Logging fail', error)
      })
  })

  document.getElementById('sign-in-2').addEventListener('click', function () {
    let emailTxt = document.getElementById('email').value
    let passtxt = document.getElementById('password').value

    firebase
      .auth()
      .signInWithEmailAndPassword(emailTxt, passtxt)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user
        // ...
        console.log('Logging sucessfully')
        location.href = 'culturalconnections.html'
      })
      .catch((error) => {
        let errorCode = error.code
        let errorMessage = error.message
        console.log('Logging fail', errorMessage)
      })
  })
})
